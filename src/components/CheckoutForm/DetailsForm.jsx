import React, {useEffect, useState}  from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';


const DetailsForm = ({ checkoutToken, test }) => {

  const methods = useForm();
 

  const ExtraField = ({ extrafield }) => {
      return (
        <div>
        {extrafield.name == "Image" ? 
          <div>
            Upload Image for Customs 
            <br />
            
            {/* <FileBase type= "file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/> */}
            <FileBase 
              type= "file" 
              multiple={false}

            />
            
          </div>
        :
        <div> 
            <FormInput 
            
            required = {extrafield.required}
            name = {extrafield.name}
            label={extrafield.name} 

            />
        </div>
        }
        </div>
      )
  }
  const Products = ({ product }) => {
    return (
      <div>
      <br />
      <Typography variant="subtitle1" gutterBottom >Details for Item: {product.name}</Typography>
        {product.extrafields.map((extrafield) => (
            <ExtraField extrafield={ extrafield } />
        
            ))}
      </div>
      
    )
}

    return (
<>
    <Typography variant="h6" gutterBottom align="center">Customer Details</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data}))}>
          <Grid >
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="email" label="Email" />
 
            <br />
            
            <Typography variant="h6" gutterBottom align="center">Order Details</Typography>
            
                {checkoutToken.products.map((product) => (
                        <Grid item key = {checkoutToken.id} >
                          <Products product={ product } />
                        </Grid>
                         ))}
             
          </Grid> 
          <br />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>

    )
}

export default DetailsForm
