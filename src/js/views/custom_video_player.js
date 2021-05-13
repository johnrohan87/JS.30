import React, { createRef, useEffect, useState, Component } from "react";
import PropTypes from "prop-types";
import "../../styles/custom_video_player.scss";

export default class CustomVideoPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { boxesSelected: [] };
		//this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(props) {
		//console.log(this.name);
		//console.log(this.color);
		//console.log(this.state.color);
	}

	render() {
		// eslint-disable-line no-console

		return (
			<div className="updateBG">
				<h2 className="text-center mt-5 bg-primary card">Custom Video Player</h2>
				<div className="player">
					<video className="player__video viewer" src="../../video/652333414.mp4" />

					<div className="player__controls">
						<div className="progress">
							<div className="progress__filled" />
						</div>
						<button className="player__button toggle" title="Toggle Play">
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
