import React from "react";

import "./user-menu.styles.scss";

const UserMenu = ({ signOutStart }) => {
  return (
    <div className="user-menu">
      <div className="li">my profile</div>
      <div className="li">orders</div>
      <div className="li">wishList</div>
      <div className="li" onClick={signOutStart}>logout</div>
    </div>
  );
};

export default UserMenu;
