import { REMOVE_USER, SET_USER } from "../actions/types";

const initialState = {
    isAuth: false,
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: return {isAuth: true, user: action.payload}
        case REMOVE_USER: return {isAuth: false, user: {}}
            
        default: return state
    }
}