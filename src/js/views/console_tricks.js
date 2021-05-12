import React, { useEffect, useState, Component } from "react";
import PropTypes from "prop-types";
import "../../styles/update_css_js.scss";

export default class ConsoleTricks extends React.Component {
	constructor(props) {
		super(props);
		this.state = { color: "red" };
		this.name = this.constructor.name;
		this.color = this.state.color;
	}
	componentDidMount(props) {
		//console.log(this.name);
		//console.log(this.color);
		//console.log(this.state.color);
		const p = document.querySelector("p");
		console.assert(p.classList.contains("ouch"), "that is wrong!"); // eslint-disable-line no-console
		console.log(p); // eslint-disable-line no-console
		console.dir(p); // eslint-disable-line no-console
	}
	changeColor() {
		//console.log(this.state.color);
		if (this.state.color === "red") {
			this.setState({
				color: "green"
			});
			//console.log("set to green");
		} else {
			this.setState({
				color: "red"
			});
			//console.log("set to red");
		}
	}

	render() {
		const dogs = [{ name: "snickers", age: 2 }, { name: "hugo", age: 8 }];

		console.log("Hello"); // eslint-disable-line no-console
		console.log("Hello I am a %s string!", "💩"); // eslint-disable-line no-console
		console.log("%c I am some great text!", "font-size:50px; background:red; text-shadow: 10px 10px 0 blue;"); // eslint-disable-line no-console
		console.warn("Ooooo No!"); // eslint-disable-line no-console
		console.error("Error!!"); // eslint-disable-line no-console

		// eslint-disable-next-line no-console
		console.info(
			"How many amendments have been made to the US Constitution? There are 27 amendments to the Constitution"
		); // eslint-disable-line no-console
		// console.clear

		dogs.forEach(dog => {
			console.groupCollapsed(`${dog.name}`); // eslint-disable-line no-console
			console.log(`This is ${dog.name}`); // eslint-disable-line no-console
			console.log(`${dog.name} is ${dog.age} years old`); // eslint-disable-line no-console
			console.log(`${dog.name} is ${dog.age * 7} dog years old`); // eslint-disable-line no-console
			console.groupEnd(`${dog.name}`); // eslint-disable-line no-console
		});

		console.count("Wes"); // eslint-disable-line no-console
		console.count("Dave"); // eslint-disable-line no-console
		console.count("John"); // eslint-disable-line no-console
		console.count("John"); // eslint-disable-line no-console
		console.count("Wes"); // eslint-disable-line no-console
		console.count("Dave"); // eslint-disable-line no-console
		console.count("John"); // eslint-disable-line no-console
		console.count("Wes"); // eslint-disable-line no-console
		console.count("Dave"); // eslint-disable-line no-console
		console.count("John"); // eslint-disable-line no-console

		console.time("Fetching Data"); // eslint-disable-line no-console
		fetch("https://api.github.com/users/johnrohan87")
			.then(data => data.json())
			.then(data => {
				console.timeEnd("Fetching Data"); // eslint-disable-line no-console
				console.log(data); // eslint-disable-line no-console
			});

		console.table(dogs); // eslint-disable-line no-console

		return (
			<div className="updateBG">
				<h2 className="text-center mt-5 bg-primary card">Console Tricks</h2>
				<p>
					<em>Psst: have a look at the JavaScript Console</em> 💁
				</p>

				<div className="text-center" style={{ color: this.state.color }} onClick={this.changeColor.bind(this)}>
					Make {this.state.color === "red" ? "Green" : "Red"}!
				</div>
			</div>
		);
	}
}

ConsoleTricks.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string
};
