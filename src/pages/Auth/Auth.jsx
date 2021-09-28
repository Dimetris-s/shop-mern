import React from "react";
import useLoginLocation from '../../hooks/useLoginLocation'

const Auth = () => {
    const isLogin = useLoginLocation()
    return <h1>
        {isLogin ? "LOGIN" : "REGISTER"}
    </h1>;
};

export default Auth;
