import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

const SelectField = ({ name, label, options, defaultOption, onChange, value, error }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	const optionsArray = Object.keys(options).map(optionName => ({
		name: options[optionName].name,
		value: options[optionName].id,
	}));
	return (
		<FormControl sx={{ mb: 3, width: "100%" }} error={error}>
			<InputLabel id={name}>{label}</InputLabel>
			<Select labelId={name} id={name} value={value} name={name} label={label} onChange={handleChange}>
				<MenuItem disabled value="">
					<em>{defaultOption}</em>
				</MenuItem>
				{optionsArray && optionsArray.map(option => <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>)}
			</Select>
			{error && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	);
};

export default SelectField;
