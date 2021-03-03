import React from "react";
import ReactWOW from 'react-wow';
import { MDBCol } from "mdbreact";

function ScheduleAppointment() {

  const officeImageStyles = {
    width: "270px",
    height: "auto",
    boxShadow: "0px 0px 15px #dfdfdf",
    display: "block",
    margin: "0 15px 15px 0",
  }

  return (
    <div id="scheduleAppointment" className="pageHeight" style={{ backgroundColor: "#FBF8F2" }}>
      <div className="section">
        <ReactWOW animation="fadeInUp">
          <h2>SERVICES & APPOINTMENTS</h2>
        </ReactWOW>
        <MDBCol size="12" sm="6" lg="12">
          <ReactWOW animation="fadeInUp">
            <img style={officeImageStyles} src="./images/roseoffice.png" className="float-left" alt="..." />
            <p>As a Certified Life and Weight Coach I work to help women who struggle with helping themselves. I help clients get to the ‘root cause’ of their problems by working on the source of the symptoms instead of simlpy using a band-aid approach. A band-aid simply will not work because the underlying symptoms are still there and will keep showing up. So why not get to the core issue of the problem... work through it…  and move on instead of dealing with the same problem over and over again?</p>
          </ReactWOW>
          <ReactWOW animation="fadeInUp">
            <div style={{ textAlign: "center", margin: "40px 120px" }}>
              <p>I offer 1:1 coaching for weightloss, fitness, nutrition, and general life coaching.
        Support, kindness, guidance, resources and empowerment are also provided. <i class="fas fa-heart" /></p>
            </div>
          </ReactWOW>
          <a href="https://ketoishgirlcoachingservices.as.me/schedule.php">
            <ReactWOW animation="fadeInUp">
              <h4 className="buttonColors">SCHEDULE A COMPLIMENTARY CONSULTATION WITH ROSE HERE</h4>
            </ReactWOW>
          </a>
        </MDBCol>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
