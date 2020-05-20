import React from "react";
import ReactWOW from 'react-wow';
import Text from './Text'
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

function MyStory(){

  return (
    <div id="myStory" className="pageHeight">
      <div className="section">
        <ReactWOW animation="fadeInUp">
          <h2>MY STORY</h2>
        </ReactWOW>
        <Text/>
          <MDBRow center>
          </MDBRow>
      </div>
    </div>
  );
}

export default MyStory;
