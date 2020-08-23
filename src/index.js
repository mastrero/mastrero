import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Loader from "./UI/Loader";
import "./index.css";

const App = lazy(() =>
	Promise.all([import("./App"), new Promise((resolve) => setTimeout(resolve, 1800))]).then(([moduleExports]) => moduleExports)
); // 1800 Dalay for displaying loading animation

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
