import { CREATE_USER, REMOVE_USER, SET_USER } from "../actions/types";

const initialState = {
    users: [
        {id: "1", username: 'admin', password: 'admin', isAdmin: true},
        {id: "2", username: 'dima', password: '123', isAdmin: false}
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