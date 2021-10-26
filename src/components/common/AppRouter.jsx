import React from "react";
import { Switch, Route, Redirect } from "react-router";
import useAdminState from "../../hooks/useAdminState";
import useAuthState from "../../hooks/useAuthState";
import { adminRoutes, authRoutes, publicRoutes } from "../../routes";
import { HOME_ROUTE } from "../../utils/consts";

const AppRouter = () => {
	const isAuth = useAuthState();
	const isAdmin = useAdminState()
	return (
		<Switch>
			{isAuth &&
				authRoutes.map(({ path, Component, exact }) => (
					<Route exact={exact} key={path} path={path} component={Component} />
				))}
			{(isAuth && isAdmin) && adminRoutes.map(({ path, exact, Component }) => (
				<Route key={path} exact={exact} path={path} component={Component} />
			))}
			{publicRoutes.map(({ path, Component, exact }) => (
				<Route key={path} exact={exact} path={path} component={Component} />
			))}
			<Redirect to={HOME_ROUTE} />
		</Switch>
	);
};

export default AppRouter;
