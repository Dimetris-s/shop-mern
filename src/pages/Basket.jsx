import {
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CartList from "../components/Cart/CartList";
import Checkout from "../components/Cart/Checkout";
import Search from "../components/Search";


const Basket = () => {
    const onSearch = () => {};
    const items = useSelector(state => state.basket.items)
    return (
        <Container maxWidth="lg">
            <Search onSearch={onSearch} />
            <Typography variant="h5" gutterBottom>
                Корзина
            </Typography>
            <Grid container spacing="15">
                <Grid item xs={9}>
                    <CartList  items={items}/>
                </Grid>
                <Grid item xs={3}>
                    <Checkout />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Basket;
