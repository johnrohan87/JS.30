import React, { useEffect, useState } from "react";
import "../../styles/clock.scss";

export const Clock = () => {
	useEffect(() => {}, []);

	const secondHand = document.querySelector(".second-hand");

	function setDate() {
		const now = new Date();
		const seconds = now.getSeconds();
		const secondsDegrees = (seconds / 60) * 360;
		console.log(secondHand);
		//secondHand.style.transform = "rotate(" + secondsDegrees + ")";
		console.log(seconds);
	}

	setInterval(setDate, 1000);

	return (
		<div className="text-center mt-5 clockbg">
			<h1 className="card">Clock</h1>
			<div className="clock">
				<div className="clock-face">
					<div className="hand hour-hand" />
					<div className="hand min-hand" />
					<div className="hand second-hand" />
				</div>
			</div>
		</div>
	);
};
