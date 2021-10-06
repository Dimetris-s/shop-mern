import { CREATE_USER, REMOVE_USER, SET_USER } from "../actions/types";

const initialState = {
    users: [
        {username: 'admin', password: 'admin', isAdmin: true},
        {username: 'dima', password: 'qwerty', isAdmin: false}
    ],
    isAuth: false,
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: return {...state, isAuth: true, user: action.payload}
        case REMOVE_USER: return {...state, isAuth: false, user: {}}
        case CREATE_USER: return {...state, users: [...state.users, action.payload]}
        default: return state
    }
}