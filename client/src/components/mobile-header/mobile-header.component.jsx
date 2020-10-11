import React from "react";
import { useHistory } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";

import { ReactComponent as CheveronLeft } from "../../assets/chevron-left.svg";

import "./mobile-header.styles.scss";

const MobileHeader = () => {
  const history = useHistory();

  return (
    <div className="mobile-header">
      <button className="back" onClick={() => history.goBack()}>
        <CheveronLeft />
      </button>
      <div className="title">
        <strong>page title</strong>
      </div>
      <div className="options">
      <CartIcon />
      </div>
    </div>
  );
};

export default MobileHeader;
