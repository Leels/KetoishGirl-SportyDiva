import React from "react";
import MyStory from "../MyStory/MyStory";
import Quote from "../Quote";
import KetoBasics from "../KetoBasics/KetoBasics";
import Header from "../Header";
import SocialMedia from "../SocialMedia";
import SportyDivaEvents from "../SportyDivaEvents/SportyDivaEvents";
import ScheduleAppointment from '../ScheduleAppointment/ScheduleAppointment';
import ContactForm from "../Contact/ContactForm";
// import firebase, { app } from '../../Firebase';

function LandingPage(){

  return (
    <div >
      <div >
        <Header/>
        {/* <Quote/> */}
        <MyStory/>
        <KetoBasics/>
        <SportyDivaEvents/>
        <ScheduleAppointment/>
        {/* <SocialMedia/> */}
        <ContactForm/>
      </div>
    </div>
  );
}

export default LandingPage;
