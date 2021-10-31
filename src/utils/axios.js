import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:3001",
});

export default instance;

export const getBasketByUserId = async id => {
	const { data } = await instance.get(`/baskets?user_id=${id}`);
	return data[0];
};

export const incrementBasketItem = async id => {
	const { data } = await instance.get(`/basket_items/${id}`);
	instance.put(`/basket_items/${id}`, { ...data, count: data.count + 1 });
};

export const decrementBasketItem = async id => {
	const { data } = await instance.get(`/basket_items/${id}`);
	if (data.count === 1) {
		deleteBasketItem(id);
	} else {
		instance.put(`/basket_items/${id}`, { ...data, count: data.count - 1 });
	}
};

export const deleteBasketItem = async id => {
	instance.delete(`/basket_items/${id}`);
};

export const addBasketItem = async item => {
	instance.post(`/basket_items/`, item);
};

export const getProductById = async id => {
	const { data } = await instance.get(`/products/${id}`);
	return data;
};

export const deleteProduct = async id => {
	instance.delete(`/products/${id}`);
};
export const deleteCategory = async id => {
	instance.delete(`/categories/${id}`);
};

export const createProduct = async data => {
	const product = {
		id: Math.random().toString(36).substr(2, 9),
		rate: 0,
		...data,
	};
	await instance.post(`/products/`, product);
	return product;
};

export const createCategory = async name => {
	const category = {
		id: Math.random().toString(36).substr(2, 9),
		name
	}
	await instance.post(`/categories/`, category);
	return category
}
export const getCategoryById = async id => {
	const { data } = await instance.get(`/categories/${id}`);
	return data;
};

export const editProduct = async (id, data) => {
	const product = await instance.get(`/products/${id}`)
	await instance.put(`/products/${id}`, {...product.data, ...data});
	const products = await instance.get(`/products`);
	return products.data;
};
