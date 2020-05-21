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
    document.body.scrollTop = 0;
  }

  render() {

    const underline = {
      fontWeight: "bold",
    }

    const tableHeaders = {
      fontSize: "20px"
    }

    return (
      <div>
        <ReactWOW animation="fadeInUp">
          <h3 className="panel-title">
            EVENT LIST
          </h3>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <div >
          <div className="panel-body title">
            <table style={{boxShadow: "0px 0px 15px #dfdfdf"}} className="table list table-stripe">
            <ReactWOW animation="fadeInUp">
              <thead>
                <tr>
                  <th style={tableHeaders}>Event</th>
                  <th style={tableHeaders}>Mission</th>
                  <th style={tableHeaders}>Date</th>
                  <th style={tableHeaders}>Location</th>
                </tr>
              </thead>
              </ReactWOW>
              <tbody>
                {this.state.events.map((event, i) =>
                  <tr key={i}>
                    <td><Link to={`/showevent/${event.key}`} style={underline}>{event.name}</Link></td>
                    <td>{event.mission}</td>
                    <td>{event.date}</td>
                    <td>{event.address}</td>
                  </tr>
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
