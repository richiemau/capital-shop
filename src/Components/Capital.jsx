import React from "react";
import react, { useState } from "react";
import logo2 from "../assets/images/logo2.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import ladyBlue from "../assets/images/ladyBlue.png";
export default function Capital() {
  return (
    <div>
      <div className="viva">
        <header>
          <li>About Us</li>
          <li>Privacy</li>
          <li>FAQ</li>
          <li>Careers</li>
        </header>
        <menu>
          <div className="pe">
            <li>My WishList</li>
          </div>
          <div className="de">
            <li>Track Your Order</li>
          </div>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagramSquare />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaYoutube />
          </li>
        </menu>
      </div>
      <div className="cla">
        <img src={logo2} alt="" />
        <ul>
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Baby Collection</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>
            <FaSearch />
          </li>
          <li>
            <LuUserRound />
          </li>
          <li>
            <FaShoppingCart />
          </li>
        </ul>
      </div>
      <div className="re">
        Sale Up To 50% Discounts. Hurry! Limited Period Offer👍
        <a href="/">Shop Now</a>
      </div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${ladyBlue})`,
          backgroundSize: "cover",
          height: "366px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="po">
          <h1>Fashion Sale</h1>
          <h2>Minimal Menz Style</h2>
          <p className="pl">
            Lorem ipsum dolor sit amet, consectetur adipis . Sint dolorem
            aspernatur distinctio. nulla corporis .
          </p>
          <li>
            <a href="/">Shop Now</a>
          </li>
        </div>
      </div>
    </div>
  );
}
