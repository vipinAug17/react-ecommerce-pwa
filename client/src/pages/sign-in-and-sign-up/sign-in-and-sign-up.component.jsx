import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { ReactComponent as CheveronLeft } from "../../assets/chevron-left.svg";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  const history = useHistory();
  const [newUser, setNewuser] = useState(false);

  const newUser_handler = () => {
    setNewuser(!newUser);
  };

  return (
    <div className="signInAndSignUpContainer">
      <button className="back" onClick={() => history.goBack()}>
        <CheveronLeft />
      </button>
      {newUser ? (
        <SignUp newUser_handler={newUser_handler} />
      ) : (
        <SignIn newUser_handler={newUser_handler} />
      )}
    </div>
  );
};

export default SignInAndSignUpPage;
