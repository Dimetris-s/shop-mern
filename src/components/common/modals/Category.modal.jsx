import { Button, Typography } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, fetchCategories, setCategories, showAlert } from "../../../store/actions";
import { createCategory, deleteCategory } from "../../../utils/axios";
import TextField from "../../UI/Form/TextField";
import CategoryList from "../CategoryList";

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
		width: "60%",
		opacity: ({ isOpen }) => (isOpen ? 1 : 0),
		transform: ({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-50%)"),
		transition: "all 0.3s ease 0.3s",
	},
	right: {
		display: "flex",
		alignItems: "center",
		columnGap: "2rem",
	},
	inputGroup: {
		display: "flex",
		alignItems: "center",
		columnGap: "1rem",
		flex: 1,
	},
}));

const CategoryModal = () => {
	const isOpen = useSelector(state => state.modal.categoryModal);
	const classes = useStyles({ isOpen });
	const dispatch = useDispatch();
	const categories = useSelector(state => state.products.categories);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "initial";
	}, [isOpen]);

	const handleClose = event => {
		if (event.target.classList.contains(classes.backdrop)) {
			dispatch(closeModal("categoryModal"));
		}
	};

	const deleteHandler = id => {
		deleteCategory(id);
		const newCategories = categories.filter(c => c.id !== id);
		dispatch(setCategories(newCategories));
		dispatch(showAlert({ type: "warning", text: "Категория удалена!" }));

	};
	const changeHandler = ({ value }) => {
		setInputValue(value);
	};
	const clickHandler = () => {
		if (categories.some(c => c.name.toLowerCase() === inputValue.trim().toLowerCase())) {
			setInputValue("");
			dispatch(showAlert({ type: "error", text: "Категория с таким названием уже существует!" }));
			return
		}
		createCategory(inputValue.trim()).then(category => dispatch(setCategories([...categories, category])));
		setInputValue("");
		dispatch(showAlert({ type: "info", text: "Категория добавлена!" }));
	};
	if (!isOpen) return null;

	return (
		<div onClick={handleClose} className={classes.root}>
			<div className={classes.backdrop}>
				<div className={classes.content}>
					<Typography variant="h4" gutterBottom>
						Категории
					</Typography>
					<div className={classes.right}>
						<div style={{ flex: 1 }}>
							{categories && <CategoryList categories={categories} onDelete={deleteHandler} />}
						</div>
						<div className={classes.inputGroup}>
							<TextField
								size="small"
								value={inputValue}
								onChange={changeHandler}
								name="category"
								label="Введите название категории"
								outlined
							/>
							<Button
								disabled={inputValue.trim().length === 0}
								onClick={clickHandler}
								endIcon={<Check />}
								size="large"
								variant="contained"
								color="primary"
							>
								Добавить
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryModal;
