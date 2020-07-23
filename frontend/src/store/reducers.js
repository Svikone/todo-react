import { combineReducers } from "redux";
import { loginReducer } from "./auth/login/reducers";
import { mainReducer } from "./main/reducers";

export default combineReducers({
    login: loginReducer,
    main: mainReducer
});