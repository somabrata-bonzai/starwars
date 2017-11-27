import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchPlanet from "./containers/searchPlanet";
import {Redirect} from "react-router-dom";
import { logoutUser } from "./actions";

const app = (params) => {
    console.log(params);
    let jsx = null;
    switch (params.location.pathname) {
        case "/search":
            jsx = (
                <div>
                    <SearchPlanet />
                    <button
                        onClick={() => {
                            sessionStorage.clear();
                            params.logoutUser();
                            params.history.push("login");
                        }}
                    >
                        Logout
                    </button>
                </div>
            );
            break;
        default:
            jsx = <Redirect to="/search" />;
    }
    return sessionStorage.getItem("key") ? jsx : <Redirect to="/login" />;
};

function mapStateToProps(state) {
    return {
        user: state.loggedInUser,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ logoutUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(app);
