import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import EventsPage from './components/SportyDivaEvents/EventsPage';
import Footer from './components/Footer';
import EditEvent from './components/SportyDivaEvents/EditEvent';
import CreateEvent from './components/SportyDivaEvents/CreateEvent';
import ShowEvent from './components/SportyDivaEvents/ShowEvent';
import AdminLogin from './components/Login/AdminLogin';
import PhotoUpload from './components/SportyDivaEvents/PhotoUpload';
import "./App.css"
import AuthProvider from './Auth';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router, Route } from 'react-router-dom';
import history from './history';


class App extends Component {
  render() {
    return (
      <div>
        <AuthProvider>
          <Router history={history}>
            <ScrollToTop>
              <Navbar />
              <Route exact path='/' component={LandingPage} />
              <Route path='/adminlogin' component={AdminLogin} />
              <PrivateRoute path='/editevent/:id' component={EditEvent} />
              <PrivateRoute path='/createevent' component={CreateEvent} />
              <Route path='/showevent/:id' component={ShowEvent} />
              <Route path='/eventspage' component={EventsPage} />
              <Route exact path='/photoupload' component={PhotoUpload} />
            </ScrollToTop>
          </Router>
          <Footer />
        </AuthProvider>
      </div>
    );
  }
}

export default App;
