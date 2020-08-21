import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
let canvas;
let ctx;

export const HTML5Canvas = () => {
	let hue = 0;
	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;
	let direction = true;

	useEffect(() => {
		canvas = document.querySelector("#draw");
		ctx = canvas.getContext("2d");

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		ctx.strokeStyle = "#BADA55";
		ctx.lineJoin = "round";
		ctx.lineCap = "round";
		ctx.lineWidth = 100;
		//added efects --- <<<
		ctx.globalCompositeOperation = "multiply";

		canvas.addEventListener("mousedown touchstart", e => {
			isDrawing = true;
			[lastX, lastY] = [e.offsetX, e.offsetY];
		});

		canvas.addEventListener("mousemove", draw);
		canvas.addEventListener("mouseup touchend", () => (isDrawing = false));
		canvas.addEventListener("mouseout touchend", () => (isDrawing = false));
	}, []);

	function draw(e) {
		if (!isDrawing) return;
		//console.log(e);
		ctx.strokeStyle = "hsl(" + hue + ",100%,50%)";

		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);

		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];

		hue++;
		hue >= 360 && (hue = 0);
		if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
			direction = !direction;
		}
		if (direction) {
			ctx.lineWidth++;
		} else {
			ctx.lineWidth--;
		}
		console.log("hue", hue);
	}

	return (
		<div className="">
			<h2 className="text-center mt-5 bg-primary card">HTML5 Canvas</h2>
			<div className="text-center">
				<canvas id="draw" width="800" height="800" />
			</div>
		</div>
	);
};
