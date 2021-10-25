import { TableCell, TableRow, TableBody as MUITableBody } from "@material-ui/core";
import React from "react";

const TableBody = ({ columns, data }) => {
    const renderContent = (item, column) => {
        if(columns[column].component) {
            const component = columns[column].component
            if(typeof component === "function") {
                return component(item)
            } else {
                return component
            }
        }
        return item[columns[column].path]
    }

    return (
        <MUITableBody>
            {data.map(item => (
                <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {Object.keys(columns).map(column => (
                        <TableCell key={column} align="center">{renderContent(item, column)}</TableCell>
                    ))}
                </TableRow>
            ))}
        </MUITableBody>
    )
};

export default TableBody;
