import React, { Component } from 'react';
import firebase from '../../Firebase';
import ReactWOW from 'react-wow';

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

    const logoStyles = {
      fontFamily: "Comfortaa",
      color: "#80deea",
      // color: "#4db6ac",
    }

    return (
    <div className="pageHeight">
      <div className="panel panel-default section">
        <ReactWOW animation="fadeInUp">
        <div className="panel-heading">
          <h1 className="panel-title">
            CONTACT <span style={logoStyles}>KETOISH GIRL</span>
          </h1>
        </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp">
        <h5 align="center" style={{paddingBottom: '40px'}}>Got a question? I'd love to hear from you! Send me a message and I'll respond as soon as possible.</h5>
        </ReactWOW>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
        <ReactWOW animation="fadeInUp">
            <div className="form-group">
              <label for="name">Name*</label>
              <input type="text" className="form-control" name="name" placeholder="First and Last Name" value={name} onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label for="email">Email*</label>
              <input type="text" className="form-control" name="email" placeholder="example@example.com" value={email} onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label for="subject">Subject</label>
              <input type="text" className="form-control" name="subject" placeholder="Subject" value={subject} onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label for="message">Your Message*</label>
              <textArea className="form-control" name="message" placeholder="Your message ..." value={message} cols="80" rows="3" onChange={this.onChange}></textArea>
            </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp">
            <button type="submit" className="btn btn-success">Send</button>
            </ReactWOW>
          </form>
        </div>
      </div>
    </div>
  );
}
}

export default ContactForm;
