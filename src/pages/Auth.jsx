import React from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import useLoginLocation from "../hooks/useLoginLocation";
import { makeStyles } from "@material-ui/styles";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";

const useStyles = makeStyles((theme) => ({
    field: {
        marginBottom: '1rem',
    },
    container: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        width: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    actions: {
        width: "100%",
        display: "flex",
        justifyContent: (props) => props.isLogin ? "space-between" : "center",
    }
}));

const Auth = () => {
    const isLogin = useLoginLocation();
    const history = useHistory();
    const classes = useStyles({isLogin});
    const login = useInput();
    const password = useInput();

    const signIn = (e) => {
        e.preventDefault();
        console.log("login...");
        console.log(login.value, password.value);
    };

    const signUp = (e) => {
        e.preventDefault();
        console.log("register...");
        history.push(LOGIN_ROUTE);
    };
    return (
        <Container className={classes.container}>
            <Typography variant={"h4"} component={"h2"}>
                {isLogin ? "Вход" : "Регистрация"}
            </Typography>
            <form className={classes.form}>
                <TextField
                    className={classes.field}
                    variant={"standard"}
                    color={"primary"}
                    placeholder={"Введите ваш логин..."}
                    fullWidth
                    label={"Login"}
                    {...login.bind}
                />
                <TextField
                    className={classes.field}
                    variant={"standard"}
                    color={"primary"}
                    placeholder={`${
                        isLogin ? "Введите" : "Придумайте"
                    } пароль...`}
                    fullWidth
                    label={"Password"}
                    {...password.bind}
                    type={"password"}
                />
                <div className={classes.actions}>
                    {isLogin && (
                        <Button
                            onClick={() => history.push(REGISTRATION_ROUTE)}>
                            Зарегестрироваться
                        </Button>
                    )}

                    <Button
                        onClick={isLogin ? signIn : signUp}
                        variant={"contained"}
                        color={"success"}
                        type={"submit"}>
                        {isLogin ? "Войти" : "Зарегестрироваться"}
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default Auth;
