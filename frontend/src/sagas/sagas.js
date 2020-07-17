import { LOGIN_DATA, setToken,succesfullLogin } from '../store/auth/login/actions';
import { takeEvery, put, call } from 'redux-saga/effects';
import environment from "../environment/environment";

function fetchData(user) {
    return fetch(`${environment.apiUrl}${environment.prefix}user/login`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(user)
    })
    .then(response => response.json())
}

function* loginWorker(user) {
    const data = yield call(fetchData, user.payload)
    yield put(setToken(data)) 
    
    
}

export function* watchLoadData() {
    yield takeEvery(LOGIN_DATA, loginWorker)//
}

