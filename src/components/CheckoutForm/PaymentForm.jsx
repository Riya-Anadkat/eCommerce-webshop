import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const REACT_APP_STRIPE_PUBLIC_KEY = 'pk_test_51I5MMCBK2yPPL4ESKwOz1EOhmM4rVnzyevWWZLjhPoDCNaWJaJyTshU7yEcgg6h7bkZYEwOMRH7r8DsPKYPD4um6007ZpKKF8o';
const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, backStep, customerData, onCaptureCheckout }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {
      var orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: customerData.firstName, lastname: customerData.lastName, email: customerData.email },
        shipping: { name: 'International', street: customerData.address1, town_city: customerData.city, county_state: customerData.shippingSubdivision, postal_zip_code: customerData.zip, country: customerData.shippingCountry },
        fulfillment: { shipping_method: customerData.shippingOption },
        // extrafields : [
        //   {
        //     // id: "extr_ELwjVp9zg2Aw3A",
        //     // name: "Name of Card Reciever",
        //     // value: "HELLO",
        //     // required: false,
        //   },
        // ],
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      
      var extrafieldsArray = [];

      {checkoutToken.extrafields.map((extrafield) => (
        
        
        extrafieldsArray.push({id: extrafield.id, name: extrafield.name, value: "customerData.extrafield.id", required: false})
        
          
      ))}
      orderData["extrafields"] = extrafieldsArray;


      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};
export default PaymentForm;