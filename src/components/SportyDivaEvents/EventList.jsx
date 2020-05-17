import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import './EventList.css'
import SportyDivaCarousel from './SportyDivaCarousel';
import RunLocations from './RunLocations';
import FAQs from './FAQs';
import AddEventAccess from './AddEventAccess';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('events');
    this.unsubscribe = null;
    this.state = {
      events: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const events = [];
    querySnapshot.forEach((doc) => {
      const { name, date, mission, course, schedule, timing, address, restrooms, registrationLink } = doc.data();
      events.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        date,
        mission,
        course,
        schedule,
        timing,
        address,
        restrooms,
        registrationLink
      });
    });
    this.setState({
      events
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {

    const underline = {
      fontWeight: "bold"
    }

    const subTitle = {
      textAlign: "center",
      paddingTop: "20px"
    }

    return (
      <div className="pageHeight">
        <div className="panel panel-default section">
          <div className="panel-heading">
            <h1 className="panel-title">
              SPORTY DIVA EVENTS
            </h1>
          </div>
          <br/>
          <SportyDivaCarousel />
          <br/>
          <p><strong>Sporty Diva Run/Walk Events </strong>are designed to encourage, motivate and inspire the first time athlete or those returning to fitness in a fun, friendly and supportive noncompetitive race environment with a philanthropic/pay it forward mission. All fitness levels are welcome to participate, we have no time limits for our races. This is your day!</p>
          <p>Each participant will receive a Sporty Diva goodybag and a finisher's medal for each event. Snacks like trail mix, red vines, chips, cookies, candy, soda, water and juice will be available at the start/finish line. All participant's finishing times will be recorded and posted online three days after the event.</p>
          <br/>
          <p className="quote"><em>"If you run, you are a runner. It doesn't matter how fast or how far. It doesn't matter if today is your first day or if you've been running for twenty years. There is no test to pass, no license to earn, no membership card to get. You just run."</em> - John Bingham</p>
          <br/>
          <RunLocations />
          <br/>
        <div className="list">
          <h2 style={subTitle} className="panel-title">
            EVENT LIST
          </h2>
          <div className="panel-body title">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.map((event, i) =>
                  <tr key={i}>
                    <td><Link to={`/showevent/${event.key}`} style={underline}>{event.name}</Link></td>
                    <td>{event.date}</td>
                    <td>{event.address}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <AddEventAccess/>
            </div>
          </div>
        </div>
        <FAQs/>
      </div>
    );
  }
}

export default EventList;
