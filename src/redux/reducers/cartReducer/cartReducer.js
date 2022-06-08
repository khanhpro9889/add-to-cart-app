import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_QUANTITY, ADD_QUANTITY } from '../../actions/cartActions/cartActionTypes';

const initialCart = {
    items: []
}

const cartReducer = (initialState = initialCart, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            if (initialState.items.find(i => i.item.id === action.payload.id)) {
                return { items: initialState.items.map(e => {
                    if (e.item.id === action.payload.id) 
                        return {
                            item: e.item,
                            quantity: e.quantity + 1 
                        }
                    return e;
                })}
            }
            return {
                items: [...initialState.items, {
                    item: action.payload,
                    quantity: 1
                }]
            }
        case DELETE_FROM_CART: 
            return {
                items: initialState.items.filter(i => i.item.id !== action.payload.id)
            }
        case REMOVE_QUANTITY: 
            const finded = initialState.items.find(i => i.item.id === action.payload.id);
            if (finded && finded.quantity === 1) {
                return {
                    items: initialState.items.filter(i => i.item.id !== action.payload.id)
                }
            }
            return {
                items: initialState.items.map(i => {
                    if (i.item.id === action.payload.id) {
                        return {
                            item: i.item,
                            quantity: i.quantity - 1 
                        }
                    }  
                    return i;
                })
            }
        case ADD_QUANTITY: 
            return {
                items: initialState.items.map(i => {
                    if (i.item.id === action.payload.id) 
                        return {
                            item: i.item,
                            quantity: i.quantity + 1 
                        }
                    return i;
                })
            }
        default:
            return initialState
    }
}

export default cartReducer;