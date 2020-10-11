import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { ReactComponent as ForwardIcon } from "../../assets/forward.svg";
import { ReactComponent as GoogleIcon } from "../../assets/google.svg";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart, newUser_handler }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in  _inner">
      <strong className="title">
        welcome
        <br />
        back
      </strong>
      <div className="_row">
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
          <div className="group-btn">
            <strong> Sign in </strong>
            <button type="submit">
              <ForwardIcon />
            </button>
          </div>
        </form>

        <div className="line">
          <span>Or login with social account</span>
        </div>

        <div className="social-btns">
          <button className="google-btn" onClick={googleSignInStart}>
            <GoogleIcon />
            Sign in with Google
          </button>
        </div>
        <div className="other-links">
          <button className="link" onClick={newUser_handler}>sign Up</button>
          <button className="link">forgot password</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
