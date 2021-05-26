import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/custom_video_player.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

export default class KeySequenceDetection extends React.Component {
	constructor(props) {
		super(props);
		//this.player = this.handlePlayer.bind(this);
		//this.video = React.createRef();
		this.state = {
			currentKey: null,
			pressed: [],
			secretCode: "john",
			currentKeySet: null,
			message: null
		};
	}
	componentDidMount(props) {
		window.addEventListener("keyup", e => {
			this.setState({ currentKey: e.key, pressed: [...this.state.pressed, e.key] });
			let tmpState = this.state.pressed;
			tmpState.splice(-this.state.secretCode - 1, tmpState.length - this.state.secretCode.length);
			this.setState({ pressed: tmpState, currentKeySet: tmpState.join("") });
			if (tmpState.join("").includes(this.state.secretCode)) {
				this.setState({ message: "we have a winner" });
			} else {
				this.setState({ message: "" });
			}
			//console.log(this.state.pressed);
		});
	}

	render() {
		// eslint-disable-line no-console
		const { volume } = this.state;
		const { playbackRate } = this.state;

		return (
			<div className="KeySequenceDetection updateBG">
				<h2 className="text-center mt-5 bg-primary card">Key Sequence Detection</h2>
				<div>HINT: whats my name?</div>
				<div>The last key pressed {this.state.currentKey}</div>
				<div>Key Combo {this.state.currentKeySet}</div>
				<div>{this.state.message}</div>
			</div>
		);
	}
}

KeySequenceDetection.propTypes = {
	boxesSelected: PropTypes.string
};
