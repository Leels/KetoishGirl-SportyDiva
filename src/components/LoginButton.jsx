import React, { useContext } from "react";
import firebase, { app } from '../Firebase';
import { AuthContext } from "../Auth";



function LoginButton() {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return (
      <div>
        <a onClick={() => app.auth().signOut()}>
          <i class="fas fa-heart"></i>
        </a>
      </div>
    );
  }
  return (
    <div >
      <a href="./AdminLogin">
        <i class="far fa-heart" />
      </a>
    </div>
  );
}

export default LoginButton;
