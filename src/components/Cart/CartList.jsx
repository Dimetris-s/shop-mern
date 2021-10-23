import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import CartItem from "./CartItem";

const useStyles = makeStyles((theme) => ({
  basketContainer: {
    padding: theme.spacing(1.5),
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
}));

const CartList = ({ items, ...rest }) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <CartItem key={item.id} {...rest} product={item} />
      ))}
    </ul>
  );
};

export default CartList;
