import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Capital from "./Components/Capital";
import ProductList from "./Components/ProductList";
import Trend from "./Components/Trend";
import Items from "./Components/Items";
import Petey from "./Components/Petey";
import Page from "./Components/Page";
import Mor from "./Components/Mor";
import Service from "./Components/Service";
import Input from "./Components/Input";
import Latest from "./Components/Latest";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Men from "./Components/Men";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Women from "./Components/Women";
import BabyCollect from "./Components/BabyCollect";
import Pages from "./Components/Pages";
export default function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/babycollect" element={<BabyCollect />} />
      </Routes>
      {location.pathname !== "/contact" && (
        <>
          <Capital />
          <ProductList />
          <Trend />
          <Items />
          <Page />

          <h3>You May Like</h3>
          <Petey />
          <h6>Latest News</h6>
          <Mor />
          <Service />
          <Input />
          <Latest />
        </>
      )}
      <footer>
        <marquee>
          <p>© 2025 Capital. All rights reserved.</p>
          <p>Terms of Use | Privacy Policy</p>
        </marquee>
      </footer>
      <div className="footer2">
        <p>Follow us on:</p>
        <p>
          <a href="#">Facebook</a> | <a href="#">Twitter</a> |
          <a href="#">Instagram</a>
        </p>
      </div>
    </>
  );
}
