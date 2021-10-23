import {
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartList from "../components/Cart/CartList";
import Checkout from "../components/Cart/Checkout";
import Loader from "../components/Loader";
import Search from "../components/Search";


const Basket = () => {
    const onSearch = () => {};
    const items = useSelector(state => state.basket.items)
    const products = useSelector(state => state.products.products)
    console.log('items', items);
    console.log('products', products);

    const basketProducts = items.map(item => products.find(product => product.id === item.product_id))
    console.log(basketProducts);

    return (
        <Container maxWidth="lg">
            <Search onSearch={onSearch} />
            <Typography variant="h5" gutterBottom>
                Корзина
            </Typography>
            <Grid container spacing="15">
                <Grid item xs={9}>
                    {items ? <CartList items={items}/> : <Loader/>}
                </Grid>
                <Grid item xs={3}>
                    <Checkout />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Basket;
