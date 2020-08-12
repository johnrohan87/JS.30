import React, { useEffect, useState } from "react";
import "../../styles/drum_kit.scss";

export const DrumKit = () => {
	useEffect(() => {
		document.addEventListener("keydown", keyDownEvent);
		const keys = document.querySelectorAll(".key");
		keys.forEach(key => key.addEventListener("transitionend", removeTransition));
	}, []);

	function removeTransition(e) {
		//console.log(e);
		if (e.propertyName !== "transform") return;
		this.classList.remove("playing");
	}

	const keyDownEvent = event => {
		console.log(event.keyCode);
		const audio = document.querySelector("audio[data-key='" + event.keyCode + "']");
		const key = document.querySelector(".key[data-key='" + event.keyCode + "']");
		if (!audio) return; // If no key do nothing
		audio.currentTime = 0;
		//console.log(audio);
		//console.log(key);
		key.classList.add("playing");
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
			<h1 className="card">Drum Kit</h1>
			<div className="keys dflex row justify-content-around">
				<div data-key="65" className="key">
					<kbd>A</kbd>
					<span>CLAP</span>
				</div>
				<div data-key="83" className="key">
					<kbd>S</kbd>
					<span>HIHAT</span>
				</div>
				<div data-key="68" className="key">
					<kbd>D</kbd>
					<span>KICK</span>
				</div>
				<div data-key="70" className="key">
					<kbd>F</kbd>
					<span>OPENHAT</span>
				</div>
				<div data-key="71" className="key">
					<kbd>G</kbd>
					<span>BOOM</span>
				</div>
				<div data-key="72" className="key">
					<kbd>H</kbd>
					<span>RIDE</span>
				</div>
				<div data-key="74" className="key">
					<kbd>J</kbd>
					<span>SNARE</span>
				</div>
				<div data-key="75" className="key">
					<kbd>K</kbd>
					<span>TOM</span>
				</div>
				<div data-key="76" className="key">
					<kbd>L</kbd>
					<span>TINK</span>
				</div>

				<audio
					data-key="65"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/clap.mp3"
				/>
				<audio
					data-key="83"
					className="key"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/hihat.mp3"
				/>
				<audio
					data-key="68"
					className="key"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/kick.wav"
				/>
				<audio
					data-key="70"
					className="key"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/openhat.wav"
				/>
				<audio
					data-key="71"
					className="key"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/boom.mp3"
				/>
				<audio
					data-key="72"
					className="key"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/ride.wav"
				/>
				<audio
					data-key="74"
					className="key"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/snare.wav"
				/>
				<audio
					data-key="75"
					className="key"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/tom.wav"
				/>
				<audio
					data-key="76"
					className="key"
					src="https://raw.githubusercontent.com/johnrohan87/JS.30/c098af56d010d4bbcf8ccbab8b7bc42cd8e03b05/src/audio/tink.wav"
				/>
			</div>
		</div>
	);
};
