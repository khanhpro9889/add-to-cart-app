import { ADD_TO_CART, REMOVE_QUANTITY, ADD_QUANTITY, DELETE_FROM_CART } from "./cartActionTypes";

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const deleteFromCart = (item) => {
    return {
        type: DELETE_FROM_CART,
        payload: item
    }
}

export const removeQuantity = (item) => {
    return {
        type: REMOVE_QUANTITY,
        payload: item
    }
}

export const addQuantity = (item) => {
    return {
        type: ADD_QUANTITY,
        payload: item
    }
}