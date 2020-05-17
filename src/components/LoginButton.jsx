import React, { useContext } from "react";
import firebase, { app } from '../Firebase';
import { AuthContext } from "../Auth";



function LoginButton(){

  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
  return  (
    <div>
    <a onClick={() => app.auth().signOut()}>Sign Out</a>
    </div>
  );
  }
  return (
    <div >
    <a href="./AdminLogin">Admin</a>
  </div>
  );
}

export default LoginButton;
