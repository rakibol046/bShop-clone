import React from "react";
import "./bannerItem.scss";
import category1 from "../../asset/images/category-1.jpg";
import category2 from "../../asset/images/category-2.jpg";
import bag from "../../asset/images//bag.jpg";
import category4 from "../../asset/images/category-4.jpg";
import category5 from "../../asset/images/category-5.jpg";

const BannerItem = () => {
  return (
    <>
      <div className="banner-item">
        <div className="container">
          <div className="item">
            <div className="banner-image">
              <img src={category1} alt="" />
            </div>
            <div className="banner-info">
              <h1>New</h1>
              <h3>Collection</h3>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="middle-item">
            <div className="banner-image">
              <img src={bag} alt="" />
            </div>
            <div className="banner-info">
              <h1>New</h1>
              <h3>Collection</h3>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="item ">
            <div className="banner-image">
              <img src={category2} alt="" />
            </div>
            <div className="banner-info">
              <h1>10% Offer</h1>
              <h3>Collection</h3>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="item">
            <div className="banner-image">
              <img src={category4} alt="" />
            </div>
            <div className="banner-info">
              <h1>Hot</h1>
              <h3>Collection</h3>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="item">
            <div className="banner-image">
              <img src={category5} alt="" />
            </div>
            <div className="banner-info">
              <h1>Hot</h1>
              <h3>Collection</h3>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerItem;
