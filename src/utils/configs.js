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

export const loginFormConfig = {
	login: {
		isRequired: {message: "Поле не может быть пустым"}
	},
	password: {
		isRequired: {message: "Пароль не может быть пустым"}
	}
}

export const registerFormConfig = {
	login: {
		isRequired: {message: "Поле не может быть пустым"},
		minLength: {message: "Логин должен содержать как минимум 3 символа", value: 3},
		maxLength: { message: "Логин может содержать максимум 20 символов", value: 20 },
		isLogin: {message: "Логин может содержать только буквы, цифры и знаки '_', '-'"}
	},
	password: {
		isRequired: {message: "Пароль не может быть пустым"},
		minLength: {message: "Пароль должен содержать как минимум 6 символов", value: 6},
		noSpace: {message: "Пароль не должен содержать пробелов"},
		isNumber: {message: "Пароль должен содержать хотя бы одну цифру"},
		isCapitalize: {message: "Пароль должен содержать хотя бы одну заглавную букву"}
	},
	passwordRepeat: {message: "Пароли не совпадают"}
}