import React from "react";

import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import HeaderPage from "../../components/header-page/header-page.component";
import EmptyPage from "../../components/empty-page/empty-page.component";

import { ReactComponent as Search } from "../../assets/search.svg";

import "./wishlist.styles.scss";

const Wishlist = () => {
  return (
    <div className="wishlist-page pg-space-Menu">
      <HeaderPage title="whish list">
        <EmptyPage
          icon={<Search />}
          heading="Got your eyes on something?"
          paragraph="Add it to wishlist till you decide you've just got to have it"
        />
      </HeaderPage>
      <MobileMenu />
    </div>
  );
};

export default Wishlist;
