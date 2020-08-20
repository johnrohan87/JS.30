import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
let canvas;
let ctx;

export const HTML5Canvas = () => {
	const [hue, setHue] = useState(0);
	let tmpHue = Math.floor(Math.random() * 10);
	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;

	useEffect(() => {
		canvas = document.querySelector("#draw");
		ctx = canvas.getContext("2d");

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		ctx.strokeStyle = "#BADA55";
		ctx.lineJoin = "round";
		ctx.lineCap = "round";
		ctx.lineWidth = 100;

		canvas.addEventListener("mousedown", e => {
			isDrawing = true;
			[lastX, lastY] = [e.offsetX, e.offsetY];
		});

		canvas.addEventListener("mousemove", draw);
		canvas.addEventListener("mouseup", () => (isDrawing = false));
		canvas.addEventListener("mouseout", () => (isDrawing = false));
	}, []);

	function draw(e) {
		if (!isDrawing) return;
		//console.log(e);
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];
		//setHue({ tmpHue });
		tmpHue++;
		//console.log("hue", hue, "tmpHue", tmpHue);
	}

	return (
		<div className="">
			<h2 className="text-center mt-5 bg-primary card">HTML5 Canvas</h2>
			<div className="text-center">
				<canvas id="draw" width="800" height="800" style={{ stroke: "hsl(" + tmpHue + ",100%,50%)" }} />
			</div>
		</div>
	);
};
