import { Button, Chip, Container, Grid, Rating, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addBasketItem, getProductById, incrementBasketItem } from "../utils/axios";
import Loader from "../components/UI/Loader";
import { AddShoppingCartOutlined } from "@material-ui/icons";
import { Box } from "@material-ui/system";
import { useDispatch, useSelector } from "react-redux";
import { setBadgeCount, setBasketItems, showAlert } from "../store/actions";
import useAuthState from "../hooks/useAuthState";

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: theme.spacing(2.5),
	},
	image: {
		width: "100%",
		height: "100%",
		overflow: "hidden",
		boxShadow: theme.shadows[3],
		borderRadius: theme.shape.borderRadius,
		maxHeight: 550,
		padding: theme.spacing(1),
		border: "1px solid #ccc",
		"& img": {
			borderRadius: theme.shape.borderRadius,
			width: "100%",
			height: "100%",
			objectFit: "cover",
			objectPosition: "center",
		},
	},
	price: {
		color: theme.palette.grey[500],
		display: "inline",
	},
}));

const ProductPage = () => {
	const classes = useStyles();
	const { id } = useParams();
	const dispatch = useDispatch();
	const isAuth = useAuthState();
	const { items: basketItems, badgeCount, basket } = useSelector(state => state.basket);
	const userId = useSelector(state => state.user.user.id);
	const [product, setProduct] = useState();
	useEffect(() => {
		getProductById(id).then(product => setProduct(product));
		// eslint-disable-next-line
	}, []);
	console.log(product);

	const addToCart = id => {
		const basketItem = basketItems.find(item => item.product_id === id && basket.user_id === userId);
		if (basketItem) {
			incrementBasketItem(basketItem.id);
		} else {
			const item = {
				id: Math.floor(Math.random() * 100).toString(),
				basket_id: basket.id,
				product_id: id,
				count: 1,
			};
			addBasketItem(item).then(() => {
				dispatch(setBasketItems([...basketItems, item]));
				dispatch(setBadgeCount(badgeCount + 1));
			});
		}
		dispatch(showAlert({ type: "success", text: "Товар добавлен в корзину" }));
	};

	if (!product) return <Loader />;

	return (
		<Container maxWidth="xl">
			<div className={classes.root}>
				<Grid container spacing="22">
					<Grid item md={3} maxHeight={550}>
						<div className={classes.image}>
							<img src={product.img} alt="product" />
						</div>
					</Grid>
					<Grid item md={7}>
						<Typography variant="h4">{product.name}</Typography>
						<Rating value={product.rate} readOnly precision={0.1} />
						<Box sx={{ marginBottom: "2rem" }}>
							<Chip color="info" label={product.category} variant="filled" size="small" />
						</Box>
						<Typography variant="h5" component="div" mb="3rem">
							Цена:{" "}
							<Typography variant="h5" className={classes.price}>
								{product.price}$
							</Typography>
						</Typography>

						<Typography variant="h6">Описание:</Typography>
						<Typography variant="body1">{product.description}</Typography>
					</Grid>
					<Grid item md={2}>
						{isAuth && (
							<Button
								onClick={() => addToCart(id)}
								size="large"
								variant="contained"
								color="success"
								endIcon={<AddShoppingCartOutlined />}
							>
								В корзину
							</Button>
						)}
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};

export default ProductPage;
