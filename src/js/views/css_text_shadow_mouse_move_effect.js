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
		this.textRef = createRef();
	}
	componentDidMount(props) {}

	shadow(e) {
		const walk = 100; //100px
		const { offsetWidth: width, offsetHeight: height } = this.heroRef.current;
		let { offsetX: x, offsetY: y } = e.nativeEvent;
		//console.log(width, height, x, y);
		//console.log(this.heroRef.current, e.target);
		if (this.heroRef.current !== e.target) {
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}
		//console.log(x, y);
		const xWalk = Math.round((x / width) * walk - walk / 2);
		const yWalk = Math.round((y / height) * walk - walk / 2);
		//console.log(xWalk, yWalk);
		this.textRef.current.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
		${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
		${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
		${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)`;
	}
	shadowTouch(e) {
		const walk = 100; //100px
		const { offsetWidth: width, offsetHeight: height } = this.heroRef.current;
		let { pageX: x, pageY: y } = e.touches[0];
		//console.log(width, height, x, y);
		//console.log(this.heroRef.current, e.target);
		if (this.heroRef.current !== e.target) {
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}
		//console.log(x, y);
		const xWalk = Math.round((x / width) * walk - walk / 2);
		const yWalk = Math.round((y / height) * walk - walk / 2);
		//console.log(xWalk, yWalk);
		this.textRef.current.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
		${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
		${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
		${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)`;
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
				className="cssTextShadowMouseMoveEffect hero updateBG"
				ref={this.heroRef}
				onMouseMove={e => {
					this.debounce(this.shadow(e));
				}}
				onTouchMove={e => this.shadowTouch(e)}>
				<h1 className="text-center mt-5 bg-primary card">CSS Text Shadow Mouse Move Effect</h1>
				<h2 contentEditable ref={this.textRef}>
					🔥WOAH!
				</h2>
			</div>
		);
	}
}

cssTextShadowMouseMoveEffect.propTypes = {
	boxesSelected: PropTypes.string
};
