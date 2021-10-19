import React from "react";
import { Carousel,} from "react-bootstrap";
import "./Banner.css"

const Banner = () => {
  return (
    <div className = "containers">

<Carousel>
  <Carousel.Item>
    <img
      className="w-100 img-fluid"
      // style = {{height:"95vh"}}
      src="https://medex.com.bd/storage/images/news/original/Gi1C0imugXHF9vBiQxQqPT7ALljp3i.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We are here</h3>
      <p>Do not worry</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style = {{height:"95vh"}}
      src="https://mainequalitycounts.org/wp-content/uploads/2020/09/Health-Care-options.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>We Care</h3>
      <p>Everything will be okay</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style = {{height:"95vh"}}
      src="https://pure-protection.co.uk/wp-content/uploads/2017/12/manara-medical-center-a-milano-la-cura-della-persona-prima-che-della-patologia-80_1513_786x587.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>We Will</h3>
      <p>be with you</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  );
};

export default Banner;
