import React from "react";
import { Container, Typography} from "@material-ui/core";
import useLoginLocation from "../hooks/useLoginLocation";
import { makeStyles } from "@material-ui/styles";

import LoginForm from "../components/common/forms/LoginForm";
import RegisterForm from "../components/common/forms/RegisterForm";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
	}
	
}));

const Auth = () => {
	const isLogin = useLoginLocation();
	const classes = useStyles();
	
	return (
		<Container className={classes.container}>
			<Typography className={classes.p} variant={"h4"} component={"h2"}>
				{isLogin ? "Вход" : "Регистрация"}
			</Typography>
			{isLogin ? <LoginForm/> : <RegisterForm/>}
		</Container>
	);
};

export default Auth;
