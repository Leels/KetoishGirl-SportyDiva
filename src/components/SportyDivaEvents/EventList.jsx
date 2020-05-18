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

    const tableHeaders = {
      fontSize: "20px"
      // paddingTop: "20px"
    }

    return (
      <div>
        <ReactWOW animation="fadeInUp">
          <h3 className="panel-title">
            EVENT LIST
          </h3>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <div className="list">
          <div className="panel-body title">
            <table className="table table-stripe">
            <ReactWOW animation="fadeInUp">
              <thead>
                <tr>
                  <th style={tableHeaders}>Event</th>
                  <th style={tableHeaders}>Date</th>
                  <th style={tableHeaders}>Location</th>
                </tr>
              </thead>
              </ReactWOW>
              <tbody>
                {this.state.events.map((event, i) =>
                <ReactWOW animation="fadeInUp">
                  <tr key={i}>
                    <td><Link to={`/showevent/${event.key}`} style={underline}>{event.name}</Link></td>
                    <td>{event.date}</td>
                    <td>{event.address}</td>
                  </tr>
                  </ReactWOW>
                )}
              </tbody>
            </table>
            <AddEventAccess/>
          </div>
        </div>
        </ReactWOW>
      </div>
    );
  }
}

export default EventList;
