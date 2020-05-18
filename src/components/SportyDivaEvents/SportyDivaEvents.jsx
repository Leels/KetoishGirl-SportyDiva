import React from "react";
import ReactWOW from 'react-wow';
import './EventList.css'
import SportyDivaCarousel from './SportyDivaCarousel';
import RunLocations from './RunLocations';
import EventList from './EventList';

function SportyDivaEvents(){

  return (
      <div className="pageHeight">
        <div className="panel panel-default section">
            <ReactWOW animation="fadeInUp">
          <div className="panel-heading">
            <h1 className="panel-title">
              SPORTY DIVA EVENTS
            </h1>
          </div>
          </ReactWOW>
          <SportyDivaCarousel />
          <ReactWOW animation="fadeInUp">
          <p><strong>Sporty Diva Run/Walk Events </strong>are designed to encourage, motivate and inspire the first time athlete or those returning to fitness in a fun, friendly and supportive noncompetitive race environment with a philanthropic/pay it forward mission. All fitness levels are welcome to participate, we have no time limits for our races. This is your day!</p>
          <p>Each participant will receive a Sporty Diva goodybag and a finisher's medal for each event. Snacks like trail mix, red vines, chips, cookies, candy, soda, water and juice will be available at the start/finish line. All participant's finishing times will be recorded and posted online three days after the event.</p>
          </ReactWOW>
          <ReactWOW animation="fadeInUp">
          <p className="quote"><em>"If you run, you are a runner. It doesn't matter how fast or how far. It doesn't matter if today is your first day or if you've been running for twenty years. There is no test to pass, no license to earn, no membership card to get. You just run."</em> - John Bingham</p>
          </ReactWOW>
          <RunLocations />
          <EventList/>
          </div>
    </div>
  );
}

export default SportyDivaEvents;