import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { openModal, setProducts, showAlert } from "../../../store/actions";
import { deleteProduct } from "../../../utils/axios";
import { DASHBOARD_ROUTE } from "../../../utils/consts";
import Category from "../../UI/Category";
import Table, { TableActions } from "../../UI/Table";

const ProductsTable = ({ products, onSort }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const columns = {
		name: {
			name: "Наименование",
			path: "name",
		},
		category: {
			name: "Категория",
			component: product => <Category id={product.category_id} />,
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
			component: product => <TableActions onEdit={editHandler} onDelete={deleteHandler} id={product.id} />,
		},
	};
	const deleteHandler = id => {
		deleteProduct(id);
		const newProducts = products.filter(product => product.id !== id);
		dispatch(setProducts(newProducts));
		dispatch(showAlert({ type: "info", text: "Товар успешно удален!" }));
	};
	const editHandler = id => {
		history.push(DASHBOARD_ROUTE + "/edit/" + id);
		dispatch(openModal("editModal"));
	};

	return <Table data={products} onSort={onSort} columns={columns} />;
};

export default ProductsTable;
