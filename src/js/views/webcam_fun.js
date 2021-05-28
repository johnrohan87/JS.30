import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/webcam_fun.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

export const WebcamFun = () => {
	useEffect(() => {
		// eslint-disable-line no-console
		const video = document.querySelector(".player");
		const canvas = document.querySelector(".photo");
		const ctx = canvas.getContext("2d");
		const strip = document.querySelector(".strip");
		const snap = document.querySelector(".snap");
	}, []);

	function getVideo() {
		navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(localMediaStream => {
			console.log(localMediaStream);
		});
	}

	return (
		<div className="WebcamFun w-100">
			<h1 className="banner text-center mt-5 mx-auto bg-primary">Webcam Fun</h1>

			<div className="photobooth">
				<div className="controls">
					<button>Take Photo</button>

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

				<canvas className="photo" />
				<video className="player" />
				<div className="strip" />
			</div>

			<audio
				className="snap"
				src="https://github.com/wesbos/JavaScript30/blob/master/19%20-%20Webcam%20Fun/snap.mp3?raw=true"
				hidden
			/>
		</div>
	);
};

WebcamFun.propTypes = {
	boxesSelected: PropTypes.string
};
