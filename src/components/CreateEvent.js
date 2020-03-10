import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

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
      restrooms: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, date, mission, course, schedule, timing, address, restrooms } = this.state;

    this.ref.add({
      name,
      date,
      mission,
      course,
      schedule,
      timing,
      address,
      restrooms
    }).then((docRef) => {
      this.setState({
        name: '',
        date: '',
        mission: '',
        course: '',
        schedule: '',
        timing: '',
        address: '',
        restrooms: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding event: ", error);
    });
  }

  render() {
    const { name, date, mission, course, schedule, timing, address, restrooms } = this.state;

    const pageHeight = {
      paddingTop: "30px",
      paddingBottom: "250px"
    }

    return (
      <div style={pageHeight} class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 align="center" class="panel-title">
              ADD EVENT
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Event:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Event Name" />
              </div>
              <div class="form-group">
                <label for="date">Date:</label>
                <input type="text" class="form-control" name="date" value={date} onChange={this.onChange} placeholder="Date" />
              </div>
              <div class="form-group">
                <label for="address">Location:</label>
                <textArea class="form-control" name="address" onChange={this.onChange} placeholder="Event Address" cols="80" rows="3">{address}</textArea>
              </div>
              <div class="form-group">
                <label for="mission">Pay it Forward Mission:</label>
                <input type="text" class="form-control" name="mission" value={mission} onChange={this.onChange} placeholder="Pay it Forward Mission" />
              </div>
              <div class="form-group">
                <label for="description">Course Description:</label>
                <textArea class="form-control" name="course" onChange={this.onChange} placeholder="Course Description" cols="80" rows="3">{course}</textArea>
              </div>
              <div class="form-group">
                <label for="schedule">Event Day Schedule:</label>
                <textArea class="form-control" name="schedule" onChange={this.onChange} placeholder="Event Day Schedule" cols="80" rows="3">{schedule}</textArea>
              </div>
              <div class="form-group">
                <label for="timing">Timing and Other Information:</label>
                <textArea class="form-control" name="timing" onChange={this.onChange} placeholder="Timing Information" cols="80" rows="3">{timing}</textArea>
              </div>
              <div class="form-group">
                <label for="restrooms">Restrooms:</label>
                <textArea class="form-control" name="restrooms" onChange={this.onChange} placeholder="Restrooms" cols="80" rows="3">{restrooms}</textArea>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
              <h4><Link to="/EventList" class="btn btn-primary">Back to Event List</Link></h4>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
