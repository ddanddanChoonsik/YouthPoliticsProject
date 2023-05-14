import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SignInForm from "./SignInForm";



const LoginForm = () => {
  return (
    <div>
      <div className="loginContainer">
      <div className="box11111"></div>
      <div className="loginform">
            <SignInForm/>
        </div>
    </div>
    </div>
  );
};

export default LoginForm;