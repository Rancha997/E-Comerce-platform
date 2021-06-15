import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J2XbtCRHevKpZHFdw8yuMQegRZXkphaX8MJW8IPbJ2xgMoKIpTIJmy3TgjelJ7BwUa4jxbU47Ep8jlBe4Mm3W0Y00fAy5GBMA';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
