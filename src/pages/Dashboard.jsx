import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import Loader from "../components/UI/Loader";
import { useDispatch, useSelector } from "react-redux";
import ProductsTable from "../components/common/Product/ProductsTable";
import { fetchProducts, openModal, setSortOrder, setSortType } from "../store/actions";
import _ from "lodash"
import { AddShoppingCart, Category } from "@material-ui/icons";
import {  useParams } from "react-router";
import EditProductModal from "../components/common/modals/EditProduct.modal";
import AddProductModal from "../components/common/modals/AddProduct.modal";

const useStyles = makeStyles(theme => ({
	title: {
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2),
	},
	buttons: {
		display: "flex",
		justifyContent: "end",
		columnGap: "1rem",
		marginTop: "2rem"
	}
}));

const Dashboard = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const {productId} = useParams()
	const {products, sortBy} = useSelector(state => state.products);
	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(setSortType("id"))
		dispatch(setSortOrder("asc"))
	}, [dispatch]);

	const sortedProducts = _.orderBy(products, sortBy.type, sortBy.order)
	return (
		<Container maxWidth="xl">
			<Typography className={classes.title} variant="h4">
				Админпанель
			</Typography>
			{products ? <ProductsTable products={sortedProducts} /> : <Loader />}
			<div className={classes.buttons}>
				<Button variant="contained" color="warning" endIcon={<Category/>}>Добавить категорию</Button>
				
				<Button onClick={() => dispatch(openModal("addProductModal"))} variant="contained" color="secondary" endIcon={<AddShoppingCart/>}>Добавить товар</Button>
			</div>
			{productId && <EditProductModal id={productId}/>}
			<AddProductModal/>
		</Container>
	);
};

export default Dashboard;
