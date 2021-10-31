import { Paper } from "@material-ui/core";
import React from "react";
import Category from "../UI/Category";
const CategoryList = ({ categories, onDelete }) => {
    
	return (
        <Paper sx={{display: "flex", gap: "1rem", flexWrap:"wrap", p: 2}}>
            {categories.map(category => <Category key={category.id} item={category} onDelete={() => onDelete(category.id)} />)}
        </Paper>
    );
};

export default CategoryList;
