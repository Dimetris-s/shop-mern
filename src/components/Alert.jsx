import { Snackbar, Alert as MUIAlert } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "../store/actions";

const Alert = () => {
    const dispatch = useDispatch()
    const { isOpen, type, text } = useSelector((state) => state.alert);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(hideAlert())
      };
    return (
        <Snackbar open={isOpen} autoHideDuration={2500} anchorOrigin={{horizontal: 'center', vertical: 'bottom'}} onClose={handleClose}>
            <MUIAlert elevation={3}  onClose={handleClose} variant="filled" severity={type}>{text}</MUIAlert>
        </Snackbar>
    );
};

export default Alert;
