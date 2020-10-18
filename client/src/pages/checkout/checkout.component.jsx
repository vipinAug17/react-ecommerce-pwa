import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import EmptyPage from "../../components/empty-page/empty-page.component";
import HeaderPage from "../../components/header-page/header-page.component";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total, currentUser }) => {
  const history = useHistory();

  return (
    <div className="checkoutPageContainer pg-space">
      <HeaderPage title="my bag" menuHide cartHide>
        {cartItems.length ? (
          <Fragment>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="warningContainer">
              <span>
                *Please use the following test credit card for payments*
              </span>
              <span>card no: 4242 4242 4242 4242</span>
              <span>Exp: 12/20</span>
              <span>CVV: 123</span>
            </div>
            <div className="totalContainer">
              <strong>Total: &#8377;{total}</strong>
              {currentUser ? (
                <StripeCheckoutButton price={total} />
              ) : (
                <button
                  className="btn-stripe"
                  onClick={() => history.push("/signin")}
                >
                  confirm order
                </button>
              )}
            </div>
          </Fragment>
        ) : (
          <EmptyPage
            icon={<ShoppingCart />}
            heading="Your bag is empty"
            paragraph="There is nothing in your bag. Let's add some items."
          />
        )}
      </HeaderPage>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
