import React, { useContext } from "react";
import firebase, { app } from '../Firebase';
import {Link} from 'react-router-dom';
import { AuthContext } from "./../Auth";



function LoginButton(){

  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
  return  (
    <div class="container pageHeight">
    <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
  }
  return (
    <div class="container pageHeight">
    <button ><Link to="/AdminLogin">Login</Link></button>
  </div>
  );
}

export default LoginButton;
