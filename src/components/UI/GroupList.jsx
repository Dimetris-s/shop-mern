import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
	"button-group": {
		width: "100%",
		padding: 0,
		margin: 0,
	},
}));

const GroupList = ({ items, valueProp, contentProp, selectedItem, onItemChange }) => {
	const classes = useStyles();

	return (
		<ButtonGroup component="ul" className={classes["button-group"]} orientation="vertical">
			{Object.keys(items).map(key => (
				<Button
					component="li"
					className={classes.button}
					variant={`${selectedItem === items[key] ? "contained" : "outlined"}`}
					key={items[key][valueProp]}
					onClick={() => onItemChange(items[key])}
				>
					{items[key][contentProp]}
				</Button>
			))}
		</ButtonGroup>
	);
};

GroupList.defaultProps = {
	valueProp: "id",
	contentProp: "name",
};

export default GroupList;
