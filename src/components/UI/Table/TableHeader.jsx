import { TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const TableHeader = ({ columns }) => {
	return (
		<TableHead>
			<TableRow>
				{Object.keys(columns).map(column => (
					<TableCell key={column} align="center">
						{columns[column].name}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
