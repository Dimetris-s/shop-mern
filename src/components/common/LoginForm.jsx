import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "../UI/Form/TextField";
import { Button } from "@material-ui/core";
import { HOME_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions";

const useStyles = makeStyles(theme => ({
	
	form: {
		width: "400px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	actions: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
	},
}));

const LoginForm = () => {
	const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch()
    const [data, setData] = useState({login: "", password: ""})
    const [errors, setErrors] = useState({})
    const handleCahnge = ({name, value}) => {
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const submitHandler = event => {
        event.preventDefault()
        console.log(data);
        dispatch(setUser({ id: "1", username: "admin", password: "admin", isAdmin: true }))
        history.push(HOME_ROUTE)
    }
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<TextField
				placeholder={"Введите ваш логин..."}
				label="Login"
                name="login"
                value={data.login}
                onChange={handleCahnge}
                error={errors.login}
			/>
            <TextField
				placeholder="Введите ваш пароль..."
				label="Password"
                name="password"
                value={data.password}
                error={errors.password}
                onChange={handleCahnge}
                type="password"
			/>
			<div className={classes.actions}>
				<Button onClick={() => history.push(REGISTRATION_ROUTE)}>Зарегестрироваться</Button>

				<Button
					className={classes.btn}
					variant={"contained"}
					color={"success"}
					type={"submit"}
				>
					Войти
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
