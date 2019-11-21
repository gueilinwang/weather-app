import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import WeatherApp from "./WeatherApp";
import * as serviceWorker from "./serviceWorker";

function App() {
  return <WeatherApp />;
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
