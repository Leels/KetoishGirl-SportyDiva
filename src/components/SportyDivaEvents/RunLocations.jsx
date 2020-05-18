import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBView, MDBMask } from "mdbreact";
import ReactWOW from 'react-wow';

class RunLocations extends Component {
  render() {

    const imageSize = {
      height: "250px",
      maxWidth: "auto",
    }
    const subTitle = {
      textAlign: "center",
      paddingBottom: "18px",
      paddingTop: "30px"
    }

    return (
      <MDBContainer>
        <ReactWOW animation="fadeInUp">
        <h3 style={subTitle}>WHERE WE RUN</h3>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
            <MDBView hover>
              <div class="card">
              <img style={imageSize} src="./FoothillsTrail.jpg" className="img-fluid z-depth-1" alt="" />
              </div>
              <MDBMask className="flex-center" overlay="black-light">
                <p className="white-text">Orting Foothills Trail</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-3">
            <MDBView hover>
            <div class="card">
            <img style={imageSize} src="./ChambersBay3.png" className="img-fluid z-depth-1" alt="" />
            </div>
              <MDBMask className="flex-center" overlay="black-light">
                <p className="white-text">Chambers Bay</p>
              </MDBMask>
           </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-3">
            <MDBView hover>
              <div class="card">
              <img style={imageSize} src="./FoothillsTrail2.jpeg" className="img-fluid z-depth-1" alt="" />
              </div>
              <MDBMask className="flex-center" overlay="black-light">
                <p className="white-text">Western Chehalis Trail</p>
              </MDBMask>
           </MDBView>
          </MDBCol>
        </MDBRow>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <p style={{paddingTop: '20px'}}>All <strong>Sporty Diva Run/Walk Events</strong> are located throughout the beautiful Puget Sound. You can run towards Mt.Rainier on the Orting Foothills Trail, breathe in the salty fresh sea air at Chambers Bay or follow the ducks around Seattle's Greenlake Park. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </ReactWOW>
    </MDBContainer>
    );
  }
}

export default RunLocations;
