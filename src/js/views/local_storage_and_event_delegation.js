import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/local_storage_and_event_delegation.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ohlala from "../../img/oh-la-la.jpeg";

export default class LocalStorageAndEventDelegation extends React.Component {
	constructor(props) {
		super(props);
		//this.player = this.handlePlayer.bind(this);
		this.sliderImages = [];
		this.state = {
			currentKey: null,
			elements: null,
			imageActive: []
		};
	}
	componentDidMount(props) {
		const sliderImages = document.querySelectorAll(".slide-in");
		//console.log(DOMNode);
		this.setState({ elements: sliderImages });
		window.addEventListener("scroll", this.debounce(() => this.checkSlide()));
	}
	checkSlide() {
		this.state.elements.forEach((image, key) => {
			//halfway through the image
			const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
			//console.log(slideInAt);

			//bottom of the image
			const imageBottom = image.offsetTop + image.height;

			const isHalfShown = slideInAt > image.offsetTop;
			const isNotScrolledPast = window.scrollY < imageBottom;

			if (isHalfShown && isNotScrolledPast) {
				//console.log(isHalfShown, isNotScrolledPast);
				console.log(image, key);
				if (!image.className.includes(" active")) {
					image.className = image.className.concat(" active");
				}
			} else {
				//console.log(isHalfShown, isNotScrolledPast);
				if (image.className.includes("active")) {
					image.className = image.className.replace(" active", "");
				}
			}
		});
	}
	debounce(func, wait = 20, immediate = true) {
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
		const { volume } = this.state;
		const { playbackRate } = this.state;

		return (
			<div className="updateBG" style={{ background: `url("${ohlala}")` }}>
				<h1 className="text-center mt-5 bg-primary card">Local Storage And Event Delegation</h1>
				<div className="wrapper">
					<h2>LOCAL TAPAS</h2>
					<p />
					<ul className="plates">
						<li>Loading Tapas...</li>
					</ul>
					<form className="add-items">
						<input type="text" name="item" placeholder="Item Name" required />
						<input type="submit" value="+ Add Item" />
					</form>
				</div>
			</div>
		);
	}
}

LocalStorageAndEventDelegation.propTypes = {
	boxesSelected: PropTypes.string
};
