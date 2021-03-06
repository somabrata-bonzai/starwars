import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userCredentials } from "../actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.username = null;
        this.password = null;
    }

    loginUser() {
        if (this.password && this.username) {
            this.props.validateUser({
                username: this.username,
                password: this.password,
            });
        } else {
            alert("All fields are compulsory");
        }
    }

    render() {
        if (sessionStorage.getItem("key")) {
            return <Redirect to="/search" />;
        }
        return (
            <div>
                <input type="text" onChange={e => (this.username = e.target.value)} />
                <br />
                <input type="password" onChange={e => (this.password = e.target.value)} />
                <br />
                <button onClick={() => this.loginUser()}>Submit</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.loggedInUser,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ validateUser: userCredentials }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
