import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import ReactWOW from 'react-wow';

const SportyDivaCarousel = () => {
  return (
    <MDBContainer>
      <ReactWOW animation="fadeInUp">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        slide
        style={{ width: '50vw', margin: 'auto', marginBottom: '40px'}}
      >
        <MDBCarouselInner style={{boxShadow: "0px 0px 15px #dfdfdf"}}>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://aktivmotkreft.no/wp-content/uploads/2018/10/l%C3%B8pegruppe4.jpg"
                alt="First slide"
                style={{height: '420px', width: 'auto', fit: 'cover'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="./HalfMarathon.png"
                alt="Second slide"
                style={{height: '420px', width: 'auto', fit: 'cover'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://events.discoverstillwater.com/wp-content/uploads/sites/events.discoverstillwater.com/images/2018/12/event-featured-RunStillwater-1543423138.jpeg"
                alt="Third slide"
                style={{height: '420px', width: 'auto', fit: 'cover'}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </ReactWOW>
    </MDBContainer>
  );
}

export default SportyDivaCarousel;
