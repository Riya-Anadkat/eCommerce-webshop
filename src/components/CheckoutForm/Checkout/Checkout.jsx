// import React, { useState, useEffect } from 'react';
// import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
// import useStyles from './styles';
// import DetailsForm from '../DetailsForm';
// import PaymentForm from '../PaymentForm';
// import { commerce } from '../../../lib/commerce';

// const steps = ['Customer Details','Payment']

// const Checkout = ( {cart} ) => {
//     const [activeStep, setActiveStep] = useState(0);
//     const classes = useStyles();

//     const Confirmation = () => (
//         <div>
//             Confirmation
//         </div>
//     )

//     const [checkoutToken, setCheckoutToken] = useState(null);

//     useEffect(() => {
//       const generateToken = async() => {
//         try {
//           const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
//           console.log(token);

//           setCheckoutToken(token);
          
//         } catch (error) {
          
//         }
//       }
//       generateToken();
//     }, [cart]);

//     const Form = () => activeStep === 0
//         ? <DetailsForm checkoutToken={checkoutToken} />
//         : <PaymentForm />

//     return (
//         <>
//         <div className={classes.toolbar} />
//         <main className={classes.layout}>
//             <Paper className={classes.paper}>
//                 <Typography variant="h3" align="center">Checkout</Typography>
//                 <Stepper activeStep={activeStep} className={classes.stepper}>
//                     {steps.map((step) => (
//                         <Step key={step}>
//                             <StepLabel>{step}</StepLabel>
//                         </Step>
//                     ))}
//                 </Stepper>
//                 {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                
                
//             </Paper>
//         </main>
//         </>
//     )
// }

// export default Checkout


import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../DetailsForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          console.log(token);
          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));
  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    );
  }
  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />);
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};
export default Checkout;