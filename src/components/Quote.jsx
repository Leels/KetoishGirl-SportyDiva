import React from "react";
import ReactWOW from 'react-wow';
import { MDBRow } from "mdbreact";



function Quote(){

const quoteStyles = {
  backgroundColor: "#88d498",
  width: "800px",
  margin: "40px auto 0 auto",
  padding: "15px",
  boxShadow: "0px 0px 15px #dfdfdf",
}

  return (
      <div className="pageHeight">
        <div className="section">
            <MDBRow center>
                <ReactWOW animation="fadeInUp">
                  <div style={quoteStyles}>
                  <h4><i class="fas fa-quote-left"/> I've always believed that one woman's success can only help another woman's success."- Gloria Vanderbilt</h4>
                  </div>
                </ReactWOW>
             </MDBRow>
        </div>
      </div>
  );
}

export default Quote;
