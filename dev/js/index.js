import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import allReducers from "./reducers";
import App from "./app";
import Fairy from "./fairy";
import Login from "./login";

const store = createStore(allReducers, applyMiddleware(Fairy));
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route
                    path="/:filter?"
                    component={sessionStorage.getItem("key") ? App : Login}
                />
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);
