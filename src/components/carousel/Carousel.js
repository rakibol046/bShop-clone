import react from "react";
import Slider from "react-slick";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import slide1 from "../../asset/images/slider-1.jpg";
import slide2 from "../../asset/images/slider-2.jpg";
import slide3 from "../../asset/images/slider-3.jpg";
import slide4 from "../../asset/images/slider-4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

const images = [slide1, slide2, slide3, slide4];

const ArrowRight = (props) => {
  return (
    <button {...props} style={{}} className="arrow-right">
      <BsArrowRight style={{ fontSize: "25px" }} className="arrow-right-icon" />
    </button>
  );
};

const ArrowLeft = (props) => {
  return (
    <button {...props} style={{}} className="arrow-left">
      <BsArrowLeft style={{ fontSize: "25px" }} className="arrow-left-icon" />
    </button>
  );
};

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    customPaging: (i) => <div className="custom-dots"></div>,
  };
  return (
    <section className="hero-slider">
      <div className="single-slider">
        <div className="container">
          <div className="row no-gutters">
            <div className="">
              <div>
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img className="slider-img" src={image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;
