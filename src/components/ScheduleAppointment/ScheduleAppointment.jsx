import React from "react";
import ReactWOW from 'react-wow';
import { MDBCard, MDBRow, MDBView, MDBMask } from "mdbreact";

function ScheduleAppointment(){

 const cardStyles = {
    color: "#fff",
    display: "flex",
    margin: "60px auto 0 auto",
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

  const officeImageStyles = {
    width: "240px", 
    height: "auto", 
    boxShadow: "0px 0px 15px #dfdfdf",
    display: "block",
    margin: "0 20px 20px 0",
  }

  return (
    <div id="scheduleAppointment" className="pageHeight">
      <div className="section">
        <ReactWOW animation="fadeInUp">
          <h2>APPOINTMENTS & SERVICES</h2>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <p>My mission is to help women heal from binging and compulsively overeating and empower them so that they can empower themselves. I believe we all have the answers to the questions about our lives within each of us.</p>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <img style={officeImageStyles} src="./roseoffice.png" className="rounded float-left" alt="..."/>
        <p>As a Certified Life and Weight Coach I work to help women who are struggling to help themselves. I help clients get to the ‘root cause’ of their problems by working on the source of the symptoms instead of simlpy using a band-aid approach. A band-aid simply will not work because the underlying symptoms are still there and will keep showing up. So why not get to the core issue of the problem/symptom... work through it…  and move on instead of dealing with the same problem over and over again?</p>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <p>Support, kindness, guidance, resources and empowerment are also provided. <i class="fas fa-heart"/></p>
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
          {/* <MDBRow center>
            <ReactWOW animation="fadeInUp">
              <div style={{margin: "90px auto 0 auto"}}>
               <iframe width="660" height="415" src="https://www.youtube-nocookie.com/embed/X25Eoh142lw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </ReactWOW>
        </MDBRow> */}
      </div>
    </div>
  );
}

export default ScheduleAppointment;
