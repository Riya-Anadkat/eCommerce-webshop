import React, {useState}  from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';
import { commerce } from '../../lib/commerce';

const DetailsForm = ({products}) => {

    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Customer Details</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label= "First Name"/>
                        <FormInput required name='lastName' label= "Last Name"/>
                        <FormInput required name='email' label= "Email"/>

                    </Grid>

                    
                    
                </form>
            </FormProvider>
        </>
    )
}

export default DetailsForm


