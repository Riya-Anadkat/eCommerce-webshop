import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';



const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');

    const fetchValue = (searchValue) => {
       
    }

    useEffect(() => {
        fetchValue(searchValue);
    }, [searchValue]);

    const handleClick = () => {
        fetchValue(searchValue);
    }
    

    return(
        <main className= {classes.content}>
            <div className= {classes.toolbar}/>

            {/* <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button onClick={handleClick}>Search</button> */}

            <Typography variant="body1" gutterBottom  align= "center">
                Digital Drawings are sent through email 3-4 weeks after purchase
            </Typography>
            <Typography variant="body2" gutterBottom  align="center">
                All prices are in CAD 
            </Typography>
            <br /><br />
           
            <Grid container justify = "center" spacing={4}>
                {products.map((product) => (
                    <Grid item key = {product.id} xs={12} sm={6} lg={3}>
                        <Product product= { product } onAddToCart={onAddToCart}/>
                    </Grid>
                /* loop through array and return each product by passing each product*/
                ))}

            </Grid>

        </main>
    )
}

export default Products;