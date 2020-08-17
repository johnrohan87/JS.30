import React, { useEffect, useState } from "react";
import "../../styles/type_ahead.scss";

export const TypeAhead = () => {
	const endpoint =
		"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

	useEffect(() => {}, []);

	return (
		<div className="typeAhead">
			<h2 className="text-center mt-5 bg-primary card">Type Ahead</h2>
			<div className="text-center">
				<form className="search-form">
					<input type="text" className="search" placeholder="City or State" />
					<ul className="suggestions">
						<li>Filter for a city</li>
						<li>or a state</li>
					</ul>
				</form>
			</div>
		</div>
	);
};
