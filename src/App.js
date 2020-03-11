import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
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

function App(){
    return (
      <div>
      <Navbar />
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/eventlist' component={EventList} />
      <Route path='/editevent/:id' component={EditEvent} />
      <Route path='/createevent' component={CreateEvent} />
      <Route path='/showevent/:id' component={ShowEvent} />
      <Route exact path='/ketobasics' component={KetoBasics} />
      <Route exact path='/mystory' component={MyStory} />
      <Route exact path='/resources' component={Resources} />
      <Route exact path='/scheduleappointment' component={ScheduleAppointment} />
      <Route exact path='/contact' component={ContactForm} />
      <Route exact path='/adminlogin' component={AdminLogin} />
      </Switch>
      <Footer />
      </div>
    );
  }

export default App;
