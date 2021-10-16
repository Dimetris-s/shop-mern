import { Card, CardContent, CardActions, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        textAlign: 'center'
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2)
    }
}))

const Checkout = () => {
    const classes = useStyles()
    const cart = useSelector(state => state.basket.items)
    const getTotalCount = () => {
        return cart.reduce((acc, item) => acc + item.count, 0)
    }
    return (
        <Card className={classes.root} elevation={5}>
            <CardContent>
                <Typography variant="h5" mb={5} className={classes.title}>
                    Оформить заказ
                </Typography>
                <Typography variant="subtitle1" className={classes.text}>
                    Количество товара: <span>{getTotalCount()}</span>
                </Typography>
                <Typography variant="subtitle1" className={classes.text}>
                    Итого: <span>12500$</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" color="success">
                    К оплате
                </Button>
            </CardActions>
        </Card>
    );
};

export default Checkout;
