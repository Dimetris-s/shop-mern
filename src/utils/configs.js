export const productFormConfig = {
	name: {
		isRequired: { message: "Поле не может быть пустым" },
		maxLength: { message: "Название не должно превышать 40 символов", value: 40 },
	},
	price: {
		isRequired: { message: "Необходимо указать цену товара" },
		isPositive: { message: "Цена должна быть больше 0" },
	},
	category_id: {
		isRequired: { message: "Необходимо выбрать категорию" },
	},
	img: {
		isRequired: { message: "Поле не может быть пустым" },
		isLink: { message: "Необходимо передать корректную ссылку на изображение" },
	},
	description: {
		isRequired: { message: "Поле не может быть пустым" },
	},
};
