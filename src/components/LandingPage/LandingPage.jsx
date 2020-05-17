import React from "react";
// import firebase, { app } from '../../Firebase';

function LandingPage(){

  const background = {
    backgroundColor: "black",
  }

  const image = {
    display: "block",
    maxWidth: "65%",
  }

  const text = {
    color: 'white'
  }

  return (
    <div style={background}>
    <div className="container-fluid">
      <img style={image} src="./RoseCover.jpg" />
      <h3 style={text}> Hi, I'm Rose.</h3>
      </div>
    </div>


  );
}

export default LandingPage;
