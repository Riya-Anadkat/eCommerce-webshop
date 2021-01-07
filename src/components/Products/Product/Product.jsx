import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
//import classes from '*.module.css';
import useStyles from './styles';


const Product = ({ product, onAddToCart}) => {
    const classes = useStyles();
    

    return (
        <>
      
            <Card className= {classes.root}>
                <CardMedia className= {classes.media} image= {product.media.source} titles= {product.name}/>
                <CardContent>
                    <div className = {classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>

                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body1" color="textSecondary" />
                </CardContent>
                
            </Card>
            <Card >
                <CardActions disableSpacing className ={classes.cardActions}>
                        <IconButton aria-label= "Add to Cart" onClick={() => onAddToCart(product.id, 1)} >
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
            </Card>
        </>
           
    )
}

export default Product
