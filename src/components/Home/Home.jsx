import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Paper } from '@material-ui/core';
import useStyles from '../Products/styles';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/logo.png';
import images from './images';

const Home = ({ }) => {


    const classes = useStyles();
    return(
        <main className= {classes.content}>
            <div className= {classes.toolbar}/>
            

            <Paper className= {classes.paper}>
                <Typography variant="h4" gutterBottom  align="center">
                    Welcome to the eyeA Store 
                </Typography>
                <Typography variant="h1" gutterBottom  align="center">
                <img src={logo} align="center" alt="logo" height="195px"  />
                </Typography>
                <Typography variant="subtitle1" gutterBottom  align="center">
                We make personalized digital drawings! We offer a large selection of options, from holiday cards to custom portraits!
                </Typography>
                <br /><br />
            </Paper>

            <br /><br />

            
            <Grid container justify = "center" spacing={4}>
                    {images.map(({id, src, title, description}) => (
                        <Grid item key = {id} xs={12} sm={6} lg={3}>
                            <Card className= {classes.root} gutterBottom >
                            <Typography align="center"> <img key={id} src={src} title={title} alt={description} height="300px" /> </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            
                <br /><br />


            <Typography variant="subtitle2" gutterBottom  align="center">
                "Creativity is contagious, pass it on" - Albert Einstein
            </Typography>
            
            

        </main>
    )
}

export default Home;