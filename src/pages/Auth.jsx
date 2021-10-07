import React from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import useLoginLocation from "../hooks/useLoginLocation";
import { makeStyles } from "@material-ui/styles";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createUser, setUser, showAlert } from "../store/actions";

const useStyles = makeStyles((theme) => ({
    field: {
        marginBottom: theme.spacing(2),
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
    },
}));

const Auth = () => {
    const dispatch = useDispatch()
    const isLogin = useLoginLocation();
    const history = useHistory();
    const classes = useStyles({isLogin});
    const login = useInput();
    const password = useInput();

    const users = useSelector(state => state.user.users)
    const signIn = (e) => {
        e.preventDefault();
        const existingUser = users.find(({username, password: userPass}) => {
            return (login.value.toLowerCase().trim() === username.toLowerCase() && password.value === userPass)
        })

        if(existingUser) {
            dispatch(setUser(existingUser))
            localStorage.setItem('user', JSON.stringify(existingUser))
            history.push(HOME_ROUTE)
        } else {
            dispatch(showAlert({type: 'error', text: 'Неправильное имя пользователя или пароль!'}))
            login.clear()
            password.clear()
        }
    };

    const signUp = (e) => {
        e.preventDefault();
        const existingUser = users.find(({username}) => login.value.toLowerCase() === username.toLowerCase())
        
        if(existingUser) {
            dispatch(showAlert({type: 'warning', text: 'Пользователь с таким именем уже существует!'}))
            login.clear()
            password.clear()
        } else {
            const newUser = {
                id: Date.now(),
                username: login.value,
                password: password.value,
                isAdmin: false
            }
            dispatch(showAlert({type: 'success', text: 'Пользователь успешно зарегестрирован!'}))
            dispatch(createUser(newUser))
            history.push(LOGIN_ROUTE);
        }

    };
    return (
        <Container className={classes.container}>
            <Typography className={classes.p} variant={"h4"} component={"h2"}>
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
                        className={classes.btn}
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
