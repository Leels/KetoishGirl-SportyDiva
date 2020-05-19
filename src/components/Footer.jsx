import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import LoginButton from './LoginButton';

const Footer = () => {

const positioning = {
  bottom: "0"
}
  return (
    <MDBFooter style={positioning} color="unique-color-dark" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a href="https://www.facebook.com/ketoishgirl" className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x footerIcons"/>
              </a>
              <a href="https://www.youtube.com/channel/UCeo1QhY8KA3WPmX9BnlnHfQ"  className="yt-ic">
                <i className="fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x footerIcons"/>
              </a>
              <a href="https://www.linkedin.com/in/rose-coates-243621191/?trk=people-guest_profile-result-card_result-card_full-click" className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x footerIcons"/>
              </a>
              <a href="https://www.instagram.com/theketoishgirl/" className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x footerIcons"/>
              </a>
              <a href="./Contact">
                <i className="fa fa-envelope white-text mr-md-5 mr-3 fa-2x footerIcons" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
      <LoginButton/>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}{" "}
          KETOISH GIRL
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
