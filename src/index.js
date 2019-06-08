import React from "react";
import ReactDOM from "react-dom";
// Method that creates a Redux Store
import { createStore } from "redux";
// Package that is wrapped around the App to provide the state from the Redux Store
import { Provider } from "react-redux";
// Root Redcuder imported
import reducer from "./store/reducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer);

//And we wrap the App in the Provider from react-redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
