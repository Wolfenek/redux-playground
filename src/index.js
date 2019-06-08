import React from "react";
import ReactDOM from "react-dom";
// Methods that creates a Redux Store & combine the reducers
import { createStore, combineReducers } from "redux";
// Package that is wrapped around the App to provide the state from the Redux Store
import { Provider } from "react-redux";
// Import smaller reducers
import counterReducer from "./store/reducers/counterReducer"
import resultsReducer from "./store/reducers/resultsReducer"
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  counterReducer,
  resultsReducer
})

const store = createStore(rootReducer);

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
