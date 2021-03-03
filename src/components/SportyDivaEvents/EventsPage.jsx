import React from "react";
import ReactWOW from 'react-wow';
import './EventList.css'
import RunLocations from './RunLocations';
import EventList from './EventList';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function EventsPage() {

  return (
    <div id="EventsPage" className="pageHeight">
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
                <p>Sporty Diva Run/Walk Events are designed to encourage, motivate and inspire the first time athlete or those returning to fitness in a fun, friendly and supportive noncompetitive race environment. All fitness levels are welcome to participate, we have no time limits for our races. This is your day!</p>
                <p>Each participant will receive a Sporty Diva goody-bag and a finisher's medal for each event. Snacks like trail mix, red vines, chips, cookies, candy, soda, water and juice will be available at the start/finish line. All participants' finishing times will be recorded and posted online three days after the event.</p>
              </ReactWOW>
            </MDBCol>
            <MDBRow center>
              <ReactWOW animation="fadeInUp">
              </ReactWOW>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
        <RunLocations />
        <EventList />
      </div>
    </div>
  );
}

export default EventsPage;