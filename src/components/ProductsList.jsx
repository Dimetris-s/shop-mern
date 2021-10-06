import { Grid } from "@material-ui/core";
import React from "react";
import ProductCard from "./ProductCard";


const ProductList = ({ products }) => {
    return (
        <Grid container spacing="12" flexDirection="column">
           {products.map(product => (
               <Grid key={product.id} item>
                   <ProductCard product={product}/>
               </Grid>
           ))}
        </Grid>
    );
};

export default ProductList;
