import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCard, MDBCol} from "mdbreact";

class CreateEvent extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('events');
    this.state = {
      name: '',
      date: '',
      mission: '',
      course: '',
      schedule: '',
      timing: '',
      address: '',
      restrooms: '',
      registrationLink: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, date, mission, course, schedule, timing, address, restrooms, registrationLink } = this.state;

    this.ref.add({
      name,
      date,
      mission,
      course,
      schedule,
      timing,
      address,
      restrooms,
      registrationLink,
    }).then((docRef) => {
      this.setState({
        name: '',
        date: '',
        mission: '',
        course: '',
        schedule: '',
        timing: '',
        address: '',
        restrooms: '',
        registrationLink: '',
      });
      this.props.history.push("/EventsPage")
    })
    .catch((error) => {
      console.error("Error adding event: ", error);
    });
  }

  render() {
    const { name, date, mission, course, schedule, timing, address, restrooms, registrationLink } = this.state;

    const back = {
      padding: "20px",
      textAlign: "center",
    }

    return (
      <div className="pageHeight">
        <div className="section panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">
              ADD EVENT
            </h2>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="name">Event:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Event Name" />
              </div>
              <div className="form-group">
                <label for="date">Date:</label>
                <input type="text" className="form-control" name="date" value={date} onChange={this.onChange} placeholder="Date" />
              </div>
              <div className="form-group">
                <label for="address">Location:</label>
                <textArea className="form-control" name="address" onChange={this.onChange} placeholder="Event Address" cols="80" rows="3">{address}</textArea>
              </div>
              <div className="form-group">
                <label for="mission">Pay it Forward Mission:</label>
                <input type="text" className="form-control" name="mission" value={mission} onChange={this.onChange} placeholder="Pay it Forward Mission" />
              </div>
              <div className="form-group">
                <label for="description">Course Description:</label>
                <textArea className="form-control" name="course" onChange={this.onChange} placeholder="Course Description" cols="80" rows="3">{course}</textArea>
              </div>
              <div className="form-group">
                <label for="schedule">Event Day Schedule:</label>
                <textArea className="form-control" name="schedule" onChange={this.onChange} placeholder="Event Day Schedule" cols="80" rows="3">{schedule}</textArea>
              </div>
              <div className="form-group">
                <label for="timing">Timing and Other Information:</label>
                <textArea className="form-control" name="timing" onChange={this.onChange} placeholder="Timing Information" cols="80" rows="3">{timing}</textArea>
              </div>
              <div className="form-group">
                <label for="restrooms">Restrooms:</label>
                <textArea className="form-control" name="restrooms" onChange={this.onChange} placeholder="Restrooms" cols="80" rows="3">{restrooms}</textArea>
              </div>
              <div className="form-group">
                <label for="registrationLink">Event Registration Link:</label>
                <textArea className="form-control" name="registrationLink" onChange={this.onChange} placeholder="https://runsignup.com/" cols="80" rows="3">{registrationLink}</textArea>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
              <h4 style={back}><Link to="/EventsPage">BACK TO EVENTS</Link></h4>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
