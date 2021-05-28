import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { SortWithoutArticles } from "./views/sort_without_articles";
import cssTextShadowMouseMoveEffect from "./views/css_text_shadow_mouse_move_effect";
import LocalStorageAndEventDelegation from "./views/local_storage_and_event_delegation";
import SlideInOnScroll from "./views/slide_in_on_scroll";
import KeySequenceDetection from "./views/key_sequence_detection";
import CustomVideoPlayer from "./views/custom_video_player";
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
						<Route exact path="/drum_kit" component={DrumKit} />
						<Route exact path="/clock" component={Clock} />
						<Route exact path="/update_css_js" component={UpdateCssJs} />
						<Route exact path="/array_cardio" component={ArrayCardio} />
						<Route exact path="/flex_panels" component={FlexPanels} />
						<Route exact path="/type_ahead" component={TypeAhead} />
						<Route exact path="/html5_canvas" component={HTML5Canvas} />
						<Route exact path="/console_tricks" component={ConsoleTricks} />
						<Route exact path="/check_multiple_checkboxes" component={CheckMultipleCheckboxes} />
						<Route exact path="/custom_video_player" component={CustomVideoPlayer} />
						<Route exact path="/key_sequence_detection" component={KeySequenceDetection} />
						<Route exact path="/slide_in_on_scroll" component={SlideInOnScroll} />
						<Route
							exact
							path="/local_storage_and_event_delegation"
							component={LocalStorageAndEventDelegation}
						/>
						<Route
							exact
							path="/css_text_shadow_mouse_move_effect"
							component={cssTextShadowMouseMoveEffect}
						/>
						<Route exact path="/sort_without_articles" component={SortWithoutArticles} />
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
