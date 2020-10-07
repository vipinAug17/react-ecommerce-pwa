import React from "react"; 
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions"; 

import CustomButton from "../../components/custom-button/custom-button.component";

import "./product.styles.scss";

const ProductPage = ({ location, addItem }) => {
  // console.log("sections product ", sections)
  
  const item = location.state;
  const { imageUrl, name, price } = item;
  
  return (
    <div className="product-page">
      <img src={imageUrl} alt="product_image" />
      <strong>{name}</strong>
      <span>{price}</span>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductPage);