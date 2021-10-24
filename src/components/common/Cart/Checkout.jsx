import { Card, CardContent, CardActions, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	title: {
		textAlign: "center",
	},
	text: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: theme.spacing(2),
	},
}));

const Checkout = ({ products }) => {
	const classes = useStyles();
	const getTotalCount = () => {
		return products.reduce((acc, product) => acc + product.count, 0);
	};
	const getTotalPrice = () => {
		return products.reduce((acc, product) => acc + product.price * product.count, 0);
	};
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
					Итого: <span>{getTotalPrice()}$</span>
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
