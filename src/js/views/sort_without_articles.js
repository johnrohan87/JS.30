import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/sort_without_articles.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

let sortedBands = null;
const bands = [
	"The Plot in You",
	"The Devil Wears Prada",
	"Pierce the Veil",
	"Norma Jean",
	"The Bled",
	"Say Anything",
	"The Midway State",
	"We Came as Romans",
	"Counterparts",
	"Oh, Sleeper",
	"A Skylit Drive",
	"Anywhere But Here",
	"An Old Dog"
];

export const SortWithoutArticles = () => {
	const [bandsList, setBandsList] = useState(null);

	function strip(bandName) {
		return bandName.replace(/^(a |the |an )/i, "").trim();
	}

	useEffect(() => {
		sortedBands = bands.sort((item1, item2) => (strip(item1) > strip(item2) ? 1 : -1));
		let result = sortedBands.map((band, key) => <li key={key}>{band}</li>);
		setBandsList(result);
		//console.log(result);
	}, []);

	// eslint-disable-line no-console

	return (
		<div className="SortWithoutArticles w-100">
			<h1 className="banner text-center mt-5 mx-auto bg-primary">Sort Without Articles</h1>

			<ul id="bands">{bandsList}</ul>
		</div>
	);
};

SortWithoutArticles.propTypes = {
	boxesSelected: PropTypes.string
};
