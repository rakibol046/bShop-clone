import react from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import "./products.scss";

const Card = ({ image, price, sold, brand }) => {
  return (
    <div className="card">
      <div className="single-product" style={{}}>
        <div className="product-img">
          <a href="#">
            <img className="default-img" src={image} alt="#" />
            <img className="hover-img" src={image} alt="#" />
          </a>
          <div className="button-head">
            <div
              className="product-action"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <a
                style={{ display: "block" }}
                data-toggle="modal"
                data-target="#exampleModal"
                title="Quick View"
                href="#"
              >
                <AiOutlineEye />
                <span>Quick Shop</span>
              </a>
              <a style={{ display: "block" }} title="Wishlist" href="#">
                <BsHeart />
                <span>Add to Wishlist</span>
              </a>
              <a style={{ display: "block" }} title="Compare" href="#">
                <AiOutlineBarChart />
                <span>Add to Compare</span>
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h3>
            <a href="#" style={{ fontWeight: "bold", textAlign: "center" }}>
              Women Hot Collection
            </a>
          </h3>
          <div>
            <div>
              Brand <span>{brand}</span>
            </div>
            <div>
              Sold By <span>{sold}</span>
            </div>
          </div>
          <div className="product-price">
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
