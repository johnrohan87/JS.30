import React, { useEffect, useState } from "react";
import "../../styles/clock.scss";

export const Clock = () => {
	useEffect(() => {}, []);
	const [secondsDegrees, setSecondsDegrees] = useState("");
	const [minutesDegrees, setMinutesDegrees] = useState("");
	const [hoursDegrees, setHoursDegrees] = useState("");

	//const secondHand = document.querySelector(".second-hand");
	let hourHand = <div className="hand hour-hand" style={{ transform: "rotate(" + hoursDegrees + "deg)" }} />;
	let minHand = <div className="hand min-hand" style={{ transform: "rotate(" + minutesDegrees + "deg)" }} />;
	let secHand = <div className="hand second-hand" style={{ transform: "rotate(" + secondsDegrees + "deg)" }} />;

	function setDate() {
		const now = new Date();
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours() % 12 || 12;
		setSecondsDegrees((seconds / 60) * 360 + 90);
		setMinutesDegrees((minutes / 60) * 360 + 90);
		setHoursDegrees((hours / 12) * 360 + 90);
		//console.log(seconds);
		//console.log(secondsDegrees);
		//console.log(minutes);
		//console.log(minutesDegrees);
		//console.log(hours);
		//console.log(hoursDegrees);

		//secHand.style.transform = "rotate(" + secondsDegrees + ")";
		//console.log(seconds);
	}

	setInterval(setDate, 1000);

	return (
		<div>
			<h1 className="text-center mt-5 bg-primary card">Clock</h1>

			<div className="text-center clockbg">
				<div className="clock">
					<div className="clock-face">
						{hourHand}
						{minHand}
						{secHand}
					</div>
				</div>
			</div>
		</div>
	);
};
