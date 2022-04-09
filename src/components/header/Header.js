import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsTelephone, BsTranslate, BsGeo, BsSearch } from "react-icons/bs";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import "./header.scss";
import logo from "../../asset/images/logo.png";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="left-side">
        <li>
          <GrLocation />
          <span> 56 king Street, New yark</span>
        </li>
        <li>
          <BsTelephone />
          <span> +1964123456789</span>
        </li>
      </div>
      <div className="right-side">
        <li>
          <BsGeo />
          <a href="#"> Order Tracking</a>
        </li>
        <li>
          <AiOutlineUserAdd />
          <a href="#"> Register</a>
        </li>
        <li>
          <AiOutlineUser />
          <a href="#"> Sign in</a>
        </li>
        <li>
          <BsTranslate />
          <a href="#"> English</a>
        </li>
      </div>
    </header>
  );
};
const Header = () => {
  return (
    <>
      <TopHeader />

      <header className="main-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-area">
          <form action="">
            <input type="search" placeholder="Search for Products" />
            <button>
              <BsSearch /> <span> SEARCH</span>
            </button>
          </form>
        </div>
        <div className="icon">
          <Stack spacing={2} direction="row">
            <span className="favorite-icon">
              <Badge badgeContent={1} className="fab-icon">
                <FavoriteIcon />
              </Badge>
            </span>
            <span className="favorite-icon">
              <Badge badgeContent={1} color="success">
                <ShoppingCartIcon />
              </Badge>
            </span>
          </Stack>
        </div>
      </header>
    </>
  );
};

export default Header;
