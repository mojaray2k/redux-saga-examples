import * as actions from '../actions/users';
import * as api from '../api/users';

import { call, fork, takeEvery } from 'redux-saga/effects';

function* getUsers() {
  try {
      const result = yield call(api.getUsers);
      console.log(result);
  } catch (e) {

  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const userSagas= [
    fork(watchGetUsersRequest)
]

export default userSagas;
