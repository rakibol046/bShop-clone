import React from "react";
import "./nav.scss";
import { AiOutlineMenu } from "react-icons/ai";
import CustomCarousel from "../carousel/Carousel";

const Nav = () => {
  //   const carouselData = [
  //     {
  //       id: "1",
  //       imgSrc:
  //         "https://bshopen.themeposh.net/public/media/06082021062332-slider-1.jpg",
  //       link: "#",
  //       alt: "Frist Image",
  //     },
  //     {
  //       id: "2",
  //       imgSrc:
  //         "https://bshopen.themeposh.net/public/media/06082021062313-slider-2.jpg",
  //       link: "#",
  //       alt: "Second Image",
  //     },
  //     {
  //       id: "3",
  //       imgSrc:
  //         "https://bshopen.themeposh.net/public/media/06082021062253-slider-3.jpg",
  //       link: "#",
  //       alt: "Third Image",
  //     },
  //     {
  //       id: "4",
  //       imgSrc:
  //         "https://bshopen.themeposh.net/public/media/06082021062229-slider-4.jpg",
  //       link: "#",
  //       alt: "Fouth Image",
  //     },
  //   ];
  return (
    <div>
      <div className="menu-container">
        <nav className="nav-area">
          <ul className="menu">
            <li className="top-categories">
              <AiOutlineMenu />
              <span> TOP CATEGORIES</span>
              <ul className="category-list">
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Camera</a>
                </li>
                <li>
                  <a href="#">Computer</a>
                </li>
                <li>
                  <a href="#">Fan</a>
                </li>
                <li>
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <a href="#">Health And Beauty</a>
                </li>
                <li>
                  <a href="#">Jewelry & Watch</a>
                </li>
                <li>
                  <a href="#">Laptop</a>
                </li>
                <li>
                  <a href="#">Mobile</a>
                </li>
                <li>
                  <a href="#">Monitor</a>
                </li>
                <li>
                  <a href="#">Motor Bike</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>
                  <a href="#">TV & Videos</a>
                </li>
                <li>
                  <a href="#">Wireless Speakers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" style={{ color: "white" }}>
                HOME
              </a>
            </li>
            <li className="brand">
              <span> BRAND</span>
              <div className="brand-list">
                <div className="menu-list">
                  <h4>Brand 1</h4>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                </div>
                <div className="menu-list">
                  <h4>Brand 1</h4>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                </div>
                <div className="menu-list">
                  <h4>Brand 1</h4>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                </div>
              </div>
            </li>
            <li className="categories">
              <span> CATEGORIES</span>
              <div className="categories-list">
                <div className="menu-list">
                  <h4>Brand 1</h4>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                </div>
                <div className="menu-list">
                  <h4>Brand 1</h4>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span> DROPDOWN</span>
              <div className="dropdown-list">
                <div className="menu-list">
                  <h4>Brand 1</h4>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                  <a href="#">ABCD</a>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="carousel-area">
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
};

export default Nav;
