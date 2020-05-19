import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../Firebase.js";
import {AuthContext}  from "../../Auth.js";

const AdminLogin = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="pageHeight">
      <div className="panel panel-default section">
        <div className="panel-heading">
          <h2 className="panel-title">
            ADMIN LOGIN</h2>
        </div>
        <br/>
        <div className="panel-body">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="text" className="form-control" name="email" placeholder="example@example.com"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" placeholder="********"/>
            </div>
            <button type="submit" className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AdminLogin);
