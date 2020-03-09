import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class EditEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      name: '',
      date: '',
      mission: '',
      course: '',
      schedule: '',
      timing: '',
      restrooms: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('events').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const event = doc.data();
        this.setState({
          key: doc.id,
          name: event.name,
          date: event.date,
          mission: event.mission,
          course: event.course,
          schedule: event.schedule,
          timing: event.timing,
          restrooms: event.restrooms
        });
      } else {
        console.log("No such event!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({event:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, date, mission, course, schedule, timing, address, restrooms } = this.state;

    const updateRef = firebase.firestore().collection('events').doc(this.state.key);
    updateRef.set({
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
        key: '',
        name: '',
        date: '',
        mission: '',
        course: '',
        schedule: '',
        timing: '',
        restrooms: ''
      });
      this.props.history.push("/ShowEvent/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding event: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT EVENT
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Event List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Sporty Diva Run:</label>
                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Event Name" />
              </div>
              <div class="form-group">
                <label for="date">Date:</label>
                <input type="text" class="form-control" name="date" value={this.state.date} onChange={this.onChange} placeholder="Date" />
              </div>
              <div class="form-group">
                <label for="mission">Pay it Forward Mission:</label>
                <input type="text" class="form-control" name="mission" value={this.state.mission} onChange={this.onChange} placeholder="Pay it Forward Mission" />
              </div>
              <div class="form-group">
                <label for="course">Course Description:</label>
                <input type="text" class="form-control" name="course" value={this.state.course} onChange={this.onChange} placeholder="Course Description" />
              </div>
              <div class="form-group">
                <label for="schedule">Event Day Schedule:</label>
                <input type="text" class="form-control" name="schedule" value={this.state.schedule} onChange={this.onChange} placeholder="Event Day Schedule" />
              </div>
              <div class="form-group">
                <label for="timing">Timing:</label>
                <input type="text" class="form-control" name="timing" value={this.state.timing} onChange={this.onChange} placeholder="Timing" />
              </div>
              <div class="form-group">
                <label for="address">Location:</label>
                <input type="text" class="form-control" name="address" value={this.state.address} onChange={this.onChange} placeholder="Event Address" />
              </div>
              <div class="form-group">
                <label for="restrooms">Restrooms:</label>
                <input type="text" class="form-control" name="restrooms" value={this.state.restrooms} onChange={this.onChange} placeholder="Restrooms" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditEvent;
