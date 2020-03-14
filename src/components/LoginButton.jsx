import React from "react";
import firebase, { app } from '../Firebase';
import {Link} from 'react-router-dom'



function LoginButton(){

  if (currentUser) {
  return  (
    <div class="container pageHeight">
    <button ><Link to="/AdminLogin">Login</Link></button>
    </div>
  );
  }
  return (
    <div class="container pageHeight">
    <button onClick={() => app.auth().signOut()}>Sign Out</button>
  </div>
  );
}

export default LoginButton;
