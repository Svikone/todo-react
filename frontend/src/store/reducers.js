import { combineReducers } from "redux";
import { loginReducer } from "./auth/login/reducers";

export default combineReducers({
    login: loginReducer
});