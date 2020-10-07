import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, history, linkUrl, match }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="clickable"
        onClick={() =>
          history.push({
            pathname: `/product/${name}`,
            state: item,
          })
        }
      >
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
      {/*
        <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
        </CustomButton>
      */}
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
