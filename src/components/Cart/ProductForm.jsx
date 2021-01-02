import React, {useState} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../CheckoutForm/CustomTextField';
import { commerce } from '../../lib/commerce';

const ProductForm = ({item}) => {
    const fetchExtraFields = async(tokenId) => {
        const response = await commerce.services.extraFields(tokenId);
    }


    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Product Details</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='smth' label= {item.name}/>
                        
                        
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default ProductForm

// {products.map((product) => (
//     <Grid item key = {product.id} xs={12} sm={6} lg={3}>
//     <div>hi</div>
//         {/* <Product product= { product } onAddToCart={onAddToCart}/> */}
//     </Grid>

//     ))}