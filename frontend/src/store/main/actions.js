export const POPUP = "POPUP";
export const CREATE_CARD = "CREATE_CARD";
export const ALL_CARDS_USER = "ALL_CARDS_USER";
export const ALL_CARDS_USER_SUCCES = "ALL_CARDS_USER_SUCCES";
export const REMOVE_CARD = "REMOVE_CARD";
export const REMOVE_CARD_SUCCES = "REMOVE_CARD_SUCCES";
export const REMOVE_CARD_ERROR = "REMOVE_CARD_ERROR";

export const popUp = (visibility) => {
    return {
        type: POPUP,
        payload: visibility
    }
}

export const createcard = (card) => {
    return {
        type: CREATE_CARD,
        payload: card
    }
}

export const allCardsUser = () => {
    return {
        type: ALL_CARDS_USER,
    }
}

export const allCardsUserSucces = (cards) => {
    return {
        type: ALL_CARDS_USER_SUCCES,
        payload: cards
    }
}

export const removeCard = (id) => {
    return {
        type: REMOVE_CARD,
        payload: id
    }
}

export const removeCardSucces = () => {
    return {
        type: REMOVE_CARD_SUCCES,
    }
}

export const removeCardError = () => {
    return {
        type: REMOVE_CARD_ERROR,
    }
}