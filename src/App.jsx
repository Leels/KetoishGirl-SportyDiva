import React, { Component} from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import KetoBasics from './components/KetoBasics/KetoBasics';
import MyStory from './components/MyStory/MyStory';
import Resources from './components/Resources/Resources';
import ScheduleAppointment from './components/ScheduleAppointment/ScheduleAppointment';
import EventList from './components/SportyDivaEvents/EventList';
import Footer from './components/Footer';
import EditEvent from './components/SportyDivaEvents/EditEvent';
import CreateEvent from './components/SportyDivaEvents/CreateEvent';
import ShowEvent from './components/SportyDivaEvents/ShowEvent';
import ContactForm from './components/Contact/ContactForm';
import AdminLogin from './components/Login/AdminLogin';
import PhotoUpload from './components/SportyDivaEvents/PhotoUpload';
import "./App.css"
import AuthProvider from './Auth';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
      <AuthProvider>
      <Router>
      <Navbar />
      <Route exact path='/' component={LandingPage} />
      <Route path='/adminlogin' component={AdminLogin} />
      <Route path='/eventlist' component={EventList} />
      <Route path='/editevent/:id' component={EditEvent} />
      <PrivateRoute path='/createevent' component={CreateEvent} />
      <Route path='/showevent/:id' component={ShowEvent} />
      <Route exact path='/ketobasics' component={KetoBasics} />
      <Route exact path='/mystory' component={MyStory} />
      <Route exact path='/resources' component={Resources} />
      <Route exact path='/scheduleappointment' component={ScheduleAppointment} />
      <Route exact path='/contact' component={ContactForm} />
      <Route exact path='/photoupload' component={PhotoUpload} />
      </Router>
      <Footer />
      </AuthProvider>
      </div>
    );
  }
}

export default App;
