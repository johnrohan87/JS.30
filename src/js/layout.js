import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import CheckMultipleCheckboxes from "./views/check_multiple_checkboxes";
import ConsoleTricks from "./views/console_tricks";
import { HTML5Canvas } from "./views/html5_canvas";
import { TypeAhead } from "./views/type_ahead";
import { FlexPanels } from "./views/flex_panels";
import { ArrayCardio } from "./views/array_cardio";
import { UpdateCssJs } from "./views/update_css_js";
import { Clock } from "./views/clock";
import { DrumKit } from "./views/drum_kit";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/drum_kit">
							<DrumKit />
						</Route>
						<Route exact path="/clock">
							<Clock />
						</Route>
						<Route exact path="/update_css_js">
							<UpdateCssJs />
						</Route>
						<Route exact path="/array_cardio">
							<ArrayCardio />
						</Route>
						<Route exact path="/flex_panels">
							<FlexPanels />
						</Route>
						<Route exact path="/type_ahead">
							<TypeAhead />
						</Route>
						<Route exact path="/html5_canvas">
							<HTML5Canvas />
						</Route>
						<Route exact path="/console_tricks">
							<ConsoleTricks />
						</Route>
						<Route exact path="/check_multiple_checkboxes">
							<CheckMultipleCheckboxes />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
