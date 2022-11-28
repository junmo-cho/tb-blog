import { all, fork, takeLatest, put, call, delay } from "redux-saga/effects";
import axios from "axios";
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../reducer/user";

function signUpAPI(data) {
  return axios.post('http://localhost:8080/user', data);
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

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
  ]);
}