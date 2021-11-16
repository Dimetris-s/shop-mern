import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "../../UI/Form/TextField";
import { Button } from "@material-ui/core";
import { registerFormConfig } from "../../../utils/configs";
import { validator } from "../../../utils/validator";
import { createBasket, createUser } from "../../../utils/axios";
import { useDispatch } from "react-redux";
import { showAlert } from "../../../store/actions";
import { useHistory } from "react-router";
import { LOGIN_ROUTE } from "../../../utils/consts";

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
		justifyContent: "center",
	},
}));

const RegisterForm = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const [data, setData] = useState({ login: "", password: "", passwordRepeat: "" });
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState(false);
	const validate = () => {
		const errors = validator(data, registerFormConfig);
		if (data.passwordRepeat !== data.password) errors.passwordRepeat = registerFormConfig.passwordRepeat.message;
		setErrors(errors);
		return Object.keys(errors).length === 0;
	};
	useEffect(() => {
		if (touched) {
			validate();
		}
	}, [data]);
	const handleCahnge = ({ name, value }) => {
		setData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	const submitHandler = async event => {
		event.preventDefault();
		setTouched(true);
		const isValid = validate();
		if (!isValid) return;
		const newUser = {
			username: data.login,
			password: data.password,
		};
		try {
			const user = await createUser(newUser);
			await createBasket(user.id);
			dispatch(showAlert({ type: "success", text: "Пользователь успешно создан!" }));
			history.push(LOGIN_ROUTE);
		} catch (error) {
			console.log("ERROR", error);
			dispatch(showAlert({ type: "error", text: error.message }));
			setData({ login: "", password: "", passwordRepeat: "" });
		}
	};
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<TextField
				placeholder={"Придумайте логин"}
				label="Имя пользователя"
				name="login"
				value={data.login}
				onChange={handleCahnge}
				error={errors.login}
			/>
			<TextField
				label="Пароль"
				name="password"
				value={data.password}
				onChange={handleCahnge}
				type="password"
				error={errors.password}
				registerPassword
			/>
			<TextField
				label="Повторите пароль"
				name="passwordRepeat"
				value={data.passwordRepeat}
				onChange={handleCahnge}
				type="password"
				error={errors.passwordRepeat}
				registerPassword
			/>
			<div className={classes.actions}>
				<Button variant={"contained"} color={"success"} type={"submit"}>
					Зарегестрироваться
				</Button>
			</div>
		</form>
	);
};

export default RegisterForm;
