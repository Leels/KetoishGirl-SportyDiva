import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect} from 'react-router';
import firebase from '../Firebase';
import { AuthContext } from "./Auth.js"

const AdminLogin = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/CreateEvent" />
  }

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
          <form onSubmit={handleLogin}>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" class="form-control" name="email" placeholder="example@example.com"/>
            </div>
            <div class="form-group">
              <label for="password">Email</label>
              <input type="text" class="form-control" name="password" placeholder="******"/>
            </div>
            <button type="submit" class="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default AdminLogin;
