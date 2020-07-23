export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";
export const REGISTRATION = "REGISTRATION";

export const registrationSucces = () => {
    return {
        type: REGISTRATION_SUCCESS,
    }
}

export const registrationError = (error, visible) => {
    return {
        type: REGISTRATION_ERROR,
        payload: error,
        visible
    }
}
