import { POPUP } from "./actions";

const popUpState = {
    visibility: false
}

export const popUpReducer = (state = popUpState, action) => {
    switch(action.type) {
        case POPUP:
        return {
            ...state,
            visibility: action.payload
        }
    }
  return state;
};  
