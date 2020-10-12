import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import "./stripe-botton.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPZkAJqnI3tqvFpJygndLVSBtLAWDxerycUU29mHE74OQtrjfSGi983FxrHrtghe1k0M6TVQenKePfqWaJECgSJ00Fr2uEu3A";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ecom app"
      ComponentClass="div"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <button className="btn-stripe">confirm order</button>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
