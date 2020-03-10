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
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a >
                <i className="fa fa-envelope white-text mr-md-5 mr-3 fa-2x" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          Lela Smith
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
