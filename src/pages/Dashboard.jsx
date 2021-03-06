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
import CategoryModal from "../components/common/modals/Category.modal";

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

	const onAddProduct = () => {
		dispatch(openModal("addProductModal"))
	}
	const onEditCategories = () => {
		dispatch(openModal("categoryModal"))
	}

	const sortedProducts = _.orderBy(products, sortBy.type, sortBy.order)
	return (
		<Container maxWidth="xl">
			<Typography className={classes.title} variant="h4">
				Админпанель
			</Typography>
			{products ? <ProductsTable products={sortedProducts} /> : <Loader />}
			<div className={classes.buttons}>
				<Button onClick={onEditCategories} variant="contained" color="secondary" endIcon={<Category/>}>Категории</Button>
				<Button onClick={onAddProduct} variant="contained" color="primary" endIcon={<AddShoppingCart/>}>Добавить товар</Button>
			</div>
			{productId && <EditProductModal id={productId}/>}
			<AddProductModal/>
			<CategoryModal/>
		</Container>
	);
};

export default Dashboard;
