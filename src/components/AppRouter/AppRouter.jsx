import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { authRoutes, publicRoutes } from "../../routes";
import { HOME_ROUTE } from "../../utils/consts";

const AppRouter = () => {
    const isAuth = true;
    return (
        <Switch>
            {isAuth &&
                authRoutes.map(({ path, Component, exact }) => (
                    <Route exact={exact} key={path} path={path} component={Component} />
                ))}
            {publicRoutes.map(({ path, Component, exact }) => (
                <Route key={path} exact={exact} path={path} component={Component} />
            ))}
            <Redirect to={HOME_ROUTE} />
        </Switch>
    );
};

export default AppRouter;
