import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/actions";
import { getProductById } from "../../../utils/axios";
import Loader from "../../UI/Loader";
import EditProductForm from "../forms/EditProductForm";

const useStyles = makeStyles(theme => ({
	root: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		opacity: ({ isOpen }) => (isOpen ? 1 : 0),
		pointerEvents: ({ isOpen }) => (isOpen ? "all" : "none"),
		zIndex: 100,
		overflowY: "auto",
		transition: "opacity 0.3s ease",
	},
	backdrop: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.582)",
		padding: "3rem",
	},
	content: {
		backgroundColor: "white",
		borderRadius: 15,
		padding: theme.spacing(3),
		minWidth: "60%",
		opacity: ({ isOpen }) => (isOpen ? 1 : 0),
		transform: ({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-50%)"),
		transition: "all 0.3s ease 0.3s",
	},
}));

const EditProductModal = ({ id }) => {
	const isOpen = useSelector(state => state.modal.editModal);
	const classes = useStyles({ isOpen });
	const dispatch = useDispatch();
	const [product, setProduct] = useState();
	useEffect(() => {
		setProduct();
		getProductById(id).then(data => setProduct(data));
	}, [id]);
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "initial";
	}, [isOpen]);

	const handleClose = event => {
		if (event.target.classList.contains(classes.backdrop)) {
			dispatch(closeModal("editModal"));
		}
	};

    if(!isOpen) return null

	return (
		<div onClick={handleClose} className={classes.root}>
			<div className={classes.backdrop}>
				<div className={classes.content}>
					<Typography variant="h4" gutterBottom>
						Редактирование товара
					</Typography>
					{product ? <EditProductForm product={product} /> : <Loader/> }
				</div>
			</div>
		</div>
	);
};

export default EditProductModal;
