import React from "react";
import ReactWOW from 'react-wow';
import { MDBCard, MDBRow, MDBView, MDBMask } from "mdbreact";

function ScheduleAppointment(){

 const cardStyles = {
    color: "#fff",
    display: "flex",
    margin: "40px auto",
    width: "900px",
    boxShadow: "0px 0px 15px #dfdfdf",
  }

const imageStyles = {
  borderRadius: "5px", 
  width: "900px", 
  height: "140px", 
  objectFit: "cover",
  boxShadow: "0px 0px 15px #dfdfdf",
}

  return (
    <div id="scheduleAppointment" className="pageHeight">
      <div className="section">
        <ReactWOW animation="fadeInUp">
          <h2>APPOINTMENTS & SERVICES</h2>
        </ReactWOW>
        <a href="https://ketoishgirlcoachingservices.as.me/schedule.php">
              <ReactWOW animation="fadeInUp">
        <MDBCard style={cardStyles} className="clickMe">
          <MDBView>
              <img src="./ketofood.jpg" className="img-fluid z-depth-1" alt="" style={imageStyles} />
              <MDBMask className="flex-center" overlay="black-light" style={{borderRadius: "5px"}}>
                <h4><strong>SCHEDULE A COMPLIMENTARY CONSULTATION WITH ROSE HERE</strong></h4>
              </MDBMask>
           </MDBView>
          </MDBCard>
                </ReactWOW>
        </a>
          <MDBRow center>
            <ReactWOW animation="fadeInUp">
              <div style={{margin: "40px auto 0 auto"}}>
               <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/X25Eoh142lw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </ReactWOW>
        </MDBRow>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
