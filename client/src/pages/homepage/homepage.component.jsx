import React from "react";

import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homePageContainer pg-Menu">
    <Directory />
    <MobileMenu />
  </div>
);

export default HomePage;
