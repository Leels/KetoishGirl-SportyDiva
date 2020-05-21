import React from "react";
import MyStory from "../MyStory/MyStory";
import KetoBasics from "../KetoBasics/KetoBasics";
import Header from "../Header";
import SportyDivaEvents from "../SportyDivaEvents/SportyDivaEvents";
import ScheduleAppointment from '../ScheduleAppointment/ScheduleAppointment';
import ContactForm from "../Contact/ContactForm";
// import firebase, { app } from '../../Firebase';

function LandingPage(){

  return (
    <div >
      <div >
        <Header/>
        <MyStory/>
        <KetoBasics/>
        <SportyDivaEvents/>
        <ScheduleAppointment/>
        <ContactForm/>
      </div>
    </div>
  );
}

export default LandingPage;
