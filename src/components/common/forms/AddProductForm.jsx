import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../../UI/Form/TextField";
import SelectField from "../../UI/Form/SelectField";
import { Box } from "@material-ui/system";
import { closeModal, fetchCategories, setProducts, showAlert } from "../../../store/actions";
import { Button } from "@material-ui/core";
import { AddBox, ArrowBack } from "@material-ui/icons";
import { validator } from "../../../utils/validator";
import { createProduct } from "../../../utils/axios";
import { productFormConfig } from "../../../utils/configs";

const AddProductForm = () => {
	const [data, setData] = useState({
		name: "",
		price: "",
		category_id: "",
		img: "",
		description: "",
	});
	const [errors, setErrors] = useState({});
	const dispatch = useDispatch();
	const { categories, products } = useSelector(state => state.products);
	useEffect(() => {
		dispatch(fetchCategories());
	}, []);
	useEffect(() => {
		validate();
	}, [data]);
	const validate = () => {
		const errors = validator(data, productFormConfig);
		setErrors(errors);

		return Object.keys(errors).length === 0;
	};
	const changeHandler = ({ name, value }) => {
		setData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	const submitHandler = event => {
		event.preventDefault();
		const isValid = validate();

		if (isValid) {
			createProduct(data).then(product => dispatch(setProducts([...products, product])));
			dispatch(closeModal("addProductModal"));
			dispatch(showAlert({ type: "success", text: "Товар успешно добавлен!" }));
		}
	};
	return (
		<form onSubmit={submitHandler}>
			<TextField
				outlined
				label="Название товара"
				name="name"
				value={data.name}
				onChange={changeHandler}
				error={errors.name}
			/>
			<Box sx={{ display: "flex", justifyContent: "space-between", columnGap: "2rem" }}>
				<TextField
					outlined
					label="Цена товара"
					name="price"
					type="number"
					value={data.price}
					onChange={changeHandler}
					error={errors.price}
				/>
				<SelectField
					label="Выберите категорию"
					name="category_id"
					value={data.category_id}
					onChange={changeHandler}
					error={errors.category_id}
					options={categories}
				/>
			</Box>
			<TextField
				label="Изображение"
				name="img"
				value={data.img}
				onChange={changeHandler}
				error={errors.img}
				placeholder="Вставьте ссылку на изображение"
			/>
			<TextField
				outlined
				multiline
				rows={3}
				label="Описание товара"
				name="description"
				value={data.description}
				onChange={changeHandler}
				error={errors.description}
			/>
			<Box sx={{ display: "flex", columnGap: "1rem", justifyContent: "end", width: "100%" }}>
				<Button
					onClick={() => dispatch(closeModal("addProductModal"))}
					variant="contained"
					color="info"
					startIcon={<ArrowBack />}
					type="button"
				>
					Назад
				</Button>
				<Button variant="contained" color="success" endIcon={<AddBox />} type="submit">
					Создать
				</Button>
			</Box>
		</form>
	);
};

export default AddProductForm;
