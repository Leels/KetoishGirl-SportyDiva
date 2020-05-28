import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBView, MDBMask, MDBBox } from "mdbreact";
import ReactWOW from 'react-wow';

class RunLocations extends Component {
  render() {

    const imageSize = {
      height: "250px",
      maxWidth: "auto",
      // boxShadow: "0px 0px 15px #dfdfdf",
    }
    const subTitle = {
      textAlign: "center",
      padding: "40px auto 40px auto",
    }

    return (
      <MDBContainer>
        <ReactWOW animation="fadeInUp">
        <h3 style={subTitle}>WHERE WE RUN</h3>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <MDBBox style={{boxShadow: "0px 0px 15px #dfdfdf"}}>
            <MDBView hover>
              <img src="./FoothillsTrail.jpg" className="img-fluid z-depth-1" alt="" />
              <MDBMask className="flex-center" overlay="black-light">
                <p className="white-text">Orting Foothills Trail</p>
              </MDBMask>
            </MDBView>
          </MDBBox>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-3">
          <MDBBox style={{boxShadow: "0px 0px 15px #dfdfdf"}}>
            <MDBView hover>
            <div className="card cardShadow">
            <img style={imageSize} src="./ChambersBay3.png" className="img-fluid z-depth-1" alt="" />
            </div>
              <MDBMask className="flex-center" overlay="black-light">
                <p className="white-text">Chambers Bay</p>
              </MDBMask>
           </MDBView>
           </MDBBox>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-3">
          <MDBBox style={{boxShadow: "0px 0px 15px #dfdfdf"}}>
            <MDBView hover>
              <img style={imageSize} src="./FoothillsTrail2.jpeg" className="img-fluid z-depth-1" alt="" />
              <MDBMask className="flex-center" overlay="black-light">
                <p className="white-text">Western Chehalis Trail</p>
              </MDBMask>
           </MDBView>
           </MDBBox>
          </MDBCol>
        </MDBRow>
        </ReactWOW>
        <ReactWOW animation="fadeInUp">
        <p style={{padding: '20px 0 40px 0'}}>All Sporty Diva Run/Walk Events are located throughout the beautiful Puget Sound. You can run towards Mt.Rainier on the Orting Foothills Trail, breathe in the salty fresh sea air at Chambers Bay or follow the ducks around Seattle's Greenlake Park.</p>
        </ReactWOW>
    </MDBContainer>
    );
  }
}

export default RunLocations;
