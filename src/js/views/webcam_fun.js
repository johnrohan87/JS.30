import React, { createRef, useRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes, { func } from "prop-types";
import "../../styles/webcam_fun.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

export const WebcamFun = () => {
	let video = null;
	const canvas = useRef(null);
	let strip = null;
	const snap = useRef(null);
	let ctx = null;
	const [photos, setPhotos] = useState({ album: [] });
	const [photoText, setPhotoText] = useState("");
	const [redMin, setRedMin] = useState("128");
	const [redMax, setRedMax] = useState("128");
	const [greenMin, setGreenMin] = useState("128");
	const [greenMax, setGreenMax] = useState("128");
	const [blueMin, setBlueMin] = useState("128");
	const [blueMax, setBlueMax] = useState("128");

	useEffect(
		() => {
			// eslint-disable-line no-console
			video = document.querySelector(".player");
			//canvas = document.querySelector(".photo");
			ctx = canvas.current.getContext("2d");
			//strip = document.querySelector(".strip");
			//snap = document.querySelector(".snap");
			getVideo();
			//console.log(redMin, redMax, greenMin, greenMax, blueMin, blueMax);
		},
		[redMin, redMax, greenMin, greenMax, blueMin, blueMax]
	);

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
			let pixels = ctx.getImageData(0, 0, width, height);

			//pixels = redEffect(pixels);
			//pixels = rgbSplit(pixels);
			//ctx.globalAlpha = 0.1;

			pixels = greenScreen(pixels);

			ctx.putImageData(pixels, 0, 0);
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
		let result = photos.album.map((photo, key) => {
			return (
				<a key={key} href={photo} download={"webcam_fun" + key}>
					<img src={photo} alt={"webcam_fun" + key} />
				</a>
			);
		});
		//console.log(result);
		setPhotoText(result);
	}
	function redEffect(pixels) {
		for (let i = 0; i < pixels.data.length; i += 4) {
			pixels.data[i] = pixels.data[i] + 100; //red
			pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
			pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
		}
		return pixels;
	}
	function rgbSplit(pixels) {
		for (let i = 0; i < pixels.data.length; i += 4) {
			pixels.data[i - 150] = pixels.data[i] + 100; //red
			pixels.data[i + 100] = pixels.data[i + 1] - 50; //green
			pixels.data[i - 150] = pixels.data[i + 2] * 0.5; //blue
		}
		return pixels;
	}
	function greenScreen(pixels) {
		//const levels = {};

		//console.log(pixels.data);
		//debugger;
		//console.log(redMin, redMax, greenMin, greenMax, blueMin, blueMax);
		for (let i = 0; i < pixels.data.length; i = i + 4) {
			let red = pixels.data[i]; //red
			let green = pixels.data[i + 1]; //green
			let blue = pixels.data[i + 2]; //blue
			let alpha = pixels.data[i + 3]; //alpha

			//console.log(pixels.data[i], pixels.data[i + 1], pixels.data[i + 2], pixels.data[i + 3]);

			if (
				red >= redMin &&
				green >= greenMin &&
				blue >= blueMin &&
				red <= redMax &&
				green <= greenMax &&
				blue <= blueMax
			) {
				// remove the alpha
				pixels.data[i + 3] = 0;
				//console.log(red, green, blue, alpha);
			}
		}
		return pixels;
	}

	return (
		<div className="WebcamFun w-100">
			<h1 className="banner text-center mt-5 mx-auto bg-primary">Webcam Fun</h1>

			<div className="photobooth">
				<div className="controls">
					<button onClick={() => takePhoto()}>Take Photo</button>

					<div className="rgb">
						<label htmlFor="rmin">
							Red Min:
							{redMin}
						</label>
						<input
							type="range"
							min="0"
							max="255"
							name="rmin"
							value={redMin}
							onChange={e => {
								setRedMin(e.target.value);
							}}
						/>
						<label htmlFor="rmax">
							Red Max:
							{redMax}
						</label>
						<input
							type="range"
							min="0"
							max="255"
							name="rmax"
							value={redMax}
							onChange={e => setRedMax(e.target.value)}
						/>
						<br />
						<label htmlFor="gmin">
							Green Min:
							{greenMin}
						</label>
						<input
							type="range"
							min="0"
							max="255"
							name="gmin"
							value={greenMin}
							onChange={e => setGreenMin(e.target.value)}
						/>
						<label htmlFor="gmax">
							Green Max:
							{greenMax}
						</label>
						<input
							type="range"
							min="0"
							max="255"
							name="gmax"
							value={greenMax}
							onChange={e => setGreenMax(e.target.value)}
						/>
						<br />
						<label htmlFor="bmin">
							Blue Min:
							{blueMin}
						</label>
						<input
							type="range"
							min="0"
							max="255"
							name="bmin"
							value={blueMin}
							onChange={e => setBlueMin(e.target.value)}
						/>
						<label htmlFor="bmax">
							Blue Max:
							{blueMax}
						</label>
						<input
							type="range"
							min="0"
							max="255"
							name="bmax"
							value={blueMax}
							onChange={e => setBlueMax(e.target.value)}
						/>
					</div>
				</div>

				<canvas className="photo" ref={canvas} />
				<video className="player" onCanPlay={() => paintToCanvas()} />
				<div className="strip">{photoText}</div>
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
