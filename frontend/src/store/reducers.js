import { combineReducers } from "redux";
import { loginReducer } from "./auth/login/reducers";
import { popUpReducer } from "./main/reducers";

export default combineReducers({
    login: loginReducer,
    main: popUpReducer
});