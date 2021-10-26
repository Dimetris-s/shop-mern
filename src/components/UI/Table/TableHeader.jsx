import { TableCell, TableHead, TableRow, TableSortLabel } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortOrder, setSortType } from "../../../store/actions";

const TableHeader = ({ columns }) => {
	const dispatch = useDispatch();
	const { type: sortType, order } = useSelector(state => state.products.sortBy);
	const onSort = type => {
		if (type === sortType) {
			dispatch(setSortOrder(order === "asc" ? "desc" : "asc"));
		} else {
			dispatch(setSortOrder("asc"));
		}
		dispatch(setSortType(type));
	};
	return (
		<TableHead>
			<TableRow>
				{Object.keys(columns).map(column => (
					<TableCell key={column} align="left">
						{columns[column].path ? (
							<TableSortLabel
								onClick={() => onSort(columns[column].path)}
								active={sortType === columns[column].path}
								direction={order}
							>
								{columns[column].name}
							</TableSortLabel>
						) : (
							<>{columns[column].name}</>
						)}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
