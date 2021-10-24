import React from "react";
import { useSelector } from "react-redux";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import HeaderActions from "./HeaderActions";
import { HOME_ROUTE } from "../../../utils/consts";

const useStyles = makeStyles({
	actions: {
		display: "flex",
		columnGap: "1rem",
		alignItems: "center",
	},
});

const Header = () => {
	const { username } = useSelector(state => state.user.user);

	const classes = useStyles();

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar style={{ justifyContent: "space-between" }}>
					<Link style={{ color: "white", textDecoration: "none" }} to={HOME_ROUTE}>
						BestShop
					</Link>
					<Typography>{username}</Typography>
					<div className={classes.actions}>
						<HeaderActions />
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
