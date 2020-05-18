import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { EditButton, DeleteButton } from './AdminButtons';

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
  
    const back = {
      padding: "20px",
      textAlign: "center",
    }

    const colorLime = {
      backgroundColor: "#F0F4C3",
      margin: "10px",
      padding: "10px",
      // fontSize: "110%"
    }

    const colorGrey = {
      backgroundColor: "#eceff1",
      margin: "10px",
      padding: "10px",
      // fontSize: "110%"
    }

    const title = {
      paddingBottom: "10px",
      textDecoration: "underline",
    }

    const center = {
      display: "block",
      margin: "40px auto"
    }

    const newMargins = {
      margin: "40px auto 20px auto"
    }

    return (
      <div class="pageHeight">
        <div class="section panel panel-default">
          <div class="panel-heading">
          <ReactWOW animation="fadeInUp">
          <h2 style={newMargins}>SPORTY DIVA</h2>
          </ReactWOW>
          <ReactWOW animation="fadeInUp">
            <h3 style={newMargins} class="panel-title">
              {this.state.event.name}
            </h3>
            </ReactWOW>
        </div>
        <ReactWOW animation="fadeInUp">
          <a href={this.state.event.registrationLink}>
          <button style={center} className="btn btn-primary">Register here!</button>
          </a>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
          <div class="panel-body">
            <dl>
            <div style={colorLime}>
            <dt style={title}>Date</dt>
            <dd>{this.state.event.date}</dd>
            </div>
            <div style={colorGrey}>
              <dt style={title}>Pay it Forward Mission</dt>
              <dd>{this.state.event.mission}</dd>
              </div>
              <div style={colorLime}>
              <dt style={title}>Course Description</dt>
              <dd>{this.state.event.course}</dd>
              </div>
              <div style={colorGrey}>
              <dt style={title}>Event Day Schedule</dt>
              <dd>{this.state.event.schedule}</dd>
              </div>
              <div style={colorLime}>
              <dt style={title}>Timing</dt>
              <dd>{this.state.event.timing}</dd>
              </div>
              <div style={colorGrey}>
              <dt style={title}>Location</dt>
              <dd>{this.state.event.address}</dd>
              </div>
              <div style={colorLime}>
              <dt style={title}>Restrooms</dt>
              <dd>{this.state.event.restrooms}</dd>
              </div>
            </dl>
            <MDBContainer>
              <MDBRow>
            <Link to={`/editevent/${this.state.key}`}>
            <EditButton/>
            </Link>
            <div onClick={this.delete.bind(this, this.state.key)}>
              <DeleteButton/>
            </div>
            </MDBRow>
            </MDBContainer>
            <h4 style={back}><Link to="/SportyDivaEvents">Back to Event List</Link></h4>
          </div>
        </ReactWOW>
        </div>
      </div>
    );
  }
}

export default ShowEvent;
