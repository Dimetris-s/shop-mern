import { MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSortOrder, setSortType } from "../../store/actions";

const useStyles = makeStyles(theme => ({
	root: {
		marginBottom: theme.spacing(2),
		display: "flex",
		justifyContent: "end",
		columnGap: theme.spacing(2),
	},
}));
const Sorting = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const sortBy = useSelector(state => state.products.sortBy);
	const sortTypeHandler = event => {
		dispatch(setSortType(event.target.value));
	};
	const sortOrderHandler = event => {
		dispatch(setSortOrder(event.target.value));
	};
	return (
		<div className={classes.root}>
			<TextField select label="sort" value={sortBy.type} onChange={sortTypeHandler} size="small">
				<MenuItem value="name">Название</MenuItem>
				<MenuItem value="price">Цена</MenuItem>
				<MenuItem value="rate">Оценка</MenuItem>
			</TextField>

			<TextField select label="Сортировать по:" value={sortBy.order} onChange={sortOrderHandler} size="small">
				<MenuItem value="asc">Возрастанию</MenuItem>
				<MenuItem value="desc">Убыванию</MenuItem>
			</TextField>
		</div>
	);
};

export default Sorting;
