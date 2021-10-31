import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "../../UI/Form/TextField";
import { Button } from "@material-ui/core";
import { HOME_ROUTE, REGISTRATION_ROUTE } from "../../../utils/consts";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setUser, showAlert } from "../../../store/actions";
import { validator } from "../../../utils/validator";
import { loginFormConfig } from "../../../utils/configs";
import axios from "../../../utils/axios";
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
	const history = useHistory();
	const dispatch = useDispatch();
	const [data, setData] = useState({ login: "", password: "" });

	const handleCahnge = ({ name, value }) => {
		setData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	const submitHandler = event => {
		event.preventDefault();
		axios.get("/users").then(r => {
			const user = r.data.find(u => u.username === data.login && u.password === data.password);
			if (user) {
				dispatch(setUser(user));
				history.push(HOME_ROUTE);
				localStorage.setItem("user", JSON.stringify(user));
			} else {
				setData({ login: "", password: "" });
				dispatch(showAlert({ type: "error", text: "Неправильное имя пользователя или пароль!" }));
			}
		});
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<TextField
				placeholder={"Введите ваш логин..."}
				label="Login"
				name="login"
				value={data.login}
				onChange={handleCahnge}
			/>
			<TextField
				placeholder="Введите ваш пароль..."
				label="Password"
				name="password"
				value={data.password}
				onChange={handleCahnge}
				type="password"
			/>
			<div className={classes.actions}>
				<Button onClick={() => history.push(REGISTRATION_ROUTE)}>Зарегестрироваться</Button>

				<Button className={classes.btn} variant={"contained"} color={"success"} type={"submit"}>
					Войти
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
