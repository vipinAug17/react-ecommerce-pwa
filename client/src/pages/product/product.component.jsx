import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import MobileHeader from "../../components/mobile-header/mobile-header.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import ItemNamePrice from "../../components/item-name-price/item-name-price.component";
import CollectionItem from "../../components/collection-item/collection-item.component";
import HeaderPage from "../../components/header-page/header-page.component";

import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import { ReactComponent as ShopBagIcon } from "../../assets/shop-bag.svg";
import { ReactComponent as ShareIcon } from "../../assets/share.svg";

import "./product.styles.scss";

const ProductPage = ({ location, addItem }) => {
  // console.log("sections product ", sections)

  const item = location.state;
  const { imageUrl, name, price } = item;

  return (
    <div className="product-page">
      <HeaderPage>
        <div className="productImg-preview">
          <img src={imageUrl} alt="product_image" />
          <img
            src="https://i.ibb.co/4W2DGKm/floral-blouse.png"
            alt="dummyImg"
          />
          <img src="https://i.ibb.co/KV18Ysr/floral-skirt.png" alt="dummyImg" />
          <img
            src="https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"
            alt="dummyImg"
          />
        </div>
        <div className="page-overlay">
          <ItemNamePrice name={name} price={price} />
          <div className="productInfo-wrap">
            <div className="_row product-info">
              Short dress in soft cotton jersey with decorative buttons down the
              front and a wide, frill-trimmed square neckline with concealed
              elastication. Elasticated seam under the bust and short puff
              sleeves with a small frill trim.
            </div>
            <div className="_row product-detail">
              <strong>Product Details</strong>
              <ul className="info">
                <li>100% Cotton</li>
                <li>Machine wash</li>
                <li>Mid Rise</li>
                <li>Country Of Origin: India</li>
                <li>Manufactured By: address</li>
              </ul>
            </div>

            <div className="cta-btns">
              <button className="share">
                <ShareIcon />
              </button>
              <button className="fav">
                <HeartIcon />
              </button>
              <CustomButton onClick={() => addItem(item)} inverted>
                <ShopBagIcon />
                Add to cart
              </CustomButton>
            </div>
            <div className="_row return-policy">
              Easy 30 days return and exchange. Return Policies may vary based
              on products and promotions. For full details on our Returns
              Policies, please
            </div>
            <div className="similar">
              <strong>You can also like this</strong>
              <div className="row">
                <CollectionItem item={item} />
                <CollectionItem item={item} />
                <CollectionItem item={item} />
                <CollectionItem item={item} />
                <CollectionItem item={item} />
              </div>
            </div>
          </div>
        </div>
      </HeaderPage>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductPage);
