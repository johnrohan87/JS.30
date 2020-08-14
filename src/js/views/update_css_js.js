import React, { useEffect, useState } from "react";
import "../../styles/update_css_js.scss";

export const UpdateCssJs = () => {
	useEffect(() => {}, []);

	return (
		<div className="updateBG">
			<h2 className="text-center mt-5 bg-primary card">
				Update CSS Variables with <span className="hl">JS</span>
			</h2>

			<div className="text-center">
				<div className="controls m-2">
					<label htmlFor="spacing">Spacing:</label>
					<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" />

					<label htmlFor="blur">Blur:</label>
					<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px" />

					<label htmlFor="base">Base Color</label>

					<input id="base" type="color" name="base" value="#ffc600" />
				</div>

				<img className="img-fluid" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
			</div>
		</div>
	);
};
