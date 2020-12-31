import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles';
import DetailsForm from '../DetailsForm';
import PaymentForm from '../PaymentForm';

const steps = ['Customer Details','Payment']

const Checkout = ( {products} ) => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0
        ? <DetailsForm products={products} />
        : <PaymentForm products={products} />

    return (
        <>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h3" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
                
                
            </Paper>
        </main>
        </>
    )
}

export default Checkout
