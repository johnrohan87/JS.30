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
			add_items: null,
			items_list: null,
			items: []
		};
	}
	componentDidMount(props) {
		const addItems = document.querySelector(".add-items");
		const itemsList = document.querySelector(".plates");
		this.setState({ add_items: addItems, items_list: itemsList });
		console.log(addItems, itemsList);
		//addItems.addEventListener("submit", ()=>{});
	}
	addItem(e) {
		const text = document.querySelector("[name=item]");
		const item = {
			text: text.value,
			done: false
		};
		//console.log(item);
		text.value = "";
		this.setState((state, item) => {
			items: [...state.items, item];
		});
		console.log(this.state);
		//this.populateList(this.state.items, this.state.items_list);
	}
	populateList(plates = [], platesList) {
		platesList.innerHTML = plates
			.map((plate, i) => {
				return `
			<li>
			<label for="">${plate.text}</label>
			</li>
			`;
			})
			.join("");
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
						{this.state.items.forEach(item => {
							return <label>{item.text}</label>;
						})}
					</ul>
					<form className="add-items">
						<input type="text" name="item" placeholder="Item Name" required />
						<input
							type="submit"
							value="+ Add Item"
							onClick={e => {
								e.preventDefault();
								this.addItem(e);
							}}
						/>
					</form>
				</div>
			</div>
		);
	}
}

LocalStorageAndEventDelegation.propTypes = {
	boxesSelected: PropTypes.string
};
