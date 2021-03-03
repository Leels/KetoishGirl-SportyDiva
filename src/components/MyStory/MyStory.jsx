import React from "react";
import ReactWOW from 'react-wow';
import { MDBCol, MDBRow, } from "mdbreact";

function MyStory() {

  const imageStyles = {
    float: "right",
    margin: "0px 0 0 15px",
    boxShadow: "0px 0px 15px #dfdfdf",
    borderRadius: "2px",
    height: "320px",
    weight: "auto"
  }

  const imageStyles2 = {
    float: "left",
    boxShadow: "0px 0px 15px #dfdfdf",
    borderRadius: "2px",
    height: "190px",
    width: "auto",
    margin: "0 15px 0 0"
  }

  return (
    <div id="myStory" className="pageHeight">
      <div className="section">
        <ReactWOW animation="fadeInUp">
          <h2>MY STORY</h2>
        </ReactWOW>
        <MDBRow center>
          <MDBCol size="12" sm="6" lg="10" style={{
            textAlign: "justify",
            textJustify: "inter-word", fontSize: "18px"
          }}>
            <ReactWOW animation="fadeInUp">
              <img style={imageStyles2} src="images/rosebefore2.jpeg" alt="" />
              <p>I woke up one morning not too long ago and caught a glimpse of myself as I walked past a mirror and thought - "what the hell happened here?” The absolute truth was that I'd been slowly gaining weight since 2015... 38 pounds to be exact!</p>
              <p>I've been a runner since 2002. Running, lifting weights, cycling and running races are my all time passions. However, as  time went on, I knew that I couldn't continue to ignore the extra weight.</p>
              <img style={imageStyles} src="images/roseketoaf.jpg" alt="" />
              <p>I don't believe in "meal plans" or counting calories. I definitely believe that food should taste good. I think that we all have our own culture, quirks and things about food and that a “one plan approach" does not work for everyone.  We are individuals and our food choices and preferences reflect that.</p>
              <p>After doing several months of research on the Ketogenic Diet, Intermittent Fasting and HFLC Diets,  I decided to start implementing some of the principles that I knew I would enjoy and stick with.   Ultimately I have created  my own “Ketoish” program and have been experiencing amazing results.</p>
            </ReactWOW>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}

export default MyStory;
