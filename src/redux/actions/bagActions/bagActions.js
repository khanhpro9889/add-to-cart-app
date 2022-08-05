import { FETCH_BAG, FETCH_BAG_ERROR, FETCH_BAG_SUCCESS } from './bagActionTypes';
import axios from 'axios';

export const fetchBag = () => {
    return {
        type: FETCH_BAG
    }
}

export const fetchBagSuccess = (listBag) => {
    return {
        type: FETCH_BAG_SUCCESS,
        payload: listBag
    }
}

export const fetchBagError = () => {
    return {
        type: FETCH_BAG_ERROR,
        payload: []
    }
}

export const fetchBagApi = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchBag());
            const res = await axios.request({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/users'});
            dispatch(fetchBagSuccess(res.data))
        } catch (error) {
            dispatch(fetchBagError());
        }
    }
}