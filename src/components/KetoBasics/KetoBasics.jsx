import React from "react";
import ReactWOW from 'react-wow';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



function KetoBasics(){

const imageStyles = {
  objectFit: "cover",
  height: "270px",
  width: "auto",
  float: "right",
  margin: "0 0 0 15px",
  boxShadow: "0px 0px 15px #dfdfdf",
  borderRadius: "2px",
}

// const fastingMethods = {
//   backgroundColor: "#f3e9d2",
//   margin: "20px",
//   padding: "15px",
//   boxShadow: "0px 0px 15px #dfdfdf"
// }

const diets = {
  backgroundColor: "#f3e9d2",
  margin: "40px",
  padding: "15px",
  boxShadow: "0px 0px 15px #dfdfdf"
}

const questions = {
  textAlign: "center",
  padding: "10px 0"
}

const subTitle = {
  padding: "15px 0",
  // fontWeight: "bold",
}

  return (
      <div id="ketoBasics" className="pageHeight">
        <div className="section">
          <ReactWOW animation="fadeInUp">
            <h2>KETO BASICS</h2>
          </ReactWOW>
          <MDBContainer>
            <MDBRow>
              <MDBCol style={{backgroundColor: "white"}} size="10" md="12">
              <ReactWOW animation="fadeInUp">
                <img style={imageStyles} src="breakfast.jpg" alt="" />
              </ReactWOW>
              <ReactWOW animation="fadeInUp">
                <p>The ketogenic diet is an extremely low-carb, high-fat diet. It involves drastically reducing carbohydrate intake and replacing it with fat. This reduction in carbs puts your body into a metabolic state called ketosis.</p>
                <p>The ketogenic diet was founded in the 1920’s when doctors started using it to control seizures in patients with epilepsy. It began with a nutritional plan made of low carbohydrates, fat, and protein. With low glycogen stores, the body has to use fat instead of carbohydrates for energy. Nicknamed ketosis, this process makes two acids in the blood, ketones and decanoic acid, that our bodies and brains use for fuel. This diet has been effective for raising energy levels, lowering weight, and increasing quality of life.</p>
              </ReactWOW>
              <ReactWOW animation="fadeInUp">
                <div style={diets}>
                <p >Versions of the keto diet:</p>
                <ul>
                  <li><strong>Standard Ketogenic Diet (SKD)</strong> is a very low-carb, moderate-protein and high-fat diet (75% fat, 20% protein and only 5% carbs).</li>
                  <li><strong>Cyclical Ketogenic Diet (CKD)</strong> allows a person to eat with periods of higher-carb like 5 ketogenic days followed by 2 high-carb days.</li>
                  <li><strong>Targeted Ketogenic Diet (TKD)</strong> allows you to add carbs around your workouts.</li>
                  <li><strong>High-protein Ketogenic Diet</strong> is like the standard ketogenic diet, but it has more protein (60% fat, 35% protein and 5% carbs).</li>
                  <li><strong>Lazy Keto</strong> follows the same guidelines of the Keto Diet including tracking your carbohydrates but somewhat casually, without a ton of stress. The carbs can be from healthy sources or processed foods so long as you count them.</li>
                  <li><strong>Dirty Keto</strong> is essentially the same as the SDK but you can eat anything you want like junk food and fast food so long as there are minimal carbs involved.</li>
                </ul>
                </div>
                </ReactWOW>
                </MDBCol>
            </MDBRow>
            <MDBRow>
            <ReactWOW animation="fadeInUp">
              <MDBCol size="4" md="4">
                <h5 style={questions}>What are ketones?</h5>
                <p>Ketoes are small fuel molecules made by the liver from fat and are an alternative source of fuel for the body and are used when glucose levels are low. Ketones, B-hydroxybutyrate (BHB), acetoacetate (ACA) and acetone, are the by-products of fat breakdown. Ketones can be used by the tissues, including the brain, in the body in much the same way as glucose, and are thought to be a superior fuel source to glucose.</p>
              </MDBCol>
              <MDBCol size="4" md="4">
              <h5 style={questions}>What is ketosis?</h5>
              <p>Ketosis is a metabolic state where your body uses fat and ketones as it's main source of fuel instead of carbohydrates. Being in a state of ketosis is safe. This is a naturally occurring process in the body when you break down fat. Most people have been in ketosis at some point, due to exercise or dietary changes, although not usually long enough to experience the amazing benefits conferred through elevated ketones over an extended period of time.</p>
              </MDBCol>
              <MDBCol size="4" md="4">
              <h5 style={questions}>How do I know if I’m in ketosis?</h5>
              <p>Some signs that you may be in ketosis are that you are able to go longer inbetween meals, you have reduced cravings, appetite suppression, are losing weight, better focus and increased energy. You can also take a blood test using a glucometer with ketone strips for the most accurate reading of ketones in your blood. I measure my ketone and glucose levels everyday using a Keto Mojo Meter.</p>
              </MDBCol>
              </ReactWOW>
            </MDBRow>
            {/* <MDBRow>
            <ReactWOW animation="fadeInUp">
              <h5 style={subTitle}>Intermittent Fasting</h5>
              <p>Intermittent fasting (IF) is an eating pattern that cycles between periods of fasting and eating. Common intermittent fasting methods involve daily 16-hour fasts or fasting for 24 hours, twice per week. There are so many ways you can do intermittent fasting but the important thing is to find a pattern that works for you.</p> 
             </ReactWOW>
                <ReactWOW animation="fadeInUp">
                  <div style={fastingMethods}>
                    <p>Common IF Methods:</p>
                  <ul>
                    <li>The Eat-Stop-Eat Method which involves fasting for 24 hours once or twice a week.</li>
                    <li>The 5:2 Method which permits you to consume 500–600 calories on two non-consecutive days of the week and then eat normally the other 5 days.</li>
                    <li>The 16/8 Method, also known as the Leangains protocol, which essentially involves skipping breakfast and restricting your daily eating period to 8 hours. For example, you would eat 12 pm to 8 pm and then fast for the 16 hours in between. I personally use this variation but with a 18/6 or 19/5 pattern.</li>
                  </ul>
                  </div>
                </ReactWOW>
            </MDBRow>
            <ReactWOW animation="fadeInUp">

            </ReactWOW> */}
          </MDBContainer>
        </div>
      </div>
  );
}

export default KetoBasics;
