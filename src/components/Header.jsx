import React, { useEffect } from "react";
import useAuthState from "../hooks/useAuthState";
import { useDispatch, useSelector } from "react-redux";
import { fetchBasketItems, removeUser, setTotalCount } from "../store/actions";
import {
    AppBar,
    Badge,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { BASKET_ROUTE, DASHBOARD_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { getBasketByUserId } from "../utils/axios";

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
    const {id:userId, username, isAdmin } = useSelector((state) => state.user.user);
    const {items:basketItems, totalCount} = useSelector(state => state.basket)
    const classes = useStyles();

    useEffect( () => {
        async function fetchData() {
            if(isAuth) {
                const basket = await getBasketByUserId(userId)
                dispatch(fetchBasketItems(basket.id))
            }
        }
        fetchData()
        
    }, [isAuth])
    useEffect(() => {
        dispatch(setTotalCount(basketItems.length))
    }, [basketItems])

    const signOut = () => {
        dispatch(removeUser());
        localStorage.removeItem("user");
        history.push(LOGIN_ROUTE);
    };

    const renderActions = () => {
        if (isAuth) {
            return (
                <>
                    <IconButton onClick={() => history.push(BASKET_ROUTE)}>
                        <Badge badgeContent={totalCount} color="warning">
                            <ShoppingCartOutlined sx={{ color: "white" }} />
                        </Badge>
                    </IconButton>
                    {isAdmin && (
                        <Button
                            onClick={() => history.push(DASHBOARD_ROUTE)}
                            size="small"
                            sx={{ color: "white" }}
                            variant="text">
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
            <Container maxWidth="xl">
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <Link
                        style={{ color: "white", textDecoration: "none" }}
                        to={HOME_ROUTE}>
                        BestShop
                    </Link>
                    <Typography>{username}</Typography>
                    <div className={classes.actions}>{renderActions()}</div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
