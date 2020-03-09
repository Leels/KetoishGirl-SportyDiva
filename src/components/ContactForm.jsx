import React from "react";
import ReactDOM from 'react-dom';
import firebase from '../Firebase';



function ContactForm(){

  const pageHeight = {
    paddingBottom: "250px"
  }

  return (
    <div style={pageHeight} class="container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">
            Contact Ketoish Girl
          </h3>
        </div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" name="name" placeholder="First and Last Name" />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="text" class="form-control" name="email" placeholder="example@example.com" />
            </div>
            <div class="form-group">
              <label for="phone">Phone:</label>
              <input type="text" class="form-control" name="phone" placeholder="253-123-4567" />
            </div>
            <div class="form-group">
              <label for="message">Your Message:</label>
              <textArea class="form-control" name="message" placeholder="Your message ..." cols="80" rows="3"></textArea>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
