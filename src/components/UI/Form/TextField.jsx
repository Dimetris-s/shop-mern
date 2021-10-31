import {
	FormControl,
	FormHelperText,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@material-ui/core";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const TextField = ({ name, label, value, onChange, type, placeholder, error, outlined, multiline, rows, size, registerPassword }) => {
	const [showPassword, setShowPassword] = useState(false);
	const changeHandler = ({ target }) => {
		onChange({ value: target.value, name: target.name });
	};
	const toggleShowPassword = () => {
		setShowPassword(prevState => !prevState);
	};
	const getAdornments = () => {
		return (type === "password" && !registerPassword) ? (
			<InputAdornment position="end">
				<IconButton onClick={toggleShowPassword}>
					{showPassword ? <VisibilityOff /> : <Visibility />}
				</IconButton>
			</InputAdornment>
		) : null;
	};

	const inputProps = {
		id: name,
		name,
		value,
		placeholder,
		type: showPassword ? "text" : type,
		onChange: changeHandler,
		endAdornment: getAdornments(),
		multiline,
		rows,
		label,
	};

	return (
		<FormControl
			label={label}
			error={!!error}
			sx={{ mb: 3, width: "100%", ":last-of-type": { mb: 0 } }}
			color="primary"
			size={size}
		>
			<InputLabel htmlFor={name}>{label}</InputLabel>
			{outlined ? <OutlinedInput {...inputProps} /> : <Input {...inputProps} />}

			{error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
		</FormControl>
	);
};

TextField.defaultProps = {
	type: "text",
	size: "medium"
};

export default TextField;
