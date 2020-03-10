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
    return (
      <MDBContainer>
        <MDBRow>
        <MDBCol lg="4" md="12" className="mb-3">
        <div class="card">
        <img src="./OrtingTrail.jpg" className="img-fluid z-depth-1" alt="" />
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
    </MDBContainer>
    );
  }
}

export default RunLocations;
