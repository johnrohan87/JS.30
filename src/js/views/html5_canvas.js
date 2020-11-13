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

		canvas.addEventListener("mousedown", e => {
			isDrawing = true;
			[lastX, lastY] = [e.offsetX, e.offsetY];
		});
		canvas.addEventListener("touchstart", e => {
			isDrawing = true;
			[lastX, lastY] = [e.touches[0].pageX, e.touches[0].pageY];
		});

		canvas.addEventListener("mousemove", draw);
		canvas.addEventListener("touchmove", draw);
		canvas.addEventListener("mouseup", () => (isDrawing = false));
		canvas.addEventListener("touchend", () => (isDrawing = false));
		canvas.addEventListener("mouseout", () => (isDrawing = false));
		canvas.addEventListener("touchend", () => (isDrawing = false));
	}, []);

	function draw(e) {
		if (!isDrawing) return;
		//console.log(e);
		ctx.strokeStyle = "hsl(" + hue + ",100%,50%)";

		alert(
			lastX +
				" " +
				lastY +
				" " +
				e.clientX +
				" " +
				e.clientY +
				" " +
				e.targetTouches[0].pageX +
				" " +
				e.targetTouches[0].pageY
		);
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);

		/*alert(
			lastX + " " + lastY + " " + e.clientX + " " + e.clientY + (e.targetTouches ? "true touch" : "false touch")
		);*/

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
				<canvas id="draw" width="800" height="800" style={{ touchAction: "none" }} />
			</div>
		</div>
	);
};
