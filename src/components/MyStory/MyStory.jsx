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
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jjJqrTlOwv8?start=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </MDBRow>
      </div>
    </div>
  );
}

export default MyStory;
