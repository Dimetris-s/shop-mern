import React, { useState } from "react";
import TextField from "../UI/Form/TextField";
import SelectField from "../UI/Form/SelectField";
import UploadFile from "../UI/Form/UploadFile";

const AddProductForm = () => {
	const [data, setData] = useState({ name: "", price: 0, category: "", img: "", description: "" });
	const [errors, setErrors] = useState({});
	const changeHandler = ({ name, value }) => {
		setData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	const submitHandler = event => {
		event.preventDefault();
		console.log(data);
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
				name="category"
				value={data.category}
				onChange={changeHandler}
				error={errors.category}
				options={[
					{ id: "1", name: "Телевизоры" },
					{ id: "2", name: "Мониоры" },
					{ id: "3", name: "Холодильники" },
				]}
			/>
			<UploadFile label="Добавить изображение" name="img" value={data.img} onChange={changeHandler} error={errors.img} />
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
		</form>
	);
};

export default AddProductForm;
