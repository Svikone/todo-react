import { POPUP , CREATE_CARD, ALL_CARDS_USER, ALL_CARDS_USER_SUCCES, REMOVE_CARD, REMOVE_CARD_SUCCES, REMOVE_CARD_ERROR } from "./actions";

const mainState = {
    visibility: false,
    card: [],
    cards: [],
    cardId:""
}

export const mainReducer = (state = mainState, action) => {
    switch(action.type) {
        case POPUP:
        return {
            ...state,
            visibility: action.payload
        }
        case CREATE_CARD:
        return {
            ...state,
            card: action.payload
        }
        case ALL_CARDS_USER:
        return {
            ...state,
            }
        case ALL_CARDS_USER_SUCCES:
        return {
            ...state,
            cards: action.payload
            }
        case REMOVE_CARD:
        return {
            ...state,
            cardId: action.payload
        }
        case REMOVE_CARD_SUCCES:
        return {
            ...state,
            }
        case REMOVE_CARD_ERROR:
        return {
            ...state,
        }
    }
  return state;
};  
