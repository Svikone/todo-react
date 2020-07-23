import {REGISTRATION_SUCCESS, REGISTRATION_ERROR, REGISTRATION } from "./actions";

const defaultState = {
    errorMessage: "",
    visible: false,
    component: REGISTRATION
}

export const registrationReducer = (state = defaultState, action) => {
    switch(action.type) {
        case REGISTRATION_SUCCESS:
        return {
            ...state,
            }
        case REGISTRATION_ERROR:
        return {
            ...state,
            errorMessage: action.payload,
            visible: action.visible
            }
    }
  return state;
};  
