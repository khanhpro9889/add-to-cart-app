import axios from 'axios';
import { fetchBagError, fetchBagSuccess } from '../actions/bagActions/bagActions';
import { put, call } from 'redux-saga/effects';

const fetchingBagApi = () => {
    return axios.request({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/users'});
}

export function* fetchingBag() {
    try {
        const res = yield call(fetchingBagApi);
        const { data } = res;
        yield put(fetchBagSuccess(data))
    } catch (err) {
        yield put(fetchBagError())
    }
}