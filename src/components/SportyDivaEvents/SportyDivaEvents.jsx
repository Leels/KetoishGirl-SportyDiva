import React from "react";
import ReactWOW from 'react-wow';
import './EventList.css'
import SportyDivaCarousel from './SportyDivaCarousel';
import RunLocations from './RunLocations';
import EventList from './EventList';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function SportyDivaEvents(){

  const testimonialPhoto = {
  objectFit: "cover",
  marginRight: "16px",
  borderRadius: "50%",
  width: "75px",
  }

  const author = {
  display: "inline-block",
  margin: "20px 0 0 0",
  fontSize: "1.3rem",
  fontWeight: "600",
  letterSpacing: "normal",
  }

  const testimonialWrapper = {
  marginTop: "16px",
  textAlign: "center",
  }

  return (
      <div id="sportyDivaEvents" className="pageHeight">
        <div className="panel panel-default section">
            <ReactWOW animation="fadeInUp">
          <div className="panel-heading">
            <h2 className="panel-title">
              SPORTY DIVA EVENTS
            </h2>
          </div>
          </ReactWOW>
          <MDBContainer>
            <MDBRow center middle>
              <MDBCol size="12" sm="6" lg="12">
                <ReactWOW animation="fadeInUp">
                  <p>In 2007 I established Sporty Diva LLC to reach folks with my personal story and to help motivate people to pursue a healthier and active lifestyle. I promote health and wellness thru a variety of events such as Ladies Night Out, Walking/Running Events, Workshops, Personal Training, Motivational Speaking and Boot Camps. I am completely on fire for running and fitness because even though we are each on our own journey and responsible for our own health and well-being, we are all in this life together.</p>
                </ReactWOW>
              </MDBCol>
            </MDBRow>
            <MDBRow center middle>
              <MDBCol size="12" sm="6" lg="8">
                <ReactWOW animation="fadeInUp">
                  <div style={testimonialWrapper}>
                <p className="quote">
                <i class="fas fa-quote-left"/>
                <em> Rose's fitness events have always been a fun way to socialize and get fit in a low pressure setting. She puts a lot of care into each event. I especially like to attend the walk/run events, the goody bags are such a sweet little touch!"</em></p>
                <img style={testimonialPhoto} src="anita.png" alt="" />
                <p style={author}>Anita Smith <span style={{fontWeight: "normal", fontSize: "1rem"}}> |  Participant since 2007</span></p>
                </div>
                </ReactWOW>
                <ReactWOW animation="fadeInUp">
                <a href="/EventsPage">
                  <h4 className="buttonColors">VISIT THE SPORTY DIVA EVENTS PAGE</h4>
                </a>
                </ReactWOW>
              </MDBCol>
            </MDBRow>
           </MDBContainer>
        </div>
    </div>
  );
}

export default SportyDivaEvents;