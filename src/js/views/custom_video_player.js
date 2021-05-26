import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/custom_video_player.scss";
//import myVideo from "https://github.com/johnrohan87/JS.30/blob/master/src/video/652333414.mp4?raw=true";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

export default class CustomVideoPlayer extends React.Component {
	constructor(props) {
		super(props);
		//this.player = this.handlePlayer.bind(this);
		this.video = React.createRef();
		this.state = {
			videoPaused: true,
			volume: 1,
			playbackRate: 1,
			position: 0,
			duration: 0,
			percent: 0
		};
		this.progress = React.createRef();
		this.progressFilled = React.createRef();

		//waiting to be constructed
		//this.toggle = this.handlevideo.bind(this);
		//this.skipButton = this.handleProgress.bind(this);
		//this.ranges = this.handleProgressFilled.bind(this);
	}
	componentDidMount(props) {
		//const videoPlayer = this.video;
		setInterval(() => {
			const percent = (this.video.currentTime / this.video.duration) * 100;
			this.setState({ position: this.video.currentTime, duration: this.video.duration, percent: percent });
			//console.log(this.state);
		}, 1000);
	}

	handlePlayer(e) {
		//console.log(e);
	}
	handlevideo(e) {
		//console.log(e);
	}
	handleProgress() {
		const percent = (this.video.currentTime / this.video.duration) * 100;
		this.setState({ progress: percent });
		//console.log(this.state.progress);
	}
	togglePlay() {
		const videoPlayer = this.video;
		//console.log(videoPlayer.duration);
		if (videoPlayer.paused) {
			videoPlayer.play();
			this.setState({ videoPaused: false });
		} else {
			videoPlayer.pause();
			this.setState({ videoPaused: true });
		}
	}
	handleRangeUpdate(e) {
		let tmpValue = e.target.value;
		if (e.target.name === "playbackRate") {
			this.setState(() => ({
				playbackRate: tmpValue
			}));
			this.video.playbackRate = tmpValue;
			//console.log(this.state.playbackRate);
		}
		if (e.target.name === "volume") {
			this.setState(() => ({
				volume: tmpValue
			}));
			this.video.volume = tmpValue;
			//console.log(this.state.volume);
		}
		//console.log(e.target.name);
		//console.log(this.state);
	}
	scrub(e) {
		//console.log(e);
		this.video.currentTime = e;
	}

	render() {
		// eslint-disable-line no-console
		const { volume } = this.state;
		const { playbackRate } = this.state;
		var date = new Date(null);
		date.setSeconds(Math.round(this.state.position)); // specify value for SECONDS here
		var result = date.toISOString().substr(11, 8);

		return (
			<div className="CustomVideoPlayer updateBG">
				<h2 className="text-center mt-5 bg-primary card">Custom Video Player</h2>
				<div className="player" ref={this.player}>
					<video
						className="player__video player"
						src={"https://github.com/johnrohan87/JS.30/blob/master/src/video/652333414.mp4?raw=true"}
						ref={el => (this.video = el)}
						onClick={() => {
							this.togglePlay();
						}}
						onPlaying={() => this.handleProgress()}
						playbackRate={playbackRate}
						volume={volume}
						type="video/mp4"
					/>

					<div className="player__controls">
						<div
							className="progress"
							ref={el => (this.progress = el)}
							onClick={e => {
								this.scrub((e.nativeEvent.offsetX / this.progress.offsetWidth) * this.video.duration);
							}}
							onChange={e => {
								this.scrub((e.nativeEvent.offsetX / this.progress.offsetWidth) * this.video.duration);
							}}>
							<div
								className="progress__filled"
								ref={el => (this.progressFilled = el)}
								style={{ flexBasis: this.state.percent + "%" }}
							/>
						</div>
						<button
							className="player__button toggle"
							title="Toggle Play"
							onClick={e => {
								this.togglePlay(e);
							}}>
							{this.state.videoPaused ? "►" : "▌▌"}
						</button>
						<input
							type="range"
							name="volume"
							className="player__slider"
							min="0"
							max="1"
							step="0.05"
							value={volume}
							onChange={e => this.handleRangeUpdate(e)}
						/>
						<input
							type="range"
							name="playbackRate"
							className="player__slider"
							min="0.5"
							max="2"
							step="0.1"
							value={playbackRate}
							onChange={e => this.handleRangeUpdate(e)}
						/>
						<button
							data-skip="-10"
							className="player__button"
							onClick={() => {
								this.video.currentTime += -10;
							}}>
							« 10s
						</button>
						<button
							data-skip="25"
							className="player__button"
							onClick={() => {
								this.video.currentTime += 25;
							}}>
							25s »
						</button>
					</div>
				</div>
				<div>
					<div>position = {result}</div>
					<div>volume = {volume}</div>
					<div>playback rate = {playbackRate}</div>
				</div>
			</div>
		);
	}
}

CustomVideoPlayer.propTypes = {
	boxesSelected: PropTypes.string
};
