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
	const {data} = await instance.get(`/products/${id}`)
	return data
}