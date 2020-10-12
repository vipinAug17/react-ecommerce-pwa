import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { ReactComponent as CheveronLeft } from "../../assets/chevron-left.svg";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  const history = useHistory();

  return (
    <div className="checkoutPageContainer">
      <button className="back" onClick={() => history.goBack()}>
        <CheveronLeft />
      </button>
      <div className="_inner">
        <strong className="title">My bag</strong>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="warningContainer">
          <span>*Please use the following test credit card for payments*</span>
          <span>card no: 4242 4242 4242 4242</span>
          <span>Exp: 12/20</span>
          <span>CVV: 123</span>
        </div>
        <div className="totalContainer">
          <strong>Total: &#8377;{total}</strong>
          <StripeCheckoutButton price={total} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
