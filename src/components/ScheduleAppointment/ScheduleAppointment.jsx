import React from "react";
import ReactWOW from 'react-wow';
import { MDBCard, MDBCol, MDBView, MDBMask } from "mdbreact";

function ScheduleAppointment(){

 const cardStyles = {
    color: "#fff",
    display: "flex",
    margin: "40px auto",
    width: "900px",
    boxShadow: "0px 0px 15px #dfdfdf",
  }

  const imageStyles = {
    borderRadius: "2px", 
    width: "900px", 
    height: "140px", 
    objectFit: "cover",
    boxShadow: "0px 0px 15px #dfdfdf",
  }

  const officeImageStyles = {
    width: "270px", 
    height: "auto", 
    boxShadow: "0px 0px 15px #dfdfdf",
    display: "block",
    margin: "0 15px 15px 0",
  }

  return (
    <div id="scheduleAppointment" className="pageHeight">
      <div className="section">
        <ReactWOW animation="fadeInUp">
          <h2>APPOINTMENTS & SERVICES</h2>
        </ReactWOW>
        <MDBCol size="12" sm="6" lg="12">
        {/* <ReactWOW animation="fadeInUp">
        <p>My mission is to help women heal from binging and compulsively overeating and empower them so that they can empower themselves. I believe we all have the answers to the questions about our lives within each of us. In regards to health I've combined the principles of the Ketogenic Diet, Intermittent Fasting and High Fat Low Carb (HFLC) to develop a healthier approach to nutrition.</p>
        </ReactWOW> */}
        <ReactWOW animation="fadeInUp">
        <img style={officeImageStyles} src="./roseoffice.png" className="float-left" alt="..."/>
        <p>As a Certified Life and Weight Coach I work to help women who struggle with helping themselves. I help clients get to the ‘root cause’ of their problems by working on the source of the symptoms instead of simlpy using a band-aid approach. A band-aid simply will not work because the underlying symptoms are still there and will keep showing up. So why not get to the core issue of the problem... work through it…  and move on instead of dealing with the same problem over and over again?</p>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <p style={{textAlign: "center", marginTop: "40px"}}>Support, kindness, guidance, resources and empowerment are also provided. <i class="fas fa-heart"/></p>
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
        </MDBCol>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
