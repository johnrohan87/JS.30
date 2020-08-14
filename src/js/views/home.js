import React from "react";
import JS30 from "../../img/JS30.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="h2 text-center mt-5 bg-primary card">Java Script 30 Day Challenge!</div>
		<div className="container-fluid">
			<img className="img-fluid" src={JS30} />
		</div>
	</div>
);
