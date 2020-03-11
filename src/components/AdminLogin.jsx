import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';

class AdminLogin extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('users');
    this.state = {
      name: '',
      email: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email } = this.state;

    this.ref.add({
      name,
      email,
    }).then((docRef) => {
      this.setState({
        name: '',
        email: '',
      });
      this.props.history.push("/")
    })
  }

  render() {
    const { name, email } = this.state;

    return (
    <div class="container pageHeight">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1 class="panel-title">
            ADMIN LOGIN
          </h1>
        </div>
        <br/>
        <div class="panel-body">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="name">Username</label>
              <input type="text" class="form-control" name="name" placeholder="Admin username" value={name} onChange={this.onChange}/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" class="form-control" name="email" placeholder="example@example.com" value={email} onChange={this.onChange}/>
            </div>
            <button type="submit" class="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
}

export default AdminLogin;
