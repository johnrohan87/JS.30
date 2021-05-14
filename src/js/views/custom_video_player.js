import React, { useRef, createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/custom_video_player.scss";
import myVideo from "../../video/652333414.mp4";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

export const CustomVideoPlayer = () => {
	const [playing, setPlaying] = useState(false);
	const [position, setPosition] = useState(0);
	const [volume, setVolume] = useState(0);
	const [playbackRate, setPlaybackRate] = useState(1);
	const video = useRef();

	const togglePlay = e => {
		setPlaying(!playing);
		setPosition(video.current.currentTime);
		//console.log(video.current);
		//playing ? video.current.play() : video.current.pause();
		console.log(position);
	};

	useEffect(
		() => {
			if (playing) {
				video.current.play();
				setPlaying(true);
			} else {
				video.current.pause();
				setPlaying(false);
			}
			console.log(playing);
		},
		[playing]
	);
	useEffect(
		() => {
			setPosition(video.current.currentTime);
			console.log(position);
		},
		[position]
	);

	return (
		<div className="updateBG">
			<h2 className="text-center mt-5 bg-primary card">Custom Video Player</h2>
			<div className="player">
				<video
					className="player__video player"
					src={myVideo}
					ref={video}
					playing={playing}
					onClick={e => {
						togglePlay(e);
					}}
				/>

				<div className="player__controls">
					<div className="progress">
						<div className="progress__filled" />
					</div>
					<button
						className="player__button toggle"
						title="Toggle Play"
						onClick={e => {
							togglePlay(e);
						}}>
						{playing ? "▌▌" : "►"}
					</button>
					<input
						type="range"
						name="volume"
						className="player__slider"
						min="0"
						max="1"
						step="0.05"
						value={volume}
						onChange={e => {
							setVolume(e.target.value);
						}}
					/>
					<input
						type="range"
						name="playbackRate"
						className="player__slider"
						min="0.5"
						max="2"
						step="0.1"
						value={playbackRate}
						onChange={e => {
							setPlaybackRate(e.target.value);
						}}
					/>
					<button
						data-skip="-10"
						className="player__button"
						onClick={() => {
							video.current.currentTime += -10;
						}}>
						« 10s
					</button>
					<button
						data-skip="25"
						className="player__button"
						onClick={() => {
							video.current.currentTime += +25;
						}}>
						25s »
					</button>
				</div>
			</div>
		</div>
	);
};

export default CustomVideoPlayer;

/*
import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/custom_video_player.scss";
import myVideo from "../../video/652333414.mp4";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

export default class CustomVideoPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.player = this.handlePlayer.bind(this);
		this.video = React.createRef();
		this.state = {
			videoPaused: true,
			volume: 1,
			playbackRate: 1,
			position: 0,
			duration: 0
		};
		this.progress = React.createRef();
		this.progressFilled = React.createRef();

		//waiting to be constructed
		//this.toggle = this.handlevideo.bind(this);
		//this.skipButton = this.handleProgress.bind(this);
		//this.ranges = this.handleProgressFilled.bind(this);
	}
	componentDidMount(props) {
		const videoPlayer = this.video;
		this.setState({ duration: videoPlayer.duration, position: videoPlayer.position });
		console.log(this.state);
	}
	handlePlayer(e) {
		console.log(e);
	}
	handlevideo(e) {
		console.log(e);
	}
	handleProgress(e) {
		const videoPlayer = this.video;
		const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
		console.log(percent);

		//progressFilled.style.flexBasis = `${percent}`;
	}
	togglePlay() {
		const videoPlayer = this.video;
		console.log(videoPlayer.duration);
		if (videoPlayer.paused) {
			videoPlayer.play();
			this.setState({ videoPaused: false });
		} else {
			videoPlayer.pause();
			this.setState({ videoPaused: true });
		}
	}
	handleRangeUpdate(e) {
		if (e.target.name === "playbackRate") {
			this.setState({ playbackRate: e.target.value });
		}
		if (e.target.name === "volume") {
			this.setState({ volume: e.target.value });
		}
		//console.log(e.target.name);
		//console.log(this.state);
	}

	render() {
		// eslint-disable-line no-console
		const { volume } = this.state;
		const { playbackRate } = this.state;

		return (
			<div className="updateBG">
				<h2 className="text-center mt-5 bg-primary card">Custom Video Player</h2>
				<div className="player" ref={this.player}>
					<video
						className="player__video player"
						src={myVideo}
						ref={el => (this.video = el)}
						onClick={() => {
							this.togglePlay();
						}}
						onPlaying={() => this.handleProgress()}
					/>

					<div className="player__controls">
						<div className="progress" ref={el => (this.progress = el)}>
							<div className="progress__filled" ref={el => (this.progressFilled = el)} />
						</div>
						<button
							className="player__button toggle"
							title="Toggle Play"
							onClick={e => {
								this.togglePlay(e);
							}}>
							{this.state.videoPaused ? "▌▌" : "►"}
						</button>
						<input
							type="range"
							name="volume"
							className="player__slider"
							min="0"
							max="1"
							step="0.05"
							value={volume}
							onChange={this.handleRangeUpdate.bind(this)}
						/>
						<input
							type="range"
							name="playbackRate"
							className="player__slider"
							min="0.5"
							max="2"
							step="0.1"
							value={playbackRate}
							onChange={this.handleRangeUpdate.bind(this)}
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
			</div>
		);
	}
}

CustomVideoPlayer.propTypes = {
	boxesSelected: PropTypes.string
};
*/
