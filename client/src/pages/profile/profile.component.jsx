import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as CheveronLeft } from "../../assets/chevron-left.svg";

import "./profile.styles.scss";

const Profile = ({ signOutStart, currentUser }) => {
  const history = useHistory();
  const { displayName, email } = currentUser;
  console.log("user ... ", currentUser);
  const name_img = displayName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="profile-page">
      <button className="back" onClick={() => history.goBack()}>
        <CheveronLeft />
      </button>
      <div className="_inner">
        <strong className="title">My profile</strong>
        <div className="user-info">
          <div className="img">{name_img}</div>
          <div className="col">
            <strong>{displayName}</strong>
            <small>{email}</small>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <strong>My orders</strong>
            <small>
              Already have <span>5</span> orders
            </small>
          </div>
          <CheveronLeft />
        </div>
        <div className="row">
          <div className="col">
            <strong>Shipping addresses</strong>
            <small>
              <span>5</span> addresses
            </small>
          </div>
          <CheveronLeft />
        </div>
        <div className="row">
          <div className="col">
            <strong>Settings</strong>
            <small>Notifications, password</small>
          </div>
          <CheveronLeft />
        </div>
        <button className="logout_btn" onClick={signOutStart}>
          logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
