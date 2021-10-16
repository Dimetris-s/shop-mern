import { INCR_ITEM, SET_ITEMS } from "../actions/types"

const initialState = {
    items: [
        {id: 1, productId: 1, count: 1},
        {id: 2, productId: 2, count: 3},
        {id: 3, productId: 3, count: 4},
    ],

}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS: return {...state, items: action.payload}
        default: return state
    }
}