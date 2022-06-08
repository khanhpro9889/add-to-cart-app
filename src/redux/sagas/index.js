import { takeEvery, put, call, takeLatest, take } from 'redux-saga/effects';
import { FETCH_BAG, FETCH_BAG_ERROR, FETCH_BAG_SUCCESS } from '../actions/bagActions/bagActionTypes';
import { fetchingBag } from './bagSaga';

function* rootSaga() {
    yield takeEvery(FETCH_BAG, fetchingBag);
}

export default rootSaga;

