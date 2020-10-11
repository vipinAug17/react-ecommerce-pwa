import React from "react";
import { connect } from "react-redux";

import { signOutStart } from "../../redux/user/user.actions";

import "./profile.styles.scss";

const Profile = ({ signOutStart }) => {
  return (
    <div className="profile-page">
      profile page...
      <button onClick={signOutStart}>log out</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(null, mapDispatchToProps)(Profile);
