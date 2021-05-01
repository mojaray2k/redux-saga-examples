import * as actions from '../actions/users';
import * as api from '../api/users';

import { call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';

function* getUsers() {
  try {
      const result = yield call(api.getUsers);
      yield put(actions.getUsersSuccess({
        items: result.data.data
      }));
  } catch (e) {
    yield put(actions.usersError({
      error: "An error occurred when trying to get a list of users"
    }))
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

// function* createUser(action){
//   console.log(action);
//   yield;
// }

function* createUser({payload}){
    try {
      yield call(api.createUser, {
        firstName: payload.firstName,
        lastName:  payload.lastName,
      })
      yield call(getUsers)
    } catch (error) {
      yield put(actions.usersError({
        error: "An error occurred when trying to creating the user"
      }))
    }
}

function* watchCreateUserRequest(){
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId}) {
  try {
    yield call(api.deleteUser, userId)
    yield call(getUsers)
  } catch (error) { 
    yield put(actions.usersError({
      error: "An error occurred when trying to delete the user"
    }))
  };
}

function* watchDeleteUserRequest(){
  while(true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, {
      userId: action.payload.userId
    })
  }
}

const userSagas= [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
]

export default userSagas;
