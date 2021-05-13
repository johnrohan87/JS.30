import React, { createRef, useEffect, useState, Component } from "react";
import PropTypes from "prop-types";
import "../../styles/custom_video_player.scss";
import myVideo from "../../video/652333414.mp4";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

export default class CustomVideoPlayer extends React.Component {
	constructor(props) {
		super(props);
		//this.state = { boxesSelected: [] };
		this.player = this.handlePlayer.bind(this);
		this.video = this.handlevideo.bind(this);
		this.progress = this.handleProgress.bind(this);
		this.progressFilled = this.handleProgressFilled.bind(this);

		//waiting to be constructed
		//this.toggle = this.handlevideo.bind(this);
		//this.skipButton = this.handleProgress.bind(this);
		//this.ranges = this.handleProgressFilled.bind(this);
	}
	componentDidMount(props) {
		//console.log(this.name);
		//console.log(this.color);
		//console.log(this.state.color);
	}
	handlePlayer(e) {
		console.log(e);
	}
	handlevideo(e) {
		console.log(e);
	}
	handleProgress(e) {
		console.log(e);
	}
	handleProgressFilled(e) {
		console.log(e);
	}
	togglePlay(e) {
		//console.log(e.target);
		if (e.target.paused) {
			e.target.play();
		} else {
			e.target.pause();
		}
	}

	render() {
		// eslint-disable-line no-console

		return (
			<div className="updateBG">
				<h2 className="text-center mt-5 bg-primary card">Custom Video Player</h2>
				<div className="player" ref={this.player}>
					<video
						className="player__video viewer"
						src={myVideo}
						ref={this.video}
						autoPlay
						onClick={e => {
							this.togglePlay(e);
						}}
					/>

					<div className="player__controls">
						<div className="progress" ref={this.progress}>
							<div className="progress__filled" ref={this.progressFilled} />
						</div>
						<button
							className="player__button toggle"
							title="Toggle Play"
							onClick={e => {
								this.togglePlay(e);
							}}>
							►
						</button>
						<input
							type="range"
							name="volume"
							className="player__slider"
							min="0"
							max="1"
							step="0.05"
							value="1"
						/>
						<input
							type="range"
							name="playbackRate"
							className="player__slider"
							min="0.5"
							max="2"
							step="0.1"
							value="1"
						/>
						<button data-skip="-10" className="player__button">
							« 10s
						</button>
						<button data-skip="25" className="player__button">
							25s »
						</button>
					</div>
				</div>
			</div>
		);
	}
}

CustomVideoPlayer.propTypes = {
	boxesSelected: PropTypes.string
};
