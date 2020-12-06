import React from 'react';
import Grid from '@material-ui/core';
import ProductItem from './Product/ProductItem';


const productsArray = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running Shoes',
        price: '£5'
    },
    {
        id: 2,
        name: 'Macbook',
        description: 'Apple Macbook',
        price: '£10'
    },
]

const Products = () => {
    return (
        <Grid container justify='center' spacing={4}>
            {productsArray.map(product => {
                const { id } = product;
                return (
                    <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                        <ProductItem product={...product} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Products
