import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as ShopIcon } from "../../assets/shop.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg"; 

import "./mobile-menu.styles.scss";

const MobileMenu = ({ currentUser }) => {
  return (
    <div className="mobile-menu">
      <NavLink exact activeClassName="active" className="item" to="/">
        <HomeIcon />
        <small>home</small>
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/checkout">
        <ShopIcon />
        <small>checkout</small>
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/wishlist">
        <HeartIcon />
        <small>favorites</small>
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        className="item"
        to={currentUser ? "/profile" : "/signin"}
      >
        <ProfileIcon />
        <small>Profile</small>
      </NavLink>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MobileMenu);
