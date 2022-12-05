import { all, fork, takeLatest, put, call, delay } from "redux-saga/effects";
import axios from "axios";
import { LOAD_LOGIN_INFO_FAILURE, LOAD_LOGIN_INFO_REQUEST, LOAD_LOGIN_INFO_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../reducer/user";

function loadLoginInfoAPI() {
  return axios.get('/user');
}

function* loadLoginInfo(action) {
  try {
    const result = yield call(loadLoginInfoAPI, action.data);
    yield put({
      type: LOAD_LOGIN_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_LOGIN_INFO_FAILURE,
      data: error.response.data,
    });
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      data: error.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLoadLoginInfo() {
  yield takeLatest(LOAD_LOGIN_INFO_REQUEST, loadLoginInfo);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchLoadLoginInfo),
  ]);
}