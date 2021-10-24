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
    root: {
        cursor: "pointer",
        '&:hover': {
            boxShadow: theme.shadows[4]
        }
    },
    image: {
        width: "100%",
        maxHeight: 200,
        objectFit: "contain",
        objectPosition: "center",
        borderRadius: theme.shape.borderRadius * 2
    },
    actions: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "end",
        height: '100%'
    }
}));

const ProductCard = ({ product, onAdd }) => {
    const { id, img, name, price, rate } = product;
    const history = useHistory();
    const isAuth = useAuthState();

    const classes = useStyle({isAuth});
    
    
    return (
        <Card className={classes.root} onClick={() => history.push(PRODUCT_ROUTE + "/" + id)} sx={{ p: 2 }}>
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
                                onClick={(event) => onAdd(event, id)}
                                size="small"
                                variant="contained"
                                color="success"
                                endIcon={<AddShoppingCartOutlined />}
                                >
                                В корзину
                            </Button>
                        )}
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ProductCard;
