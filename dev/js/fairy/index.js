import { setUserDetails } from "../actions";
import axios from "axios";

const fairy = store => next => action => {
    console.log(action);
    if (action.type === "login_user") {
        axios({
            method: "get",
            url: "https://swapi.co/api/people",
            params: {
                search: action.payload.username,
            },
        })
            .then(function(response) {
                console.log(response.data);
                let results = response.data.results;
                let flag = null;
                if (results.length === 0) {
                    alert("Invalid Credentials");
                }
                for (let i = 0; i < results.length; i++) {
                    var user = results[i];
                    if (user.birth_year === action.payload.password) {
                        sessionStorage.setItem("key", user.name);
                        store.dispatch(setUserDetails(user));
                        break;
                    } else {
                        alert("Invalid Credentials");
                    }
                }
            })
            .catch(function(error) {
                console.log(error);
                alert("Invalid Credentials");
            });
    }
    next(action);
};

export default fairy;
