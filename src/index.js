import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Loader from "./UI/Loader";
import "./index.css";

console.log(
	"%cStop ✋! This is a browser feature intended for developers only.",
	"color: #ffffff; font-size: 3em; font-weight: bolder;"
);

const App = lazy(() =>
	Promise.all([import("./App"), new Promise((resolve) => setTimeout(resolve, 1800))]).then(([moduleExports]) => moduleExports)
); // 1800 Dalay for displaying loading animation

const root = document.getElementById("root");
const rootElement = (
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</React.StrictMode>
);

if (root.hasChildNodes()) ReactDOM.hydrate(rootElement, root);
else ReactDOM.render(rootElement, root);
