import React from "react";
import useAuthState from "../hooks/useAuthState";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/actions";
import {
    AppBar,
    Button,
    Container,
    Toolbar,
    Typography
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
    }
})

const Header = () => {
    const isAuth = useAuthState();
    const history = useHistory();
    const dispatch = useDispatch();

    const classes = useStyles()
    const signOut = () => {
        dispatch(removeUser());
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
                        {isAuth ? (
                            <>
                                <Typography>Username</Typography>
                                <Button
                                    onClick={() =>
                                        history.push(DASHBOARD_ROUTE)
                                    }
                                    size="small"
                                    color="success"
                                    variant="contained">
                                    Dashboard
                                </Button>
                                <Button
                                    onClick={signOut}
                                    size="small"
                                    color="error"
                                    variant="contained">
                                    Sign out
                                </Button>
                            </>
                        ) : (
                            <Button
                                variant="contained"
                                size="small"
                                color="warning"
                                onClick={() => history.push(LOGIN_ROUTE)}>
                                Войти
                            </Button>
                        )}
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
