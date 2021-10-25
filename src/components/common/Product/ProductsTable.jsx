import React from "react";
import Table, { TableActions } from "../../UI/Table";

const ProductsTable = ({products}) => {
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
            component: product => <a href={product.img}>Изображение</a>
		},
		actions: {
			name: "Действия",
			component: product => <TableActions id={product.id} />,
		},
	};
	return <Table data={products} columns={columns} />;
};

export default ProductsTable;
