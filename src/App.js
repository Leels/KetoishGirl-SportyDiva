import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import KetoBasics from './components/KetoBasics';
import MyStory from './components/MyStory';
import Resources from './components/Resources';
import ScheduleAppointment from './components/ScheduleAppointment';
import EventList from './components/EventList';
import Footer from './components/Footer';
import EditEvent from './components/EditEvent';
import CreateEvent from './components/CreateEvent';
import ShowEvent from './components/ShowEvent';
import ContactForm from './components/ContactForm';
import AdminLogin from './components/AdminLogin';
import "./App.css"
import AuthProvider from './Auth';
import AdminSignup from './components/AdminSignup';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
      <AuthProvider>
      <Router>
      <Navbar />
      <PrivateRoute exact path='/' component={LandingPage} />
      <Route path='/adminlogin' component={AdminLogin} />
      <Route path='/adminsignup' component={AdminSignup} />
      <Route path='/eventlist' component={EventList} />
      <Route path='/editevent/:id' component={EditEvent} />
      <Route path='/createevent' component={CreateEvent} />
      <Route path='/showevent/:id' component={ShowEvent} />
      <Route exact path='/ketobasics' component={KetoBasics} />
      <Route exact path='/mystory' component={MyStory} />
      <Route exact path='/resources' component={Resources} />
      <Route exact path='/scheduleappointment' component={ScheduleAppointment} />
      <Route exact path='/contact' component={ContactForm} />
      </Router>
      <Footer />
      </AuthProvider>
      </div>
    );
  }
}

export default App;
