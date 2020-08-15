import React, { useEffect, useState } from "react";
import "../../styles/flex_panels.scss";

let panels;

export const FlexPanels = () => {
	useEffect(() => {
		panels = document.querySelectorAll(".panel");
		panels.forEach(panel => panel.addEventListener("click", toggleOpen));
		console.log(panels);
	}, []);

	function toggleOpen() {
		console.log(this);
		this.target.classList.toggle("open");
	}

	const [panel1Open, setPanel1Open] = useState("");
	const [panel2Open, setPanel2Open] = useState("");
	const [panel3Open, setPanel3Open] = useState("");
	const [panel4Open, setPanel4Open] = useState("");
	const [panel5Open, setPanel5Open] = useState("");

	return (
		<div className="flexPanels">
			<h2 className="text-center mt-5 bg-primary card">Flex Panels</h2>
			<div className="text-center">
				<div className="panels d-flex">
					<div
						className="panel panel1"
						/*onClick={() => (
							panel1Open ? setPanel1Open("") : setPanel1Open("open open-active"),
							setPanel2Open(""),
							setPanel3Open(""),
							setPanel4Open(""),
							setPanel5Open("")
						)}*/
					>
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
