import React, { createRef, useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/video_reduce.scss";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

export const VideoReduce = () => {
	const [totalVideoTime, setVideoTime] = useState(null);
	useEffect(() => {
		// eslint-disable-line no-console
		const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
		//console.log(timeNodes);
		const seconds = timeNodes
			.map(node => node.dataset.time)
			.map(timeCode => {
				const [min, secs] = timeCode.split(":").map(parseFloat);
				//console.log(min, secs);
				return min * 60 + secs;
			})
			.reduce((total, videoSeconds) => total + videoSeconds);
		//console.log(seconds);

		let secondsLeft = seconds;
		const hours = Math.floor(secondsLeft / 3600);
		secondsLeft = secondsLeft % 3600;

		const mins = Math.floor(secondsLeft / 60);
		secondsLeft = secondsLeft % 60;

		//console.log(hours, mins, secondsLeft);
		setVideoTime(hours + "." + mins + "." + secondsLeft);
	}, []);

	return (
		<div className="VideoReduce w-100">
			<h1 className="banner text-center mt-5 mx-auto bg-primary">Adding Up Times with Reduce</h1>

			<ul className="videos" id="bands">
				<li data-time="5:43">Video 1 - 5:43</li>
				<li data-time="2:33">Video 2 - 2:33</li>
				<li data-time="3:45">Video 3 - 3:45</li>
				<li data-time="0:47">Video 4 - 0:47</li>
				<li data-time="5:21">Video 5 - 5:21</li>
				<li data-time="6:56">Video 6 - 6:56</li>
				<li data-time="3:46">Video 7 - 3:46</li>
				<li data-time="5:25">Video 8 - 5:25</li>
				<li data-time="3:14">Video 9 - 3:14</li>
				<li data-time="3:31">Video 10 - 3:31</li>
				<li data-time="5:59">Video 11 - 5:59</li>
				<li data-time="3:07">Video 12 - 3:07</li>
				<li data-time="11:29">Video 13 - 11:29</li>
				<li data-time="8:57">Video 14 - 8:57</li>
				<li data-time="5:49">Video 15 - 5:49</li>
				<li data-time="5:52">Video 16 - 5:52</li>
				<li data-time="5:50">Video 17 - 5:50</li>
				<li data-time="9:13">Video 18 - 9:13</li>
				<li data-time="11:51">Video 19 - 11:51</li>
				<li data-time="7:58">Video 20 - 7:58</li>
				<li data-time="4:40">Video 21 - 4:40</li>
				<li data-time="4:45">Video 22 - 4:45</li>
				<li data-time="6:46">Video 23 - 6:46</li>
				<li data-time="7:24">Video 24 - 7:24</li>
				<li data-time="7:12">Video 25 - 7:12</li>
				<li data-time="5:23">Video 26 - 5:23</li>
				<li data-time="3:34">Video 27 - 3:34</li>
				<li data-time="8:22">Video 28 - 8:22</li>
				<li data-time="5:17">Video 29 - 5:17</li>
				<li data-time="3:10">Video 30 - 3:10</li>
				<li data-time="4:43">Video 31 - 4:43</li>
				<li data-time="19:43">Video 32 - 19:43</li>
				<li data-time="0:47">Video 33 - 0:47</li>
				<li data-time="0:47">Video 34 - 0:47</li>
				<li data-time="3:14">Video 35 - 3:14</li>
				<li data-time="3:59">Video 36 - 3:59</li>
				<li data-time="2:43">Video 37 - 2:43</li>
				<li data-time="4:17">Video 38 - 4:17</li>
				<li data-time="6:56">Video 39 - 6:56</li>
				<li data-time="3:05">Video 40 - 3:05</li>
				<li data-time="2:06">Video 41 - 2:06</li>
				<li data-time="1:59">Video 42 - 1:59</li>
				<li data-time="1:49">Video 43 - 1:49</li>
				<li data-time="3:36">Video 44 - 3:36</li>
				<li data-time="7:10">Video 45 - 7:10</li>
				<li data-time="3:44">Video 46 - 3:44</li>
				<li data-time="3:44">Video 47 - 3:44</li>
				<li data-time="4:36">Video 48 - 4:36</li>
				<li data-time="3:16">Video 49 - 3:16</li>
				<li data-time="1:10">Video 50 - 1:10</li>
				<li data-time="6:10">Video 51 - 6:10</li>
				<li data-time="2:14">Video 52 - 2:14</li>
				<li data-time="3:44">Video 53 - 3:44</li>
				<li data-time="5:05">Video 54 - 5:05</li>
				<li data-time="6:03">Video 55 - 6:03</li>
				<li data-time="12:39">Video 56 - 12:39</li>
				<li data-time="1:56">Video 57 - 1:56</li>
				<li data-time="4:04">Video 58 - 4:04</li>
			</ul>
			<ul id="bands">
				<li>Total video time = {totalVideoTime}</li>
			</ul>
		</div>
	);
};

VideoReduce.propTypes = {
	boxesSelected: PropTypes.string
};
