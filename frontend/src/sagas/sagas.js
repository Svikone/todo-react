import { LOGIN, LOGIN_ERROR, loginSucces, loginError } from '../store/auth/login/actions';
import { takeEvery, put, call } from 'redux-saga/effects';
import httpServices from '../services/http.service';


function* loginWorker(user) {
    try {
        const token =  yield call(httpServices.post, "user/login", user)
        yield put(loginSucces(token))
    } 
    catch (error) {
        yield put(loginError(error.response.data.message))
    }
}

export function* watchLoadData() {
    yield takeEvery(LOGIN, loginWorker)
}
//take every слушает LOGIN событие и тогда когда он гдето срабатываетто и

