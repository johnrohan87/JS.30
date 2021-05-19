import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/local_storage_and_event_delegation.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ohlala from "../../img/oh-la-la.jpeg";
import { Label } from "react-konva";

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
		this.setState(() => ({ add_items: addItems, items_list: itemsList }));
		console.log(addItems, itemsList);
		//addItems.addEventListener("submit", ()=>{});
	}
	addItem(e) {
		const text = document.querySelector("[name=item]");
		//console.log(text.value);
		const item = {
			text: text.value,
			done: false
		};
		//console.log(item);
		let tmpState = null;
		tmpState = this.state.items;
		tmpState.push(item);
		//console.log(this.state.items);
		this.setState(() => ({ items: tmpState }), console.log(this.state.items));
		this.state.add_items.reset();
	}
	removeItem(event, item) {
		//console.log(event, item);
		let tmpState = null;
		tmpState = this.state.items;

		tmpState.pop(item.item);

		this.setState(() => ({ items: tmpState }), console.log(this.state.items));
	}

	render() {
		// eslint-disable-line no-console
		let confirm;
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
						{this.state.items.map((item, key) => {
							return (
								<li key={key} style={{ color: "black" }}>
									{item.text}
									<div
										style={{
											float: "right",
											textAlign: "right",
											display: "flex",
											marginLeft: "auto"
										}}>
										<div style={{ float: "left", maxWidth: "70%" }}>
											{item.done ? "Complete" : "Pending"}
										</div>
										<div className="MyCheckbox" style={{ float: "right", margin: "0 !important" }}>
											<input
												type="checkbox"
												key={key}
												style={{ display: "inline", margin: "auto 5px auto 5px" }}
											/>
											<div
												className="xButton"
												type="button"
												onClick={event => {
													this.removeItem(event, item);
												}}>
												X
											</div>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
					<form className="add-items">
						<input type="text" name="item" placeholder="Item Name" required />
						<input
							type="button"
							value="+ Add Item"
							onClick={e => {
								//e.preventDefault();
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
