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
import React from "react";

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

const CartItem = ({ product, onDelete, onIncrement, onDecrement }) => {
    const classes = useStyles();

    const getPrice = () => product.price * product.count;

    if(!product.count) return null

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
                <IconButton onClick={() => onDelete(product.item_id)} color="error">
                    <Cancel />
                </IconButton>
                <div className={classes.counter}>
                    <IconButton  onClick={() => onDecrement(product.item_id)} color="primary">
                        <Remove fontSize="small" />
                    </IconButton>
                    <div className={classes.count}>{product.count}</div>
                    <IconButton onClick={() => onIncrement(product.item_id)} color="primary">
                        <Add fontSize="small" />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
};

export default CartItem;
