import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function apiFake() {
    return 1;
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* test(action: any) {
   try {
      const test = yield apiFake();
      yield put({type: "test_SUCCEEDED", test: test});
   } catch (e) {
      yield put({type: "test_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* rootSaga() {
  yield takeEvery("TEST", test);
}


/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

*/

export default rootSaga;