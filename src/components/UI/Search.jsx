import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(3),
	},
}));
const Search = ({ onSearch }) => {
	const classes = useStyles();
	const searchValue = useSelector(state => state.products.searchValue);

	return (
		<div className={classes.root}>
			<TextField
				value={searchValue}
				onChange={onSearch}
				variant="outlined"
				size="small"
				label="Поиск"
				placeholder="Введите название товара..."
				fullWidth
			/>
		</div>
	);
};

export default React.memo(Search);
