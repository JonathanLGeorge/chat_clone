import React from "react";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
import "../styles/Login.css";
function Login() {
  const signIn = () => {
    //do google stuff
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="" alt="" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
