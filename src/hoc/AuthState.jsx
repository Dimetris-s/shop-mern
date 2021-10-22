import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions";

const AuthState = ({ children }) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    if(user) {
        dispatch(setUser(user))
    }
    return <>{children}</>
};

export default AuthState;
