import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import ReactWOW from 'react-wow';
import './EventList.css'
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
      fontWeight: "bold",
      // fontSize: "20px"
    }

    const subTitle = {
      textAlign: "center",
      paddingTop: "20px"
    }

    return (
      <div>
        <ReactWOW animation="fadeInUp">
          <h3 style={subTitle} className="panel-title">
            EVENT LIST
          </h3>
        </ReactWOW>
        <div className="list">
          <div className="panel-body title">
            <table className="table table-stripe">
              <thead>
                <tr size="24">
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
    );
  }
}

export default EventList;
