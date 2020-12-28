import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//import classes from '*.module.css';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position= "fixed" className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="45px" className={classes.image} />
                            the eyeA store 
                    </Typography>
                    <div className={classes.grow} />
                    {/* button is only shown when the user is in on the homepage */}
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" fontSize="large" >
                            <Badge badgeContent={totalItems} color= "secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
