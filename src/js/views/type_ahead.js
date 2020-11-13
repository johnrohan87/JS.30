import React, { useEffect, useState } from "react";
import "../../styles/type_ahead.scss";
const reactStringReplace = require("react-string-replace");

const cities = [];
let searchInput;
let suggestions;

export const TypeAhead = () => {
	const [returnHTML, setReturnHTML] = useState(null);

	useEffect(() => {
		const endpoint =
			"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

		fetch(endpoint)
			.then(blob => blob.json())
			.then(data => cities.push(...data));

		searchInput = document.querySelector(".search");
		suggestions = document.querySelector(".suggestions");

		searchInput.addEventListener("change", displayMatches);
		searchInput.addEventListener("keyup", displayMatches);

		//console.log("finished loading", cities);
	}, []);

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	//console.log(cities);
	function findMatches(wordToMatch, cities) {
		return cities.filter(place => {
			const regex = new RegExp(wordToMatch, "gi");
			return place.city.match(regex) || place.state.match(regex);
		});
	}
	function displayMatches() {
		const matchArray = findMatches(this.value, cities);
		if (this.value == "") {
			setReturnHTML(null);
			return;
		}
		const html = matchArray.map(place => {
			//console.log(place);
			const regex = new RegExp(this.value, "gi");
			//console.log("regex = ", regex);
			//console.log("this.value = ", this.value);
			//console.log("matchArray = ", matchArray);
			//console.log("place.city = ", place.city);
			return (
				<li key={place.rank}>
					<span className="name">
						{reactStringReplace(place.city, this.value, (match, i) => (
							<span className="hl">{this.value}</span>
						))}
						,{" "}
						{reactStringReplace(place.state, this.value, (match, i) => (
							<span className="hl">{this.value}</span>
						))}
					</span>
					<span className="population">{numberWithCommas(place.population)}</span>
				</li>
			);
		});
		//console.log(html);
		setReturnHTML(html);
	}

	return (
		<div className="typeAhead">
			<h2 className="text-center mt-5 bg-primary card">Type Ahead</h2>
			<div className="text-center">
				<form className="search-form">
					<input type="text" className="search" placeholder="City or State" />
					<ul className="suggestions">
						{returnHTML}
						<li>Filter for a city</li>
						<li>or a state</li>
					</ul>
				</form>
			</div>
		</div>
	);
};
