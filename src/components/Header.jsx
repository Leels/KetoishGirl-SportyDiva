import React from "react";
import ReactWOW from 'react-wow';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Header(){

const intro = {  
//   backgroundColor: "#e6ee9c",
//   backgroundColor: "#006064",
//   backgroundColor: "#00838f",
  backgroundColor: "#006064",
//   backgroundColor: "#1D4E89",
//   backgroundColor: "#00796b",
}

const introText = {
    color: "#e0f7fa",
    height: "100vh",
    padding: "18vh 90px",
    verticalAlign: "middle",
    // fontFamily: "Comfortaa"
}

const introImage = {
    diplay: "block",
    height: "100vh",
    width: "auto",
}

const lineBreak = {
    // color: '#84ffff',
    // backgroundColor: '#84ffff',
    // borderColor : '#84ffff',
    color: '#e6ee9c',
    backgroundColor: '#e6ee9c',
    borderColor : '#e6ee9c',
    height: .5,
    width: "360px" 
}

  return (
    <div id="header" className="pageHeight">
    <MDBContainer fluid style={intro}>
    <MDBRow center>
        <ReactWOW animation="fadeInLeft">
        <img style={introImage} src="./rosecoates.jpg" alt="" />
        </ReactWOW>
      <MDBCol style={{display: "block"}}>
        <div style={introText}>
        <ReactWOW animation="fadeInUp">
        <h1>Hi, I'm Rose!</h1>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <hr  style={lineBreak}/>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
            <h3>Aka, Ketoish Girl. As a Health, Weightloss and Life Coach, my mission is to help you on your journey to being your best self.</h3>
            <h3>You are born with unique talents, desires, and motivations; I coach to bring those amazing qualities in alignment with your health and life goals.</h3>
        </ReactWOW>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
      </div>
  );
}

export default Header;
