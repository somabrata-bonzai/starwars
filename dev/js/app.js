import React, { Component } from "react";
import { connect } from "react-redux";
import SearchPlanet from "./containers/searchPlanet";
import { Redirect } from "react-router-dom";

const app = ({ match: { params }, user }) => {
    console.log(params);
    switch (params.filter) {
        case "search":
            return (
                <div>
                    <SearchPlanet />
                    <button
                        onClick={() => {
                            sessionStorage.clear();
                            window.location = "/login";
                        }}
                    >
                        Logout
                    </button>
                </div>
            );
        default:
            return <Redirect to="/search" />;
    }
};

function mapStateToProps(state) {
    return {
        user: state.loggedInUser,
    };
}

function matchDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, matchDispatchToProps)(app);
