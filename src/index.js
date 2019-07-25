import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./components/App";
import { App } from "./App";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import { history } from "./_helpers/history";

const store = configureStore();

// setup fake backend
import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

render(
  <ReduxProvider store={store}>
    {/* <Router history={history}> */}
    <App />
    {/* </Router> */}
  </ReduxProvider>,
  document.getElementById("app")
);
