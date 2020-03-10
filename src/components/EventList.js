import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../Firebase';
import './EventList.css'
import SportyDivaCarousel from './SportyDivaCarousel';

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


    return (
      <div class="container pageHeight">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1 align="center" class="panel-title">
              Sporty Diva Run/Walk Events
            </h1>
          </div>
          <br/>
          <SportyDivaCarousel />
          <br/>
          <p><strong>Sporty Diva Run/Walk Events </strong>are designed to encourage, motivate and inspire the first time athlete or those returning to fitness in a fun, friendly and supportive~non~competitive race environment with a philanthropic/pay it forward mission.</p>
          <br/>
          <p class="quote"><em>"If you run, you are a runner. It doesn't matter how fast or how far. It doesn't matter if today is your first day or if you've been running for twenty years. There is no test to pass, no license to earn, no membership card to get. You just run."</em> - John Bingham</p>
          <br/>
          <div class="panel-body">
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
                    <td><Link to={`/showevent/${event.key}`}>{event.name}</Link></td>
                    <td>{event.date}</td>
                    <td>{event.address}</td>
                  </tr>
                )}
              </tbody>
            </table>
                <h4 align="center"><Link to="/createevent">+ Add Event</Link></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default EventList;
