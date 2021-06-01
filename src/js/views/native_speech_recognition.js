import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/native_speech_recognition.scss";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export const NativeSpeechRecognition = () => {
	const { transcript, resetTranscript } = useSpeechRecognition();
	let [listening, setListening] = useState(false);

	function handleSpeechRecognition() {
		if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
			// Browser not supported & return some useful info.
			console.error("Browser not supported", err);
			return;
		}
		if (listening) {
			SpeechRecognition.stopListening();
			setListening(false);
		} else {
			if (browserSupportsContinuousListening) {
				SpeechRecognition.startListening({
					continuous: true
				});
			} else {
				SpeechRecognition.startListening();
			}
			setListening(true);
		}
	}
	return (
		<div className="NativeSpeechRecognition">
			<h1 className="text-center mt-5 bg-primary card">Native Speech Recognition</h1>
			<div>Hello</div>
			<button type="button" onClick={handleSpeechRecognition}>
				speech recognition toggle: {listening ? "true" : "false"}
			</button>
			<div>{transcript}</div>
		</div>
	);
};

NativeSpeechRecognition.propTypes = {
	boxesSelected: PropTypes.string
};
