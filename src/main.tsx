import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import outputWebVitals from "./WebVitals";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

outputWebVitals(console.log);