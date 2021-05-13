import React, { createRef, useEffect, useState, Component } from "react";
import PropTypes from "prop-types";
import "../../styles/check_multiple_checkboxes.scss";

let lastChecked;

export default class CheckMultipleCheckboxes extends React.Component {
	constructor(props) {
		super(props);
		this.state = { boxesSelected: [] };
		this.inputs = [];
		this.handleClick = this.handleClick.bind(this);
		this.itemEls = React.createRef(new Array());

		this.state.boxes = [
			"This is an inbox layout.",
			"Check one item",
			"Hold down your Shift key",
			"Check a lower item",
			"Everything in between should also be set to checked",
			"Try to do it without any libraries",
			"Just regular JavaScript",
			"Good Luck!",
			"Dont forget to tweet your result!",
			"Testing!"
		];
	}
	componentDidMount(props) {
		//console.log(this.name);
		//console.log(this.color);
		//console.log(this.state.color);
	}
	handleClick(e) {
		//console.log("last checked" + lastChecked);
		if (e.shiftKey && e.target.checked) {
			let inBetween = false;
			this.inputs.forEach(checkbox => {
				//console.log(checkbox);
				if (checkbox === e.target || checkbox === lastChecked) {
					inBetween = !inBetween;
					//console.log("Starting to check items inBetween");
				}
				if (inBetween) {
					checkbox.checked = true;
				}
			});

			/*
			this.setState({ boxesSelected: [...this.state.boxesSelected, e.target] }, () =>
				//console.log(this.state.boxesSelected)
				{
					//console.log(this.state.boxesSelected.length);
					let itemIDs = [];

					if (this.state.boxesSelected.length >= 2) {
						this.state.boxesSelected.forEach((item, key) => {
							console.log(item, key); // eslint-disable-line no-console
							itemIDs = [...itemIDs, item.id];
						});
						console.log("itemIDs = " + itemIDs);
						console.log(itemIDs[0] - itemIDs[1]);
					}
				}
			);
			*/
		}
		lastChecked = this.inputs[e.target.id];
		//console.log(lastChecked);
	}

	render() {
		// eslint-disable-line no-console

		return (
			<div className="updateBG">
				<h2 className="text-center mt-5 bg-primary card">Check Multiple Checkboxes</h2>
				<div className="inbox">
					{this.state.boxes.map((box, key) => {
						this.inputs[key] = React.createRef;
						return (
							<div className="item" key={key}>
								<input
									type="checkbox"
									onClick={this.handleClick}
									id={key}
									ref={el => (this.inputs[key] = el)}
								/>
								<p>{box}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

CheckMultipleCheckboxes.propTypes = {
	boxesSelected: PropTypes.string
};
