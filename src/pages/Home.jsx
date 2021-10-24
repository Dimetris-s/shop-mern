import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBy } from "lodash";
import ProductList from "../components/ProductsList";
import Sorting from "../components/Sorting";
import Search from "../components/Search";
import CategoryFilter from "../components/CategoryFilter";
import { fetchCategories, fetchProducts, resetSelectedCategory, setBadgeCount, setBasketItems, setSearchValue, showAlert } from "../store/actions";
import Loader from "../components/Loader";
import { addBasketItem, incrementBasketItem } from "../utils/axios";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
	},
}));

const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { products: productsLoad, categories: categoriesLoad } = useSelector(state => state.loading);
	const { products, selectedCategory, sortBy, searchValue } = useSelector(state => state.products);
	const { items: basketItems, basket, badgeCount } = useSelector(state => state.basket);
	const { id: userId } = useSelector(state => state.user.user);

	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchCategories());
		// eslint-disable-next-line
	}, []);

	const addToCart = (event, id) => {
		event.stopPropagation();
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

	const onSearch = event => {
		if (selectedCategory) {
			dispatch(resetSelectedCategory());
		}
		dispatch(setSearchValue(event.target.value));
	};

	const sortedProducts = orderBy(products, [sortBy.type], [sortBy.order]);
	const filteredProducts = selectedCategory ? sortedProducts.filter(product => product.category === selectedCategory.name) : sortedProducts;
	const searchedProducts = searchValue
		? sortedProducts.filter(product => product.name.toLowerCase().match(searchValue.toLowerCase()))
		: filteredProducts;

	return (
		<Container maxWidth="xl" className={classes.container}>
			<Search onSearch={onSearch} />
			<Grid container spacing="16">
				<Grid item md={2} sm={3}>
					{categoriesLoad ? <Loader /> : <CategoryFilter />}
				</Grid>
				<Grid item md={10} sm={9}>
					<Sorting />
					{productsLoad ? <Loader /> : <ProductList onAdd={addToCart} products={searchedProducts} />}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
