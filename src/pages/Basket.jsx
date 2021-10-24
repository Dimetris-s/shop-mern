import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../components/Cart/CartList";
import Checkout from "../components/Cart/Checkout";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { fetchBasketItems, fetchProducts, setBadgeCount, setBasketItems, setSearchValue } from "../store/actions";
import { decrementBasketItem, deleteBasketItem, incrementBasketItem } from "../utils/axios";

const Basket = () => {
	const dispatch = useDispatch();
	const { items, badgeCount } = useSelector(state => state.basket);
	const products = useSelector(state => state.products.products);
	const { id: userId } = useSelector(state => state.user.user);
	const searchValue = useSelector(state => state.products.searchValue);
	const loading = useSelector(state => state.loading.basket);

	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchBasketItems(userId));
		// eslint-disable-next-line
	}, []);

	const onSearch = event => {
		dispatch(setSearchValue(event.target.value));
	};

	const onIncrement = id => {
		const newItems = items.map(item => (item.id === id ? { ...item, count: item.count + 1 } : item));
		dispatch(setBasketItems(newItems));
		incrementBasketItem(id);
	};

	const onDecrement = id => {
		const newItems = items
			.map(item => (item.id === id ? { ...item, count: item.count - 1 } : item))
			.filter(item => item.count > 0);
		dispatch(setBasketItems(newItems));
		dispatch(setBadgeCount(newItems.length));
		decrementBasketItem(id);
	};
	const onDelete = id => {
		const newItems = items.filter(item => item.id !== id);
		dispatch(setBasketItems(newItems));
		dispatch(setBadgeCount(badgeCount - 1));
		deleteBasketItem(id);
	};
	const basketProducts = items.map(item => {
		return {
			count: item.count,
			item_id: item.id,
			...products.find(product => product.id === item.product_id),
		};
	});
	const foundProducts = searchValue
		? basketProducts.filter(product => product.name.toLowerCase().match(searchValue.toLowerCase()))
		: basketProducts;
	return (
		<Container maxWidth="lg">
			<Search onSearch={onSearch} />
			<Typography variant="h5" gutterBottom>
				Корзина
			</Typography>
			<Grid container spacing="15">
				<Grid item xs={9}>
					{foundProducts.length ? (
						<CartList {...{ onIncrement, onDecrement, onDelete }} items={foundProducts} />
					) : loading ? (
						<Loader />
					) : (
						<p>Корзина пуста :(</p>
					)}
				</Grid>
				<Grid item xs={3}>
					<Checkout products={basketProducts} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Basket;
