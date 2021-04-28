import * as actions from '../actions/users';
import * as api from '../api/users';

import { call, fork, put, takeEvery } from 'redux-saga/effects';

function* getUsers() {
  try {
      const result = yield call(api.getUsers);
      yield put(actions.getUsersSuccess({
        items: result.data.data
      }));
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
