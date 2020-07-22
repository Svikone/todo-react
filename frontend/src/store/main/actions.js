export const POPUP = "POPUP";

export const popUp = (visibility) => {
    return {
        type: POPUP,
        payload: visibility
    }
}