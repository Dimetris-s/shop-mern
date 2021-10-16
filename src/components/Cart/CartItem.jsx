import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";
import { Add, Cancel, Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    item: {
        display: "flex",
        justifyContent: "start",
        marginBottom: theme.spacing(3),
    },
    image: {
        objectFit: "contain",
        objectPosition: "center",
        width: "auto",
        maxHeight: 180,
        padding: theme.spacing(1),
    },
    actions: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "space-between",
    },
    content: {
        flexGrow: "1",
    },
    counter: {
        display: "flex",
    },
    count: {
        padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
        border: "1px solid #ccc",
    },
}));

const CartItem = ({ item }) => {
    const classes = useStyles();
    const products = useSelector((state) => state.products.products);
    const [count, setCount] = useState(item.count);
    const getProductById = (id) =>
        products.find((product) => product.id === item.productId);
    const product = getProductById(item.id);
    const getPrice = () => product.price * count;
    const incrCount = () => {
        setCount((prevState) => prevState + 1);
    };
    const decrCount = () => {
        setCount((prevState) => prevState - 1);
    };
    return (
        <Card elevation={4} component="li" className={classes.item}>
            <CardMedia
                component="img"
                image={product.img}
                alt="product"
                className={classes.image}
            />
            <CardContent className={classes.content}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="subtitle2">id: {product.id}</Typography>
                <Typography variant="subtitle1">
                    Стоимость: {getPrice()}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <IconButton color="error">
                    <Cancel />
                </IconButton>
                <div className={classes.counter}>
                    <IconButton  onClick={decrCount} color="primary">
                        <Remove fontSize="small" />
                    </IconButton>
                    <div className={classes.count}>{count}</div>
                    <IconButton onClick={incrCount} color="primary">
                        <Add fontSize="small" />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
};

export default CartItem;
