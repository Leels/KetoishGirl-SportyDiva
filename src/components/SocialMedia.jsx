import React from "react";
import ReactWOW from 'react-wow';
import { MDBCard, MDBRow, MDBView, MDBMask, MDBCol, } from "mdbreact";

function ScheduleAppointment() {

  const cardStyles = {
    color: "#fff",
    display: "flex",
    margin: "40px auto",
    width: "900px",
    boxShadow: "0px 0px 15px #dfdfdf",
  }

  return (
    <div id="scheduleAppointment" className="pageHeight">
      <div className="section">
        <ReactWOW animation="fadeInUp">
          <h2 style={{ marginBottom: "0" }}>FOLLOW ME ON SOCIAL MEDIA</h2>
        </ReactWOW>
        <MDBRow center >
          <ReactWOW animation="fadeInUp">
            <MDBCol md="12" className="py-5">
              <div className="mb-5 flex-center">
                <a href="https://www.facebook.com/ketoishgirl" className="fb-ic">
                  <i style={{ color: "#1c2331" }} className="fab fa-facebook-f fa-lg ml-md-4 mr-md-4  mr-3 fa-2x clickMe" />
                </a>
                <a href="https://www.youtube.com/channel/UCeo1QhY8KA3WPmX9BnlnHfQ" className="yt-ic">
                  <i style={{ color: "#1c2331" }} className="fab fa-youtube fa-lg ml-md-4 mr-md-4  mr-3 fa-2x clickMe" />
                </a>
                <a href="https://www.linkedin.com/in/rose-coates-243621191/?trk=people-guest_profile-result-card_result-card_full-click" className="li-ic">
                  <i style={{ color: "#1c2331" }} className="fab fa-linkedin-in fa-lg ml-md-4 mr-md-4  mr-3 fa-2x clickMe" />
                </a>
                <a href="https://www.instagram.com/theketoishgirl/" className="ins-ic">
                  <i style={{ color: "#1c2331" }} className="fab fa-instagram fa-lg ml-md-4 mr-md-4  mr-3 fa-2x clickMe" />
                </a>
                <a href="https://mail.google.com/" className="gplus-ic mr-3">
                  <i style={{ color: "#1c2331" }} className="fab fa-google-plus ml-md-4 mr-md-4  mr-3 fa-2x clickMe" />
                </a>
              </div>
            </MDBCol>
          </ReactWOW>
        </MDBRow>
        <MDBRow center>
          <ReactWOW animation="fadeInUp">
            <div style={{ margin: "0px auto 0 auto" }}>
              <iframe width="660" height="415" src="https://www.youtube-nocookie.com/embed/X25Eoh142lw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </ReactWOW>
        </MDBRow>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
