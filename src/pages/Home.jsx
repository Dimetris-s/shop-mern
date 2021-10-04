import { Container, Grid, TextField } from "@material-ui/core";
import { makeStyles} from "@material-ui/styles";
import { Box } from "@material-ui/system";
import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductsList";
import useInput from "../hooks/useInput";


const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
    },
}));




const Home = () => {
    const searchInput = useInput();
    const products = useSelector((state) => state.products.products);

    const onSearch = () => {};
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <TextField
                value={searchInput.value}
                onChange={onSearch}
                variant="outlined"
                size="small"
                margin="normal"
                label="Поиск"
                placeholder="Введите название товара..."
            />
            <Grid container spacing="12">
                <Grid item xs="3">
                    <Box
                        sx={{
                            height: "500px",
                            background: "#ccc",
                            width: "100%",
                        }}>
                        Категории
                    </Box>
                </Grid>
                <Grid item xs="9">
                    <Box
                        mb={"1rem"}
                        sx={{ background: "#ccc", height: "30px" }}>
                        Фильтрация
                    </Box>
                    <ProductList {...{ products }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
