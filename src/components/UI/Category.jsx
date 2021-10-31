import { Chip, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getCategoryById } from "../../utils/axios";

const Category = ({ id, onDelete, item }) => {
	const [category, setCategory] = useState(item);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		if (id) {
			setIsLoading(true);
			getCategoryById(id)
				.then(c => setCategory(c))
				.catch(() => setIsLoading(false));
		}
	}, [id]);
	if (!category && isLoading) return null;
	if (!category && !isLoading) return <Typography variant="caption">Нет категории</Typography>;

	return <Chip color="info" label={category.name} variant="filled" size="small" onDelete={onDelete} />;
};

export default Category;
