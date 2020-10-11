import React from "react";

import MobileHeader from "../../components/mobile-header/mobile-header.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";

import "./wishlist.styles.scss";

const Wishlist = () => {
  return (
    <div className="wishlist-page">
      <MobileHeader />
      wishlist page...
      <MobileMenu />
    </div>
  );
};

export default Wishlist;
