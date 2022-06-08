import { FETCH_BAG, FETCH_BAG_ERROR, FETCH_BAG_SUCCESS } from './bagActionTypes';

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