import { makeStyles } from "@material-ui/styles";
import React from "react";
import Header from "./Header";
import Alert from "../UI/Alert";

const useStyles = makeStyles({
	root: {
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
	},
});

const Layout = ({ children }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<main style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>{children}</main>
			<Alert />
		</div>
	);
};

export default Layout;
