import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [navMenu, setNavMenu] = useState("");
	function CloseMenus() {
		setNavMenu("");
		setNavMenuDrop("");
	}
	function ToggleNavBar() {
		if (navMenu == "") {
			setNavMenu("show");
		} else {
			setNavMenu("");
		}
		//console.log(navMenu);
	}
	const [navMenuDrop, setNavMenuDrop] = useState("");
	function ToggleNavBarDrop() {
		if (navMenuDrop == "") {
			setNavMenuDrop("show");
		} else {
			setNavMenuDrop("");
		}
		//console.log(navMenu);
	}
	return (
		<>
			{/*
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Java Script 30 Day Challenge</span>
				</Link>
				<div className="ml-auto">
					<Link to="/drum_kit">
						<button className="btn btn-primary">Drum Kit</button>
					</Link>
					<Link to="/clock">
						<button className="btn btn-primary">Clock</button>
					</Link>
				</div>
			</nav>
        */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/" onClick={() => CloseMenus()}>
					Java Script 30 Day Challenge
				</Link>
				<button
					onClick={() => {
						ToggleNavBar();
						//console.log("calling toggle");
					}}
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className={"collapse navbar-collapse " + navMenu} id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/" onClick={() => CloseMenus()}>
								Home
							</Link>
						</li>
						{/*<li className="nav-item">
							<a className="nav-link" href="/">
								Link
							</a>
                </li>*/}
						<li className="nav-item dropdown">
							<div
								onClick={() => {
									ToggleNavBarDrop();
								}}
								className="nav-link dropdown-toggle"
								href="/"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Projects List
							</div>
							<div className={"dropdown-menu " + navMenuDrop} aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/drum_kit" onClick={() => CloseMenus()}>
									Drum Kit
								</Link>
								<Link className="dropdown-item" to="/clock" onClick={() => CloseMenus()}>
									Clock
								</Link>
								<Link className="dropdown-item" to="/update_css_js" onClick={() => CloseMenus()}>
									Update CSS Vairables with JS
								</Link>
								<Link className="dropdown-item" to="/array_cardio" onClick={() => CloseMenus()}>
									Array Cardio
								</Link>
								{/*<div className="dropdown-divider" />
								<a className="dropdown-item" href="/">
									Something else here
                            </a>*/}
							</div>
						</li>
						{/*<li className="nav-item">
							<a className="nav-link disabled" href="/">
								Disabled
							</a>
						</li>*/}
					</ul>
					{/*<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>*/}
				</div>
			</nav>
		</>
	);
};
