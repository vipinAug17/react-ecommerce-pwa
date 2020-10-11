import React from "react";

import "./item-name-price.styles.scss";

const ItemNamePrice = ({ name, price }) => {
  return (
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="brandname">brand name</span>
      <div className="price">
        <span className="newprice">&#8377;{price}</span>
        <span className="oldprice">&#8377;200</span>
        <span className="discount">50% off</span>
      </div>
    </div>
  );
};

export default ItemNamePrice;
