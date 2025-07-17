import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

export default function Header() {
  return (
    <div>
      <div className="viva">
        <header>
          <a href="/aboutUs">About Us</a>
          <a href="/privacy">Privacy</a>
          <a href="/faq">FAQ</a>
          <a href="/careers">Careers</a>
        </header>
        <menu>
          <div className="pe">
            <a href="/myWishlist">My Wishlist</a>
          </div>
          <div className="de">
            <a href="/trackOrder">Track Your Order</a>
          </div>
          <a href="/search">
            <FaSearch />
          </a>
          <a href="/facebook">
            <FaFacebook />
          </a>
          <a href="/instagram">
            <FaInstagramSquare />
          </a>
          <a href="/twitter">
            <FaTwitter />
          </a>
          <a href="/linkedin">
            <FaLinkedin />
          </a>
          <a href="/youtube">
            <FaYoutube />
          </a>
        </menu>
      </div>
    </div>
  );
}
