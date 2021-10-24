import React from "react";
import { useParams } from "react-router";

const ProductPage = () => {
	const { id } = useParams();
	return <h1>Product page {id}</h1>;
};

export default ProductPage;
