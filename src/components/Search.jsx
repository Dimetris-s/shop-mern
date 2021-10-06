import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSelectedCategory, setSearchValue } from "../store/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
}));
const Search = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {searchValue, selectedCategory} = useSelector((state) => state.products);

    const onSearch = (event) => {
        if(selectedCategory) {
            dispatch(resetSelectedCategory());
        }
        dispatch(setSearchValue(event.target.value));
    };
    return (
        <div className={classes.root}>
            <TextField
                value={searchValue}
                onChange={onSearch}
                variant="outlined"
                size="small"
                label="Поиск"
                placeholder="Введите название товара..."
                fullWidth
            />
        </div>
    );
};

export default React.memo(Search);
