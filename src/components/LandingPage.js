import React from "react";
import firebase, { app } from '../Firebase';




function LandingPage(){

  return (
    <div class="container pageHeight">
      <h1>Landing Page</h1>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
}

export default LandingPage;
