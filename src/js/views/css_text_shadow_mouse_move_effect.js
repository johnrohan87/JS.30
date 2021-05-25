import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/css_text.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ohlala from "../../img/oh-la-la.jpeg";
import { Label } from "react-konva";

export default class cssTextShadowMouseMoveEffect extends React.Component {
	constructor(props) {
		super(props);
		//this.player = this.handlePlayer.bind(this);
		this.sliderImages = [];
		this.state = {
			add_items: null,
			items_list: null,
			items: []
		};
		this.heroRef = createRef();
	}
	componentDidMount(props) {}

	shadow(e) {
		const { offsetWidth: width, offsetHeight: height } = this.heroRef.current;
		let { offsetX: x, offsetY: y } = e.nativeEvent;
		console.log(width, height, x, y);
	}
	debounce(func, wait = 50, immediate = true) {
		var timeout;
		return function() {
			var context = this,
				args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	render() {
		// eslint-disable-line no-console

		return (
			<div
				className="hero updateBG"
				ref={this.heroRef}
				onMouseMove={e => {
					this.debounce(this.shadow(e));
				}}>
				<h1 className="text-center mt-5 bg-primary card">CSS Text Shadow Mouse Move Effect</h1>
				<h2 contentEditable>🔥WOAH!</h2>
			</div>
		);
	}
}

cssTextShadowMouseMoveEffect.propTypes = {
	boxesSelected: PropTypes.string
};
