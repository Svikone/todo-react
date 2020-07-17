import { TOKEN, LOGIN_DATA, SUCCESFULL_LOGIN } from "./actions";

const defaultState = {
    token: "", 
    data: {},
    stateLogin: false
}

export const loginReducer = (state = defaultState, action) => {
    switch(action.type) {
        case TOKEN:
        return {
            ...state,
            token: action.payload
            }
        case LOGIN_DATA:
        return {
            ...state,
            data: action.payload
            }
        case SUCCESFULL_LOGIN:
        return {
            ...state,
            stateLogin: action.payload
        }
    }
  return state;
};  

