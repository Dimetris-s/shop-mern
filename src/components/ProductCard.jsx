import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { PRODUCT_ROUTE } from "../utils/consts";

const ProductCard = ({ product }) => {
    const {id, img, name, price} = product
    const history = useHistory()
    const clickHandler = () => {
        history.push(PRODUCT_ROUTE + '/' + id)
    }
    return (
        <Card sx={{ p: 2 }}>
            <Grid container spacing="5">
                <Grid item xs="3">
                    <CardMedia
                        component="img"
                        height="150px"
                        alt="card_image"
                        src={img}
                    />
                </Grid>
                <Grid item xs="6">
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
                            {price}$
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs="3" alignSelf="end">
                    <CardActions>
                        <Button
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
