import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount, mobileCart }) => {
  return (
    <div>
      {mobileCart ? (
        <Link className="cart-icon" to="/checkout">
          <ShoppingCart className="shopping-icon" />
          <span className="item-count">{itemCount}</span>
        </Link>
      ) : (
        <button className="cart-icon" onClick={toggleCartHidden}>
          <ShoppingCart className="shopping-icon" />
          <span className="item-count">{itemCount}</span>
        </button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
