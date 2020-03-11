import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import "./FAQs.css"



function FAQs(){

  const subTitle = {
    textAlign: "center",
    paddingBottom: "30px",
    paddingTop: "30px"
  }
  return (
    <MDBContainer class="container pageHeight">
    <h2 style={subTitle} align="center">SPORTY DIVA FAQS</h2>
      <MDBRow align="center">
      <MDBCol lg="4" md="12" className="mb-3">
      <div class="flip-card card">
      <div class="flip-card-inner">
        <div class="flip-card-front front-lime card align-items-center justify-content-center">
        <h3>Where can I register for an event?</h3>
        </div>
        <div class="flip-card-back back-lime card align-items-center justify-content-center">
        <p>Registration is available online only at SportyDiva.com or RunSignUp.com. Day of race registration is not available.</p>
        </div>
      </div>
      </div>
      </MDBCol>
        <MDBCol lg="4" md="12" className="mb-3">
        <div class="flip-card card">
        <div class="flip-card-inner">
          <div class="flip-card-front front-grey card align-items-center justify-content-center">
          <h3>What is a 'Pay it Forward Mission'?</h3>
          </div>
          <div class="flip-card-back back-grey card align-items-center justify-content-center">
          <p>$5.00 of every registration cost is donated to a local charity. Past Pay it Forward Recipients include Northwest Harvest, Pierce County Humane Society, Thurston County Food Bank, PAWS and Northwest Harvest.</p>
          </div>
        </div>
        </div>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-3">
        <div class="flip-card card">
        <div class="flip-card-inner">
          <div class="flip-card-front front-blue card align-items-center justify-content-center">
          <h3>Who can participate in an event?</h3>
          </div>
          <div class="flip-card-back back-blue card align-items-center justify-content-center">
          <p>Sporty Diva Walk/Run Events are geared for people of all ages and athletic abilities and for folks who are beginning or returning to fitness.</p>
          </div>
        </div>
        </div>
        </MDBCol>
    </MDBRow>
    <MDBRow align="center">
    <MDBCol lg="4" md="12" className="mb-3">
    <div class="flip-card card">
    <div class="flip-card-inner">
      <div class="flip-card-front front-grey card align-items-center justify-content-center">
      <h3>Can an entry be refunded or transferred to another participant?</h3>
      </div>
      <div class="flip-card-back back-grey card align-items-center justify-content-center">
      <p>No, unfortunately we can not offer refunds or transfer entries to another person.</p>
      </div>
    </div>
    </div>
    </MDBCol>
      <MDBCol lg="4" md="12" className="mb-3">
      <div class="flip-card card">
      <div class="flip-card-inner">
        <div class="flip-card-front front-blue card align-items-center justify-content-center">
        <h3>Can I switch my race distance after I register?</h3>
        </div>
        <div class="flip-card-back back-blue card align-items-center justify-content-center">
        <p>Yes! You can switch your race distance when you check in and pick up your bib on race day.</p>
        </div>
      </div>
      </div>
      </MDBCol>
      <MDBCol lg="4" md="12" className="mb-3">
      <div class="flip-card card">
      <div class="flip-card-inner">
        <div class="flip-card-front front-lime card align-items-center justify-content-center">
        <h3>Will this race be timed and recorded?</h3>
        </div>
        <div class="flip-card-back back-lime card align-items-center justify-content-center">
        <p>A timer will be on the table to log everyone's finish times and posted on SportyDiva.com post race. Please note that it can take up to 3 days to post finish times.</p>
        </div>
      </div>
      </div>
      </MDBCol>
  </MDBRow>
  <MDBRow align="center">
  <MDBCol lg="4" md="12" className="mb-3">
  <div class="flip-card card">
  <div class="flip-card-inner">
    <div class="flip-card-front front-blue card align-items-center justify-content-center">
    <h3>Will this race count as a "qualifying" race for my running club/group/team?</h3>
    </div>
    <div class="flip-card-back back-blue card align-items-center justify-content-center">
    <p>Please refer to your club/group/team's guidelines to determine if this event will meet their requirements. We are not able to guarantee a specific number of participants in any race distance/category.</p>
    </div>
  </div>
  </div>
  </MDBCol>
    <MDBCol lg="4" md="12" className="mb-3">
    <div class="flip-card card">
    <div class="flip-card-inner">
      <div class="flip-card-front front-lime card align-items-center justify-content-center">
      <h3>Is there a time limit for each race?</h3>
      </div>
      <div class="flip-card-back back-lime card align-items-center justify-content-center">
      <p>NO WAY!!! THIS IS YOUR DAY.. YOUR RACE.. GO AHEAD AND DO IT YOUR WAY!</p>
      </div>
    </div>
    </div>
    </MDBCol>
    <MDBCol lg="4" md="12" className="mb-3">
    <div class="flip-card card">
    <div class="flip-card-inner">
      <div class="flip-card-front front-grey card align-items-center justify-content-center">
      <h3>Will there be restrooms available at each race?</h3>
      </div>
      <div class="flip-card-back back-grey card align-items-center justify-content-center">
      <p>The number of restrooms/porta-potties vary depending on the trail, however there is always at least one available.</p>
      </div>
    </div>
    </div>
    </MDBCol>
</MDBRow>
<MDBRow align="center">
<MDBCol lg="4" md="12" className="mb-3">
<div class="flip-card card">
<div class="flip-card-inner">
  <div class="flip-card-front front-lime card align-items-center justify-content-center">
  <h3>What about food?</h3>
  </div>
  <div class="flip-card-back back-lime card align-items-center justify-content-center">
  <p>Snacks like trail mix, red vines, chips, cookies, candy, soda, water and juice will be available at the start/finish line. If you have any specific fuel or hydration requirements please bring these items with you to ensure that you have a good race.</p>
  </div>
</div>
</div>
</MDBCol>
  <MDBCol lg="4" md="12" className="mb-3">
  <div class="flip-card card">
  <div class="flip-card-inner">
    <div class="flip-card-front front-grey card align-items-center justify-content-center">
    <h3>Are goody bags or medals provided?</h3>
    </div>
    <div class="flip-card-back back-grey card align-items-center justify-content-center">
    <p>All participants will receive a finisher's medal and gift from Sporty Diva.</p>
    </div>
  </div>
  </div>
  </MDBCol>
  <MDBCol lg="4" md="12" className="mb-3">
  <div class="flip-card card">
  <div class="flip-card-inner">
    <div class="flip-card-front front-blue card align-items-center justify-content-center">
    <h3>Will we have any fun at the event?</h3>
    </div>
    <div class="flip-card-back back-blue card align-items-center justify-content-center">
    <p>Fun is the utmost priority at all Sporty Diva events! We will have a blast!</p>
    </div>
  </div>
  </div>
  </MDBCol>
</MDBRow>
  </MDBContainer>
  );
}

export default FAQs;
