import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import audioClap from "../../audio/clap.mp3";

export const DrumKit = () => {
	useEffect(() => {
		document.addEventListener("keydown", keyDownEvent);
	}, []);

	const keyDownEvent = event => {
		console.log(event.keyCode);
		const audio = document.querySelector("audio[data-key='" + event.keyCode + "']");
		if (!audio) return; // If no key do nothing
		console.log(audio);
		//audio.play();
		var playPromise = audio.play();

		if (playPromise !== undefined) {
			playPromise
				.then(_ => {
					// Automatic playback started!
					// Show playing UI.
					console.log("audio played auto");
				})
				.catch(error => {
					// Auto-play was prevented
					// Show paused UI.
					console.log("playback prevented", error);
				});
		}
	};

	return (
		<div className="text-center mt-5">
			<h1>Drum Kit</h1>
			<div className="keys dflex row justify-content-around container-flex">
				<div data-key="65" className="key">
					<kbd>A</kbd>
					<span>CLAP</span>
				</div>
				<div data-key="83" className="key">
					...
				</div>
				<div data-key="68" className="key">
					...
				</div>
				<div data-key="70" className="key">
					...
				</div>
				<div data-key="71" className="key">
					...
				</div>
				<div data-key="72" className="key">
					...
				</div>
				<div data-key="74" className="key">
					...
				</div>
				<div data-key="75" className="key">
					...
				</div>
				<div data-key="76" className="key">
					...
				</div>

				<audio data-key="65" src={audioClap}>
					...
				</audio>
				<audio data-key="83" className="key">
					...
				</audio>
				<audio data-key="68" className="key">
					...
				</audio>
				<audio data-key="70" className="key">
					...
				</audio>
				<audio data-key="71" className="key">
					...
				</audio>
				<audio data-key="72" className="key">
					...
				</audio>
				<audio data-key="74" className="key">
					...
				</audio>
				<audio data-key="75" className="key">
					...
				</audio>
				<audio data-key="76" className="key">
					...
				</audio>
			</div>
		</div>
	);
};
