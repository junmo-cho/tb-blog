import { all, fork, takeLatest, put, call, delay } from "redux-saga/effects";
import axios from "axios";
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, EDIT_POST_FAILURE, EDIT_POST_REQUEST, EDIT_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS } from "../reducer/post";

function addPostAPI(data) {
  return axios.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    console.log(result.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: ADD_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function uploadImagesAPI(data) {
  return axios.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    console.log(result.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      data: error.response.data,
    });
  }
}

function loadPostAPI(data) {
  return axios.get('/post', data);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    // console.log(result);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: error.response.data,
    });
  }
}

function editPostAPI(data) {
  return axios.patch(`/post/${data.PostId}`, data);
}

function* editPost(action) {
  try {
    const result = yield call(editPostAPI, action.data);
    yield put({
      type: EDIT_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: EDIT_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchEditPost() {
  yield takeLatest(EDIT_POST_REQUEST, editPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchLoadPost),
    fork(watchAddComment),
    fork(watchUploadImages),
    fork(watchEditPost),
  ]);
}