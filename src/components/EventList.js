import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../Firebase';
import './EventList.css'
import SportyDivaCarousel from './SportyDivaCarousel';
import RunLocations from './RunLocations';
import FAQs from './FAQs';

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
      const { name, date, mission, course, schedule, timing, address, restrooms } = doc.data();
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
        restrooms
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

    const pageHeight = {
      paddingTop: "30px",
    }
    const underline = {
      fontWeight: "bold"
    }

    const subTitle = {
      textAlign: "center",
      paddingTop: "30px"
    }

    return (
      <div class="container pageHeight">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="panel-title">
              SPORTY DIVA EVENTS
            </h1>
          </div>
          <br/>
          <SportyDivaCarousel />
          <br/>
          <p><strong>Sporty Diva Run/Walk Events </strong>are designed to encourage, motivate and inspire the first time athlete or those returning to fitness in a fun, friendly and supportive noncompetitive race environment with a philanthropic/pay it forward mission.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <br/>
          <p class="quote"><em>"If you run, you are a runner. It doesn't matter how fast or how far. It doesn't matter if today is your first day or if you've been running for twenty years. There is no test to pass, no license to earn, no membership card to get. You just run."</em> - John Bingham</p>
          <br/>
          <RunLocations />
          <br/>
          <h2 style={subTitle} class="panel-title title">
            EVENT LIST
          </h2>
          <div class="panel-body title">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.map(event =>
                  <tr>
                    <td><Link to={`/showevent/${event.key}`} style={underline}>{event.name}</Link></td>
                    <td>{event.date}</td>
                    <td>{event.address}</td>
                  </tr>
                )}
              </tbody>
            </table>
                <h4 align="center"><Link to="/createevent">+ Add Event</Link></h4>
          </div>
        </div>
        <FAQs/>
      </div>
    );
  }
}

export default EventList;
