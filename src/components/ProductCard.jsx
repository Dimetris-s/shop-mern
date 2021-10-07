import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Rating, 
    Typography,
} from "@material-ui/core";
import { AddShoppingCartOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useHistory } from "react-router";
import useAuthState from "../hooks/useAuthState";
import { PRODUCT_ROUTE } from "../utils/consts";

const useStyle = makeStyles((theme) => ({
    image: {
        width: "100%",
        maxHeight: 200,
        objectFit: "contain",
        objectPosition: "center",
    },
    actions: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '100%'
    },
}));

const ProductCard = ({ product }) => {
    const { id, img, name, price, rate } = product;
    const history = useHistory();
    const clickHandler = () => {
        history.push(PRODUCT_ROUTE + "/" + id);
    };
    const isAuth = useAuthState();

    const classes = useStyle({isAuth});

    return (
        <Card sx={{ p: 2 }}>
            <Grid container spacing="5" justifyContent="space-between">
                <Grid item xs={3}>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="card_image"
                        src={img}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                        <Typography variant="h5">{name}</Typography>
                        <Typography variant="body1" component="p">
                            ID товара: {id}
                        </Typography>
                        <Typography variant="body1" component="p">
                            Цена: {price}$
                        </Typography>
                        <Typography variant="body1" component="p">
                            Оценка:
                        </Typography>
                        <Rating value={rate} readOnly precision={0.1} />
                    </CardContent>
                </Grid>
                <Grid item xs={3}>
                    <CardActions className={classes.actions}>
                        {isAuth && (
                            <Button
                            fullWidth
                                size="small"
                                variant="outlined"
                                color="success"
                                endIcon={<AddShoppingCartOutlined />}
                                sx={{marginBottom: '1rem' }}
                                >
                                В корзину
                            </Button>
                        )}

                        <Button
                        fullWidth
                            onClick={clickHandler}
                            color="success"
                            variant="contained"
                            size="small">
                            На страницу товара
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ProductCard;
