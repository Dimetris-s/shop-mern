import { IconButton, Tooltip } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React from "react";

const TableActions = ({ id }) => {
    const onEdit = id => {
        console.log('edit ' + id);
    }
    const onDelete = id => {
        console.log('delete ' + id);
    }
	return (
		<>
			<Tooltip title="Редактировать">
				<IconButton onClick={() => onEdit(id)} color="primary">
					<Edit />
				</IconButton>
			</Tooltip>
			<Tooltip title="Удалить">
				<IconButton onClick={() => onDelete(id)} color="error">
					<Delete />
				</IconButton>
			</Tooltip>
		</>
	);
};

export default TableActions;
