import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions";

const AuthState = ({ children }) => {
    const dispatch = useDispatch()
    const user = localStorage.getItem('user')
    if(user) {
        dispatch(setUser(JSON.parse(user)))
    }
    return <>{children}</>
};

export default AuthState;
