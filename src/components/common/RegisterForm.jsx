import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "../UI/Form/TextField";
import { Button } from "@material-ui/core";

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
    const [data, setData] = useState({login: "", password: ""})
    const handleCahnge = ({name, value}) => {
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const submitHandler = event => {
        event.preventDefault()
        console.log(data);
    }
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<TextField
				placeholder={"Придумайте логин"}
				label="Login"
                name="login"
                value={data.login}
                onChange={handleCahnge}
			/>
            <TextField
				placeholder="Придумайте ваш пароль..."
				label="Password"
                name="password"
                value={data.password}
                onChange={handleCahnge}
                type="password"
			/>
			<div className={classes.actions}>

				<Button
					variant={"contained"}
					color={"success"}
					type={"submit"}
				>
					Зарегестрироваться
				</Button>
			</div>
		</form>
	);
};

export default RegisterForm;
