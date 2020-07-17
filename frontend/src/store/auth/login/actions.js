export const TOKEN = "TOKEN";
export const LOGIN_DATA = "LOGIN_DATA";
export const SUCCESFULL_LOGIN = "SUCCESFULL_LOGIN";

export const setToken = (token) => {
    return {
        type: TOKEN,
        payload: token

    }
}

export const setLoginData = (data) => {
    return {
        type: LOGIN_DATA,
        payload: data

    }
}

export const succesfullLogin = (data) => {
    return {
        type: SUCCESFULL_LOGIN,
        payload: data

    }
}

