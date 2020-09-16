import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "./globalstyles";
import App from "./App";

const root = document.getElementById("root");
const rootElement = (
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);

if (root.hasChildNodes()) ReactDOM.hydrate(rootElement, root);
else ReactDOM.render(rootElement, root);

serviceWorker.register();
