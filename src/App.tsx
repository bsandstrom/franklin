import React from "react";
import "./App.css";
// import { ChartExample } from "./ChartPieExample";
import Rechart from "./Rechart";

function App() {
	return (
		<div className="App">
			<h1>Proposed Bond Budget Breakdown</h1>
			{/* <header className="App-header">
        header!
      </header> */}

			{/* <ChartExample /> */}
			<Rechart />
		</div>
	);
}

export default App;
