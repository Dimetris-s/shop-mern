import { Badge, Button, IconButton } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import useAuthState from "../../../hooks/useAuthState";
import { removeUser } from "../../../store/actions";
import { BASKET_ROUTE, DASHBOARD_ROUTE, LOGIN_ROUTE } from "../../../utils/consts";

const HeaderActions = () => {
	const isAuth = useAuthState();
	const history = useHistory();
	const dispatch = useDispatch();
	const { isAdmin } = useSelector(state => state.user.user);
	const { badgeCount } = useSelector(state => state.basket);

	const signOut = () => {
		dispatch(removeUser());
		localStorage.removeItem("user");
		history.push(LOGIN_ROUTE);
	};

	if (isAuth) {
		return (
			<>
				<IconButton onClick={() => history.push(BASKET_ROUTE)}>
					<Badge badgeContent={badgeCount} color="warning">
						<ShoppingCartOutlined sx={{ color: "white" }} />
					</Badge>
				</IconButton>
				{isAdmin && (
					<Button
						onClick={() => history.push(DASHBOARD_ROUTE)}
						size="small"
						sx={{ color: "white" }}
						variant="text"
					>
						Dashboard
					</Button>
				)}
				<Button onClick={signOut} size="small" color="error" variant="contained">
					Sign out
				</Button>
			</>
		);
	}

	return (
		<Button variant="contained" size="small" color="warning" onClick={() => history.push(LOGIN_ROUTE)}>
			Войти
		</Button>
	);
};

export default HeaderActions;
