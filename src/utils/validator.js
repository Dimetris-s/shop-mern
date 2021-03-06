export function validator(data, config) {
	const errors = {};

	function validate(validateMethod, data, config) {
		let statusValidate;

		switch (validateMethod) {
			case "isRequired":
				if (typeof data === "boolean") {
					statusValidate = data === false;
				} else {
					statusValidate = String(data).trim() === "";
				}

				break;
			case "isPositive":
				statusValidate = +data <= 0;
				break;
			case "isLink":
				const linkRegExp =
					/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
				statusValidate = !linkRegExp.test(data);
				break;
			case "maxLength":
				statusValidate = data.length > config.value;
				break;
			case "minLength":
				statusValidate = data.length < config.value;
				break;
			case "isNumber":
				const numRegExp = /\d/g;
				statusValidate = !numRegExp.test(data);
				break;
			case "isCapitalize":
				const capRegExp = /[A-Z]/g;
				statusValidate = !capRegExp.test(data);
				break;
			case "isLogin":
				const loginRegExp = /^[A-Za-z\d\-_]+$/g;
				statusValidate = !loginRegExp.test(data);
				break;
			case "noSpace":
				statusValidate = /\s/g.test(data)
				break
			default:
				break;
		}

		if (statusValidate) return config.message;
	}

	for (const fieldName in data) {
		for (const validateMethod in config[fieldName]) {
			const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
			if (error && !errors[fieldName]) errors[fieldName] = error;
		}
	}

	return errors;
}
