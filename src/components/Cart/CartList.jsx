import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import CartItem from "./CartItem";

const useStyles = makeStyles(theme => ({
    basketContainer: {
        padding: theme.spacing(1.5),
    },
    list: {
        listStyle: "none",
        margin: 0,
        padding: 0,
    }
}))

const CartList = ({ items }) => {
    const classes = useStyles()
    console.log(items);
    return (
        <Paper elevation={4} className={classes.basketContainer}>
            <ul className={classes.list}>
                {items.map(item => <CartItem item={item}/>)}
            </ul>
        </Paper>
    );
};

export default CartList;
