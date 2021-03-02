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
          style={{ width: '50vw', height: 'auto', margin: 'auto', marginBottom: '40px' }}
        >
          <MDBCarouselInner style={{ boxShadow: "0px 0px 15px #dfdfdf" }}>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="./secondaryImg/running.jpg"
                  alt="First slide"
                  style={{ height: '420px', width: 'auto', fit: 'cover' }}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="./secondaryImg/morerunning.jpg"
                  alt="Second slide"
                  style={{ height: '420px', width: 'auto', fit: 'cover' }}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="secondaryImg/HalfMarathon.png"
                  alt="Third slide"
                  style={{ height: '420px', width: 'auto', fit: 'cover' }}
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
