import React, { useEffect, useState } from "react";
import "../../styles/flex_panels.scss";

let panels;

export const FlexPanels = () => {
	useEffect(() => {
		panels = document.querySelectorAll(".panel");
		panels.forEach(panel => panel.addEventListener("click", toggleOpen));
		panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
	}, []);

	function toggleOpen() {
		//console.log(this);
		this.classList.toggle("open");
	}
	function toggleActive(e) {
		//console.log(e.propertyName);
		e.propertyName.includes("flex") ? this.classList.toggle("open-active") : "";
	}

	return (
		<div className="flexPanels">
			<h2 className="text-center mt-5 bg-primary card">Flex Panels</h2>
			<div className="text-center">
				<div className="panels">
					<div className="panel panel1">
						<p>Hey</p>
						<p>Let&#39;s</p>
						<p>Dance</p>
					</div>
					<div className="panel panel2">
						<p>Give</p>
						<p>Take</p>
						<p>Receive</p>
					</div>
					<div className="panel panel3">
						<p>Experience</p>
						<p>It</p>
						<p>Today</p>
					</div>
					<div className="panel panel4">
						<p>Give</p>
						<p>All</p>
						<p>You can</p>
					</div>
					<div className="panel panel5">
						<p>Life</p>
						<p>In</p>
						<p>Motion</p>
					</div>
				</div>
			</div>
		</div>
	);
};
