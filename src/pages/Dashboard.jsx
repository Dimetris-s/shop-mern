import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import Loader from "../components/UI/Loader";
import { useDispatch, useSelector } from "react-redux";
import ProductsTable from "../components/common/Product/ProductsTable";
import { fetchProducts } from "../store/actions";

const useStyles = makeStyles(theme => ({
	title: {
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2),
	},
}));

const Dashboard = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const products = useSelector(state => state.products.products);
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<Container maxWidth="xl">
			<Typography className={classes.title} variant="h4">
				Админпанель
			</Typography>
			{products ? <ProductsTable products={products} /> : <Loader />}
		</Container>
	);
};

export default Dashboard;
