import React from "react";
import useAuthState from "../hooks/useAuthState";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/actions";
import {
    AppBar,
    Button,
    Container,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { DASHBOARD_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    actions: {
        display: "flex",
        columnGap: "1rem",
        alignItems: "center",
    },
});

const Header = () => {
    const isAuth = useAuthState();
    const history = useHistory();
    const dispatch = useDispatch();
    const { username, isAdmin } = useSelector((state) => state.user.user);
    const classes = useStyles();
    const signOut = () => {
        dispatch(removeUser());
        localStorage.removeItem("user");
        history.push(LOGIN_ROUTE);
    };

    const renderActions = () => {
        if (isAuth) {
            return (
                <>
                    <Typography>{username}</Typography>
                    {isAdmin && (
                        <Button
                            onClick={() => history.push(DASHBOARD_ROUTE)}
                            size="small"
                            color="success"
                            variant="contained">
                            Dashboard
                        </Button>
                    )}
                    <Button
                        onClick={signOut}
                        size="small"
                        color="error"
                        variant="contained">
                        Sign out
                    </Button>
                </>
            );
        } else {
            return (
                <Button
                    variant="contained"
                    size="small"
                    color="warning"
                    onClick={() => history.push(LOGIN_ROUTE)}>
                    Войти
                </Button>
            );
        }
    };

    return (
        <AppBar position="static">
            <Container>
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <Link
                        style={{ color: "white", textDecoration: "none" }}
                        to={HOME_ROUTE}>
                        BestShop
                    </Link>
                    <div className={classes.actions}>
                        {renderActions()}
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
