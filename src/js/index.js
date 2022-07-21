//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Loyaut from "./Loyaut.jsx";

//render your react application
ReactDOM.render(<Loyaut />, document.querySelector("#app"));
