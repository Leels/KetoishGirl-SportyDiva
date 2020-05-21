import React from "react";
import ReactWOW from 'react-wow';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

function Text(){

  return (
    <div>
      <div style={{columnMount: "3"}}>
        <ReactWOW animation="fadeInUp">
        <p>
          When I was a teenager, my weight fluctuated between 180 and 190 pounds while I alternated between starving myself and binging. As a child I was always thin but I would overeat and not gain any weight. I ate just because -- whether I was sad, happy, angry, stressed or bored. By the time I was 20, I was married and had a daughter. My weight had soared to 300 pounds during my pregnancy and remained there until March 2002. After I had my daughter, I began exercising regularly; little did I know that my passion for fitness would begin even though I couldn't get my emotional/compulsive eating under control. Exercise became a form of therapy and I immediately started to feel better.</p>
          <p>
          I tried dieting excessively and used diet pills off and on for years. Nothing worked. I would lose weight, get comfortable and revert back to my old eating habits and essentially the weight would come back again, virtually overnight. I could not understand what was happening to me. I was not able to make the connection that I was eating excessively. I was completely oblivious to the fact that I was dealing with life by stuffing myself with food.</p>
          <p>
          I eventually ended up going to counseling and the therapist helped me to identify the reasons that I was overweight and eating excessively, but I still refused to do anything about my weight. I continued to exercise, but chose to remain clueless about my eating because it was easier for me to continue living with the way things were rather than to make an effort to change my life circumstances.
          </p>
          <p>
          I was overweight, depressed and gave up every time life pushed me. I stopped dreaming and had no guts. I felt that if I tried to do all the right things in life (be a good person, mother, wife, friend, employee, etc.), I'd be safe and have a lot of friends who'd really like me and a family that loved me. But the truth is, I let life beat me into submission. Deep down inside I was terrified of taking risks. I really wanted to be successful with losing weight and keeping it off, but my fear of failing was greater than the joy of succeeding.
          </p>
        </ReactWOW>
      </div>
    </div>
  );
}

export default Text;