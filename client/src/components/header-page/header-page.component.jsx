import React, { Children, Fragment } from "react";
import { useHistory } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";

import { ReactComponent as CheveronLeft } from "../../assets/chevron-left.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";

import "./header-page.styles.scss";

const HeaderPage = ({ title, children, menuHide, titleHide, cartHide }) => {
  const history = useHistory();
  return (
    <Fragment>
      <div className="page-header">
        <div className="left">
          <button className="back" onClick={() => history.goBack()}>
            <CheveronLeft />
          </button>
          {menuHide ? null : (
            <button className="menu">
              <Menu />
            </button>
          )}
        </div>
        <div className="middle">
          {titleHide ? null : <strong>title</strong>}
        </div>
        <div className="right">{cartHide ? null : <CartIcon mobileCart />}</div>
      </div>
      <div className="page-inner">
        {title ? <strong className="title">{title}</strong> : null}
        {children}
      </div>
    </Fragment>
  );
};

export default HeaderPage;
