import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

class RunLocations extends Component {
  render() {

    const imageSize = {
      maxHeight: "1000px",
      minHeight: "100px",
      maxWidth: "auto",
    }
    const subTitle = {
      textAlign: "center",
      paddingBottom: "18px",
      paddingTop: "30px"
    }
    return (
      <MDBContainer>
      <h2 style={subTitle}>Where We Run</h2>
        <MDBRow>
        <MDBCol lg="4" md="12" className="mb-3">
        <div class="card">
        <img src="./FoothillsTrail.jpg" className="img-fluid z-depth-1" alt="" />
        </div>
        </MDBCol>
          <MDBCol lg="4" md="12" className="mb-3">
          <div style={imageSize} class="card">
          <img src="./ChambersBay3.png" className="img-fluid z-depth-1" alt="" />
          </div>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-3">
          <div style={imageSize} class="card">
            <img src="./FoothillsTrail2.jpeg" className="img-fluid z-depth-1" alt="" />
            </div>
          </MDBCol>
      </MDBRow>
      <p>All <strong>Sporty Diva Run/Walk Events</strong> are located throughout the beautiful Puget Sound. You can run towards Mt.Rainier on the Orting Foothills Trail, breathe in the salty fresh sea air at Chambers Bay or follow the ducks around Seattle's Greenlake Park. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </MDBContainer>
    );
  }
}

export default RunLocations;
