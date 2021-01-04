import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from '../Products/styles';
import Carousel from 'react-bootstrap/Carousel';

const Home = ({ }) => {
    const classes = useStyles();
    return(
        <main className= {classes.content}>
            <div className= {classes.toolbar}/>
            <Typography variant="body1" gutterBottom  align= "center">
                Digital Drawings are sent through email 3-4 weeks after purchase
            </Typography>
            <Typography variant="body2" gutterBottom  align="center">
                All prices are in CAD 
            </Typography>

            

        </main>
    )
}

export default Home;