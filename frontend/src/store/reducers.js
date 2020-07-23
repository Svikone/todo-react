import { combineReducers } from "redux";
import { loginReducer } from "./auth/login/reducers";
import { mainReducer } from "./main/reducers";
import { registrationReducer } from "./auth/registration/reducers";


export default combineReducers({
    login: loginReducer,
    main: mainReducer,
    registration: registrationReducer
});