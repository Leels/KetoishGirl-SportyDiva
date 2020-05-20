import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import LoginButton from './LoginButton';

const Footer = () => {

const positioning = {
  bottom: "0"
}

const certs = {
  height: "150px",
  width: "auto",
  margin: "40px 15px 0 15px"
}
  return (
    <MDBFooter style={positioning} color="unique-color-dark" className="font-small darken-3 pt-0">
      <MDBContainer fluid>
        <MDBRow center>
        <img style={certs} src="./WeightcoachCert.png" alt="" />
        <img style={certs} src="./LifeCoachCert.png" alt="" />
        </MDBRow>
        <MDBRow center >
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
            <a style={{margin: "0 !important", padding: "0 !important"}} href="https://www.facebook.com/ketoishgirl" className="fb-ic">
              </a>
              <a href="https://www.facebook.com/ketoishgirl" className="fb-ic">
                <i style={{margin: "0 !important"}} className="fab fa-facebook-f fa-lg white-text ml-md-4 mr-md-4  mr-3 fa-2x clickMe"/>
              </a>
              <a href="https://www.youtube.com/channel/UCeo1QhY8KA3WPmX9BnlnHfQ"  className="yt-ic">
                <i className="fab fa-youtube fa-lg white-text ml-md-4 mr-md-4  mr-3 fa-2x clickMe"/>
              </a>
              <a href="https://www.linkedin.com/in/rose-coates-243621191/?trk=people-guest_profile-result-card_result-card_full-click" className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text ml-md-4 mr-md-4  mr-3 fa-2x clickMe"/>
              </a>
              <a href="https://www.instagram.com/theketoishgirl/" className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text ml-md-4 mr-md-4  mr-3 fa-2x clickMe"/>
              </a>
              <a href="./Contact">
                <i className="fa fa-envelope white-text ml-md-4 mr-md-4  mr-3 fa-2x clickMe" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
      <LoginButton/>
          &copy; 2020 KETOISH GIRL
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
