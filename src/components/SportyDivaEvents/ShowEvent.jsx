import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCard, MDBCol} from "mdbreact";
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
    document.body.scrollTop = 0;
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
      this.props.history.push("/EventsPage")
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
      backgroundColor: "#FBF8F2",
      padding: "15px",
    }

    const colorGrey = {
      backgroundColor: "#fff",
      padding: "15px",
    }

    const title = {
      paddingBottom: "10px",
    }

    const center = {
      display: "block",
      margin: "40px auto",
    }

    const newMargins = {
      margin: "40px auto 20px auto"
    }

    const cardStyles = {
      border: "1px solid #dfdfdf",
      borderRadius: "2px",
      boxShadow: "0px 0px 15px #dfdfdf",
    }

    return (
      <div class="pageHeight">
        <div class="section panel panel-default">
          <div class="panel-heading">
          <h2 style={newMargins}>SPORTY DIVA</h2>
            <h3 style={newMargins} class="panel-title">
              {this.state.event.name}
            </h3>
        </div>
          <a href={this.state.event.registrationLink}>
          <button style={center} className="btn btn-primary">Register here!</button>
          </a>
          <div class="panel-body">
          <MDBRow center>
          <MDBCol size="12" sm="6" lg="10">
            <dl>
          <MDBCard style={cardStyles}>
            <div style={colorLime}>
            <dt style={title}>DATE</dt>
            <dd>{this.state.event.date}</dd>
            </div>
            <div style={colorGrey}>
              <dt style={title}>PAY IT FORWARD MISSION</dt>
              <dd>{this.state.event.mission}</dd>
              </div>
              <div style={colorLime}>
              <dt style={title}>COURSE DESCRIPTION</dt>
              <dd>{this.state.event.course}</dd>
              </div>
              <div style={colorGrey}>
              <dt style={title}>EVENT DAY SCHEDULE</dt>
              <dd>{this.state.event.schedule}</dd>
              </div>
              <div style={colorLime}>
              <dt style={title}>TIMING</dt>
              <dd>{this.state.event.timing}</dd>
              </div>
              <div style={colorGrey}>
              <dt style={title}>LOCATION</dt>
              <dd>{this.state.event.address}</dd>
              </div>
              <div style={colorLime}>
              <dt style={title}>RESTROOMS</dt>
              <dd>{this.state.event.restrooms}</dd>
              </div>
            </MDBCard>
            </dl>
            </MDBCol>
            </MDBRow>
            <MDBContainer>
              <MDBRow style={{marginLeft: "72px"}}>
            <Link to={`/editevent/${this.state.key}`}>
            <EditButton/>
            </Link>
            <div onClick={this.delete.bind(this, this.state.key)}>
              <DeleteButton/>
            </div>
            </MDBRow>
            </MDBContainer>
            <h4 style={back}><Link to="/EventsPage">Back to Event List</Link></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowEvent;
