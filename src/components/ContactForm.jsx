import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';

class ContactForm extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('contactInformation');
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      isSubmitted: false,
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = this.state;

    this.ref.add({
      name,
      email,
      subject,
      message
    }).then((docRef) => {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      this.props.history.push("/")
    })
  }

  render() {
    const { name, email, subject, message } = this.state;

    return (
    <div class="container pageHeight">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1 class="panel-title">
            Contact Ketoish Girl
          </h1>
        </div>
        <br/>
        <h5 align="center">Got a question? I'd love to hear from you! Send me a message and I'll respond as soon as possible.</h5>
        <br/>
        <div class="panel-body">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="name">Name*</label>
              <input type="text" class="form-control" name="name" placeholder="First and Last Name" value={name} onChange={this.onChange}/>
            </div>
            <div class="form-group">
              <label for="email">Email*</label>
              <input type="text" class="form-control" name="email" placeholder="example@example.com" value={email} onChange={this.onChange}/>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" class="form-control" name="subject" placeholder="Subject" value={subject} onChange={this.onChange}/>
            </div>
            <div class="form-group">
              <label for="message">Your Message*</label>
              <textArea class="form-control" name="message" placeholder="Your message ..." cols="80" rows="3" onChange={this.onChange}></textArea>
            </div>
            <button type="submit" class="btn btn-success">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
}

export default ContactForm;
