import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../Firebase';

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
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EVENT LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/createevent">Add Event</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Sporty Diva Run</th>
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
          </div>
        </div>
      </div>
    );
  }
}

export default EventList;
