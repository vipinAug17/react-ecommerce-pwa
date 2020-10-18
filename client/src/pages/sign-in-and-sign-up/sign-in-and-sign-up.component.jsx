import React, { useState } from "react"; 

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => { 
  const [newUser, setNewuser] = useState(false);

  const newUser_handler = () => {
    setNewuser(!newUser);
  };

  return (
    <div className="signInAndSignUpContainer pg-space">
      {newUser ? (
        <SignUp newUser_handler={newUser_handler} />
      ) : (
        <SignIn newUser_handler={newUser_handler} />
      )}
    </div>
  );
};

export default SignInAndSignUpPage;
