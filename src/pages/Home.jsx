import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupList from "../components/GroupList";
import ProductList from "../components/ProductsList";
import { resetSelectedCategory, setCategory } from "../store/actions";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
}));

const Home = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState()
    const products = useSelector((state) => state.products.products);
    const categories = useSelector((state) => state.products.categories);
    const selectedCategory = useSelector((state) => state.products.selectedCategory);

    const classes = useStyles();

    const onSearch = (event) => {
        dispatch(resetSelectedCategory())
        setSearchValue(event.target.value)
        
    };
    const onItemChange = (item) => {
        setSearchValue('')
        dispatch(setCategory(item));
    };
    

    const filteredProducts = selectedCategory
        ? products.filter(
              (product) => product.category === selectedCategory.name
          )
        : products;
    const searchedProdutcts = searchValue ? products.filter(product => product.name.match(searchValue)) : filteredProducts
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
                    <div>
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
                            onClick={() => dispatch(resetSelectedCategory())}
                            >
                            Сбросить
                        </Button>
                    </div>
                </Grid>
                <Grid item md={10} sm={9}>
                    <Box
                        mb={"1rem"}
                        sx={{ background: "#ccc", height: "30px" }}>
                        Фильтрация
                    </Box>
                    <ProductList products={searchedProdutcts} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
