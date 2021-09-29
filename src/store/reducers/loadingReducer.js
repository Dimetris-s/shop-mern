import { SET_LOADING, STOP_LOADING } from "../actions/types";

const initialState = {
    products: false,
    categories: false,
    user: false
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: return {...state, [action.payload]: true}
        case STOP_LOADING: return {...state, [action.payload]: false}
    
        default: return state
    }
}