import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import "./index.css";
import App from "./components/app/presentational/App";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
