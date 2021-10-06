import {
    Button,
    Container,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBy } from "lodash";
import GroupList from "../components/GroupList";
import ProductList from "../components/ProductsList";
import {
    resetSelectedCategory,
    setCategory,
    setSortType,
    setSortOrder,
} from "../store/actions";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
    sorting: {
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "end",
        columnGap: theme.spacing(2)
    },
}));

const Home = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState();
    const products = useSelector((state) => state.products.products);
    const categories = useSelector((state) => state.products.categories);
    const selectedCategory = useSelector(
        (state) => state.products.selectedCategory
    );
    const sortBy = useSelector((state) => state.products.sortBy);

    const classes = useStyles();

    const onSearch = (event) => {
        dispatch(resetSelectedCategory());
        setSearchValue(event.target.value);
    };
    const onItemChange = (item) => {
        setSearchValue("");
        dispatch(setCategory(item));
    };

    const sortTypeHandler = (event) => {
        dispatch(setSortType(event.target.value));
    };
    const sortOrderHandler = (event) => {
        dispatch(setSortOrder(event.target.value));
    };
    const sortedProducts = orderBy(products, [sortBy.type], [sortBy.order]);
    const filteredProducts = selectedCategory
        ? sortedProducts.filter(
              (product) => product.category === selectedCategory.name
          )
        : sortedProducts;
    const searchedProdutcts = searchValue
        ? sortedProducts.filter((product) =>
              product.name.toLowerCase().match(searchValue.toLowerCase())
          )
        : filteredProducts;
    return (
        <Container className={classes.container}>
            <TextField
                value={searchValue}
                onChange={onSearch}
                variant="outlined"
                size="small"
                margin="normal"
                label="Поиск"
                placeholder="Введите название товара..."
                fullWidth
            />
            <Grid container spacing="16">
                <Grid item md={2} sm={3}>
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
                </Grid>
                <Grid item md={10} sm={9}>
                    <div className={classes.sorting}>
                        <TextField
                            select
                            label="sort"
                            value={sortBy.type}
                            onChange={sortTypeHandler}
                            size="small">
                            <MenuItem value="name">Название</MenuItem>
                            <MenuItem value="price">Цена</MenuItem>
                            <MenuItem value="rate">Оценка</MenuItem>
                        </TextField>

                        <TextField
                            select
                            label="Сортировать по:"
                            value={sortBy.order}
                            onChange={sortOrderHandler}
                            size="small">
                            <MenuItem value="asc">Возрастанию</MenuItem>
                            <MenuItem value="desc">Убыванию</MenuItem>
                        </TextField>
                    </div>
                    <ProductList products={searchedProdutcts} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
