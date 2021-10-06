import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearSearch, resetSelectedCategory, setCategory } from "../store/actions";
import GroupList from "./GroupList";

const CategoryFilter = () => {
    const dispatch = useDispatch()
    const {categories, selectedCategory} = useSelector(state => state.products)

    const onItemChange = (item) => {
        dispatch(clearSearch())
        dispatch(setCategory(item));
    };
    console.log('render filter')
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Категории:
            </Typography>
            <GroupList
                items={categories}
                selectedItem={selectedCategory}
                onItemChange={onItemChange}
            />
            <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="contained"
                color="error"
                onClick={() => dispatch(resetSelectedCategory())}>
                Сбросить
            </Button>
        </>
    );
};

export default React.memo(CategoryFilter);
