import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { orderBy } from "lodash";
import ProductList from "../components/ProductsList";
import Sorting from "../components/Sorting";
import Search from "../components/Search";
import CategoryFilter from "../components/CategoryFilter";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
}));

const Home = () => {
    
    const products = useSelector((state) => state.products.products);
    const selectedCategory = useSelector(
        (state) => state.products.selectedCategory
    );
    const sortBy = useSelector((state) => state.products.sortBy);
    const searchValue = useSelector((state) => state.products.searchValue);

    const classes = useStyles();

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
            <Search />
            <Grid container spacing="16">
                <Grid item md={2} sm={3}>
                    <CategoryFilter />
                </Grid>
                <Grid item md={10} sm={9}>
                    <Sorting />
                    <ProductList products={searchedProdutcts} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
