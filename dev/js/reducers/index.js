import { combineReducers } from "redux";
import ActiveUserReducer from "./reducerLogin";

const allReducers = combineReducers({
    loggedInUser: ActiveUserReducer,
});

export default allReducers;
