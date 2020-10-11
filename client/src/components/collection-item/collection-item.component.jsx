import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import ItemNamePrice from "../item-name-price/item-name-price.component";

import "./collection-item.styles.scss";

import { ReactComponent as Favorite } from "../../assets/favorite.svg";

const CollectionItem = ({ item, addItem, history, linkUrl, match }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
    <button onClick={history.goBack}>go back</button>
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
      <button className="fav">
        <Favorite />
      </button>
      {/*
        <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
        </CustomButton>
      */}
      <ItemNamePrice name={name} price={price} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
