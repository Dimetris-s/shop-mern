import { CircularProgress } from "@material-ui/core";
import React from "react";

const Loader = () => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CircularProgress />
		</div>
	);
};

export default Loader;
