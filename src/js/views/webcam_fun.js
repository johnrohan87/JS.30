import React, { createRef, useRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/webcam_fun.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

export const WebcamFun = () => {
	let video = null;
	const canvas = useRef(null);
	let strip = null;
	const snap = useRef(null);
	let ctx = null;
	const [photos, setPhotos] = useState({ album: [] });

	useEffect(() => {
		// eslint-disable-line no-console
		video = document.querySelector(".player");
		//canvas = document.querySelector(".photo");
		ctx = canvas.current.getContext("2d");
		//strip = document.querySelector(".strip");
		//snap = document.querySelector(".snap");
		getVideo();
	}, []);

	function getVideo() {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: false })
			.then(localMediaStream => {
				console.log(localMediaStream);
				video.srcObject = localMediaStream;
				video.play();
			})
			.catch(err => {
				console.error("OH NO!!!", err);
			});
	}
	function paintToCanvas() {
		const width = video.videoWidth;
		const height = video.videoHeight;
		//console.log(width, height);
		canvas.current.width = width;
		canvas.current.height = height;

		return setInterval(() => {
			ctx.drawImage(video, 0, 0, width, height);
		}, 16);
	}
	function takePhoto() {
		//console.log(snap.current);
		snap.current.currentTime = 0;
		snap.current.play();

		const data = canvas.current.toDataURL("image/jpeg");

		let tmpState = photos;
		tmpState.album.push(data);

		() => setPhotos({ tmpState });
		//console.log(tmpState);
		console.log(photos);
	}
	function returnMap(e) {
		console.log(e);
	}

	return (
		<div className="WebcamFun w-100">
			<h1 className="banner text-center mt-5 mx-auto bg-primary">Webcam Fun</h1>

			<div className="photobooth">
				<div className="controls">
					<button onClick={() => takePhoto()}>Take Photo</button>

					<div className="rgb">
						<label htmlFor="rmin">Red Min:</label>
						<input type="range" min="0" max="255" name="rmin" />
						<label htmlFor="rmax">Red Max:</label>
						<input type="range" min="0" max="255" name="rmax" />
						<br />
						<label htmlFor="gmin">Green Min:</label>
						<input type="range" min="0" max="255" name="gmin" />
						<label htmlFor="gmax">Green Max:</label>
						<input type="range" min="0" max="255" name="gmax" />
						<br />
						<label htmlFor="bmin">Blue Min:</label>
						<input type="range" min="0" max="255" name="bmin" />
						<label htmlFor="bmax">Blue Max:</label>
						<input type="range" min="0" max="255" name="bmax" />
					</div>
				</div>

				<canvas className="photo" ref={canvas} />
				<video className="player" onCanPlay={() => paintToCanvas()} />
				<div className="strip">{() => photos.returnMap(photos)}</div>
			</div>

			<audio
				className="snap"
				ref={snap}
				src="https://github.com/wesbos/JavaScript30/blob/master/19%20-%20Webcam%20Fun/snap.mp3?raw=true"
				hidden
			/>
		</div>
	);
};

WebcamFun.propTypes = {
	boxesSelected: PropTypes.string
};
