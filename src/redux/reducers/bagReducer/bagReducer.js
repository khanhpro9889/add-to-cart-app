import { FETCH_BAG, FETCH_BAG_ERROR, FETCH_BAG_SUCCESS } from '../../actions/bagActions/bagActionTypes';

const initialState = {
    list: [],
    loading: false
};

const bagReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BAG:
            return {
                ...state,
                loading: true
            }
        case FETCH_BAG_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case FETCH_BAG_ERROR:
            return {
                ...state,
                list: [],
                loading: false
            }
        default:
            return state;
    }
}

export default bagReducer;