import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { ReactComponent as MinusIcon } from "../../assets/minus.svg";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="row">
        <div
          className="img"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="detail">
          <div className="col">
            <span className="name">{name}</span>
          </div>
          <div className="col">
            <button className="arrow" onClick={() => removeItem(cartItem)}>
              <MinusIcon />
            </button>
            <span className="value">{quantity}</span>
            <button className="arrow" onClick={() => addItem(cartItem)}>
              <AddIcon />
            </button>
          </div>
          <div className="col">
            <span className="price">&#8377;{price}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <button className="remove-button" onClick={() => clearItem(cartItem)}>
          remove
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
