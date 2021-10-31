import { Chip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getCategoryById } from "../../utils/axios";

const Category = ({ id }) => {
	const [category, setCategory] = useState();
	useEffect(() => {
		getCategoryById(id).then(c => setCategory(c));
	}, [id]);
	if (!category) return null;

	return <Chip color="info" label={category.name} variant="filled" size="small" />;
};

export default Category;
