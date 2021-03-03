import React from "react";
import ReactWOW from 'react-wow';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Header() {

  const intro = {
    backgroundColor: "#074c60",
  }

  const introText = {
    color: "#fff",
    height: "100vh",
    padding: "18vh 90px",
    verticalAlign: "middle",
  }

  const introImage = {
    diplay: "block",
    marginTop: "55px",
    height: "100vh",
    width: "auto",
  }

  const lineBreak = {
    color: '#88d498',
    backgroundColor: '#88d498 ',
    borderColor: '#88d498 ',
    height: .5,
    width: "360px"
  }

  return (
    <div id="header" className="pageHeight">
      <MDBContainer fluid style={intro}>
        <MDBRow center>
          <ReactWOW animation="fadeInLeft">
            <img style={introImage} src="./images/rosecoates.jpg" alt="" />
          </ReactWOW>
          <MDBCol style={{ display: "block" }}>
            <div style={introText}>
              <ReactWOW animation="fadeInDown">
                <h1>Hi, I'm Rose!</h1>
              </ReactWOW>
              <ReactWOW animation="fadeInDown">
                <hr style={lineBreak} />
              </ReactWOW>
              <ReactWOW animation="fadeInDown">
                <h3>Aka, Ketoish Girl. As a Weightloss and Life Coach, my mission is to help you on your journey to living your best life.</h3>
                <h3>You are born with unique talents, desires, and motivations; I coach to bring those amazing qualities in alignment with your goals.</h3>
              </ReactWOW>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Header;
