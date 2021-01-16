import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AddPastGameHistoryStr, FetchHistoryErrorStr, FetchHistorySuccessStr, InitGameHistoryStr } from '../../+shared/chart-history/+state/chart-history.actions';
import { getSales } from '../../../../api/fake-api';

const last10Days = 10;

function* initData(action: any) {
    try {
        const end = new Date();
        const start = new Date(end);
        start.setDate(start.getDate() - last10Days);
        const response = yield getSales(start, end);
        yield put({
            type: FetchHistorySuccessStr, 
            payload: {
                data: response.data, startDate: start, endDate: end, id: action.payload.id
            }
        });
    } catch (e) {
        yield put({type: FetchHistoryErrorStr, message: e.message});
    }
}


function* addPastData(action: any) {
    try {
        const end = new Date(action.payload.startDate);
        const start = new Date(end);
        start.setDate(start.getDate() - 180);
        const response = yield getSales(start, end);
        yield put({
            type: FetchHistorySuccessStr, 
            payload: {
                data: response.data, startDate: start, endDate: action.payload.endDate, id: action.payload.id
            }
        });
    } catch (e) {
        yield put({type: FetchHistoryErrorStr, message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* salesSaga() {
  yield takeEvery(InitGameHistoryStr, initData);
  yield takeEvery(AddPastGameHistoryStr, addPastData);
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

export default salesSaga;