import React from "react";
import react, { useState } from "react";
import Capital from "./Components/Capital";
import ProductList from "./Components/ProductList";
import Trend from "./Components/Trend";
import Items from "./Components/Items";
import Petey from "./Components/Petey";
import Page from "./Components/Page";
import Samuel from "./Components/samuel";
import Service from "./Components/Service";
import Input from "./Components/Input";
import Latest from "./Components/Latest";
export default function App() {
  return (
    <>
      <div className="banner">
        <Capital />
      </div>
      <div>
        <ProductList />
      </div>
      <div>
        <Trend />
      </div>
      <div>
        <Items />
      </div>
      <div>
        <Page />
      </div>
      <h3>You May Like</h3>
      <div>
        <Petey />
      </div>
      <div className="han">
        <h6>Latest News</h6>
        <Samuel />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Input />
      </div>
      <div>
        <Latest />
      </div>
      <footer>
        <marquee>
          <p>© 2025 Capital. All rights reserved.</p>
          <p>Terms of Use | Privacy Policy</p>
        </marquee>
      </footer>
      <div className="footer2">
        <p>Follow us on:</p>
        <p>
          <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
          <a href="#">Instagram</a>
        </p>
      </div>
    </>
  );
}
