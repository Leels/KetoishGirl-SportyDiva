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

    return (
      <div class="container pageHeight">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 align="center" class="panel-title">
              {this.state.event.name}
            </h3>
          </div>
          <br/>
          <div class="panel-body">
            <dl>
            <dt>Date</dt>
            <dd>{this.state.event.date}</dd>
              <dt>Pay it Forward Mission</dt>
              <dd>{this.state.event.mission}</dd>
              <dt>Course Description</dt>
              <dd>{this.state.event.course}</dd>
              <dt>Event Day Schedule</dt>
              <dd>{this.state.event.schedule}</dd>
              <dt>Timing</dt>
              <dd>{this.state.event.timing}</dd>
              <dt>Location</dt>
              <dd>{this.state.event.address}</dd>
              <dt>Restrooms</dt>
              <dd>{this.state.event.restrooms}</dd>
            </dl>
            <Link to={`/editevent/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
            <h4><Link to="/EventList">Back to Event List</Link></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowEvent;
