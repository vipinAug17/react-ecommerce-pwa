import React from "react"; 
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import HeaderPage from "../../components/header-page/header-page.component";

import { ReactComponent as CheveronLeft } from "../../assets/chevron-left.svg";

import "./profile.styles.scss";

const Profile = ({ signOutStart, currentUser }) => {
  const { displayName, email } = currentUser;
  const name_img = displayName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="profile-page pg-space">
      <HeaderPage title="my profile"> 
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
      </HeaderPage>
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
