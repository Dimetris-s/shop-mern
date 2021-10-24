import { Grid } from "@material-ui/core";
import React from "react";
import ProductCard from "./ProductCard";


const ProductList = ({ products, onAdd }) => {
    return (
        <Grid container spacing="12" style={{rowGap: '2rem'}} flexDirection="column">
           {products.map(product => (
               <Grid key={product.id} item>
                   <ProductCard onAdd={onAdd} product={product}/>
               </Grid>
           ))}
        </Grid>
    );
};

export default ProductList;
