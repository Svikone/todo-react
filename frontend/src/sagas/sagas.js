import { LOGIN, LOGIN_ERROR, loginSucces, loginError } from '../store/auth/login/actions';
import { ALL_CARDS_USER, CREATE_CARD, REMOVE_CARD, popUp, allCardsUserSucces, allCardsUser, removeCardError, removeCardSucces} from '../store/main/actions';
import { takeEvery, put, call } from 'redux-saga/effects';
import httpServices from '../services/http.service';
import history from "../history";

function* loginWorker(user) {
    try {
        const res = yield call(httpServices.post, "user/login", user.payload)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        yield put(loginSucces(res.data.token))
        history.push("/main")
    } 
    catch (error) {
        yield put(loginError(error.response.data.message,true))
    }
}

function* createCardWorker(card) {
    try {
        yield call(httpServices.post, "card/create", card.payload)
        yield put(popUp(false))
        yield put(allCardsUser())
    } 
    catch (error) {
    }
}

function* allCardsWorker() {
    try {
        const userId = localStorage.getItem("userId");
        const cards = yield call(httpServices.get, `card/by/${userId}`)
        yield put(allCardsUserSucces(cards.data))

    } 
    catch (error) {
        console.log(error)
    }
}

function* removeCardWorker(id) {
    try {
        const cards = yield call(httpServices.delete, `card/by/${id.payload}`)
        yield put(removeCardSucces())
        yield put(allCardsUser())
    } 
    catch (error) {
        yield put(removeCardError())
    }
}

export function* watchLoadData() {
    yield takeEvery(LOGIN, loginWorker)
    yield takeEvery(CREATE_CARD, createCardWorker)
    yield takeEvery(ALL_CARDS_USER, allCardsWorker)
    yield takeEvery(REMOVE_CARD, removeCardWorker)
}
//take every слушает LOGIN событие и тогда когда он гдето срабатываетто и