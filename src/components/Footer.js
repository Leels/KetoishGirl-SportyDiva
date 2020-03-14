import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {

const positioning = {
  position: "relative",
  left: "0",
  right: "0",
  bottom: "0"
}
  return (
    <MDBFooter style={positioning} color="unique-color-dark" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a href="https://www.facebook.com/ketoishgirl" className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://www.linkedin.com/in/rose-coates-243621191/?trk=people-guest_profile-result-card_result-card_full-click" className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://www.instagram.com/ketoishgirl/?hl=en" className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="./Contact">
                <i className="fa fa-envelope white-text mr-md-5 mr-3 fa-2x" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <a href="./AdminLogin">Admin </a>
          - &copy; {new Date().getFullYear()} Copyright:{" "}
          Lela Smith
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
