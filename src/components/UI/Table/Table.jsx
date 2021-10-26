import { Paper, TableContainer, Table as MUITable } from "@material-ui/core";
import React from "react";
import { TableBody, TableHeader } from ".";

const Table = ({ data, columns, children }) => {
	return (
		<TableContainer component={Paper}>
			<MUITable size="small">
				{children || (
					<>
						<TableHeader columns={columns} />
						<TableBody data={data} columns={columns} />
					</>
				)}
			</MUITable>
		</TableContainer>
	);
};

export default Table;
