import react from "react";
import Slider from "react-slick";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import Card from "../Products/Card";

const products = [
  {
    image:
      "https://bshopen.themeposh.net/public/media/17112021171658-600x600-motorbike-yamaha-1.jpg",
    productName: "Yellow (VF1100c)",
    brand: "Roadstar",
    sold: "Carhat",
    price: "5,500",
  },
  {
    image:
      "https://bshopen.themeposh.net/public/media/17112021171658-600x600-motorbike-yamaha-1.jpg",
    productName: "Yellow (VF1100c)",
    brand: "Roadstar",
    sold: "Carhat",
    price: "5,500",
  },
  {
    image:
      "https://bshopen.themeposh.net/public/media/17112021171658-600x600-motorbike-yamaha-1.jpg",
    productName: "Yellow (VF1100c)",
    brand: "Roadstar",
    sold: "Carhat",
    price: "5,500",
  },
  {
    image:
      "https://bshopen.themeposh.net/public/media/17112021171658-600x600-motorbike-yamaha-1.jpg",
    productName: "Yellow (VF1100c)",
    brand: "Roadstar",
    sold: "Carhat",
    price: "5,500",
  },
  {
    image:
      "https://bshopen.themeposh.net/public/media/17112021171658-600x600-motorbike-yamaha-1.jpg",
    productName: "Yellow (VF1100c)",
    brand: "Roadstar",
    sold: "Carhat",
    price: "5,500",
  },
  {
    image:
      "https://bshopen.themeposh.net/public/media/17112021171658-600x600-motorbike-yamaha-1.jpg",
    productName: "Yellow (VF1100c)",
    brand: "Roadstar",
    sold: "Carhat",
    price: "5,500",
  },
];

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

const ProductsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    customPaging: (i) => <div className="custom-dots"></div>,
  };
  return (
    <section className="hero-slider">
      <div className="single-slider">
        <div className="container">
          <div>
            <Slider {...settings}>
              {products.map((product, index) => (
                <div key={index}>
                  <Card
                    image={product.image}
                    brand={product.brand}
                    price={product.price}
                    sold={product.sold}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
