import React from "react";
import ReactDOM from "react-dom";
// import Loader from "./UI/Loader";
import { GlobalStyle } from "./globalstyles";
import App from "./App";

// const Appp = lazy(() =>
// 	Promise.all([import("./App"), new Promise((resolve) => setTimeout(resolve, 1800))]).then(([moduleExports]) => moduleExports)
// ); // 1800 Dalay for displaying loading animation

const root = document.getElementById("root");
const rootElement = (
	<React.StrictMode>
		{/* <Suspense fallback={<Loader />}> */}
		<GlobalStyle />
		<App />
		{/* </Suspense> */}
	</React.StrictMode>
);

if (root.hasChildNodes()) ReactDOM.hydrate(rootElement, root);
else ReactDOM.render(rootElement, root);
