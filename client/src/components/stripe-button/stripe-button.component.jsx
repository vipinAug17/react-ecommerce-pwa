import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { clearCart } from "../../redux/cart/cart.actions";

import "./stripe-botton.styles.scss";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const history = useHistory();
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
        paymentSuccess();
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  const paymentSuccess = () => {
    history.push("/SuccessOrder");
    clearCart();
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

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
