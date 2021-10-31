import {  Button } from "@material-ui/core";
import { AddAPhoto } from "@material-ui/icons";
import { Box } from "@material-ui/system";
import React from "react";

const UploadFile = ({ name, value, onChange, label }) => {
    const changeHandler = (event) => {
        console.log(event);
    }
	return (
		<Box sx={{mb:4}}>
			<label htmlFor={name}>
				<input style={{display: "none"}} onChange={changeHandler} accept="image/*" id={name} type="file" />
				<Button size="large" startIcon={<AddAPhoto/>} color="primary" variant="contained" component="span">
                    {label}
				</Button>
			</label>
		</Box>
	);
};

export default UploadFile;
