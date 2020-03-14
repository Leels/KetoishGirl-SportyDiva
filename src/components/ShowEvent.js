import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class ShowEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      event: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('events').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          event: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('events').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    const pageHeight = {
      paddingTop: "30px",
      paddingBottom: "250px"
    }
    const back = {
      paddingTop: "12px",
      textAlign: "center"
    }

    const colorLime = {
      backgroundColor: "#F0F4C3",
      paddingLeft: "10px",
      fontSize: "120%"
    }

    const colorGrey = {
      backgroundColor: "#eceff1",
      paddingLeft: "10px",
      fontSize: "120%"
    }

    return (
      <div class="container pageHeight">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h1>Sporty Diva</h1>
            <h2 style={back} class="panel-title">
              {this.state.event.name}
            </h2>
          </div>
          <br/>
          <a href={this.state.event.registrationLink}>
          <h4 align="center">Register here!</h4>
          </a>
          <br/>
          <div class="panel-body">
            <dl>
            <div style={colorLime}>
            <dt>Date</dt>
            <dd>{this.state.event.date}</dd>
            </div>
            <div style={colorGrey}>
              <dt>Pay it Forward Mission</dt>
              <dd>{this.state.event.mission}</dd>
              </div>
              <div style={colorLime}>
              <dt>Course Description</dt>
              <dd>{this.state.event.course}</dd>
              </div>
              <div style={colorGrey}>
              <dt>Event Day Schedule</dt>
              <dd>{this.state.event.schedule}</dd>
              </div>
              <div style={colorLime}>
              <dt>Timing</dt>
              <dd>{this.state.event.timing}</dd>
              </div>
              <div style={colorGrey}>
              <dt>Location</dt>
              <dd>{this.state.event.address}</dd>
              </div>
              <div style={colorLime}>
              <dt>Restrooms</dt>
              <dd>{this.state.event.restrooms}</dd>
              </div>
            </dl>
            <Link to={`/editevent/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
            <h4 style={back}><Link to="/EventList">Back to Event List</Link></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowEvent;
