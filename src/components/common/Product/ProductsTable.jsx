import React from "react";
import { useDispatch } from "react-redux";
import { setProducts, showAlert } from "../../../store/actions";
import { deleteProduct } from "../../../utils/axios";
import Table, { TableActions } from "../../UI/Table";

const ProductsTable = ({ products, onSort }) => {
	const dispatch = useDispatch()
	const columns = {
		id: {
			name: "id",
			path: "id",
		},
		name: {
			name: "Наименование",
			path: "name",
		},
		category: {
			name: "Категория",
			path: "category",
		},
		price: {
			name: "Стоимость",
			path: "price",
		},
		image: {
			name: "Изображение",
			component: product => <a href={product.img}>Изображение</a>,
		},
		actions: {
			name: "Действия",
			component: product => <TableActions onDelete={deleteHandler} id={product.id} />,
		},
	};
	const deleteHandler = id => {
		deleteProduct(id)
		const newProducts = products.filter(product => product.id !== id)
		dispatch(setProducts(newProducts))
		dispatch(showAlert({type: "info", text: "Товар успешно удален!"}))
	}
	
	return <Table data={products} onSort={onSort} columns={columns} />;
};

export default ProductsTable;
