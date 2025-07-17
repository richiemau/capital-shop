import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

export default function NavBar() {
  const navLinks = [
    { to: "/home", path: "Home" },
    { to: "/men", path: "Men" },
    { to: "/women", path: "Women" },
    { to: "/babycollect", path: "BabyCollect" },
    { to: "/blog", path: "Blog" },
    { to: "/contact", path: "Contact" },
    { to: "/pages", path: "Pages" },
  ];
  return (
    <nav>
      <main>
        <img src="/assets/images/logo2.png" alt="" />
      </main>
      <ul>
        {navLinks.map(({ to, path }) => {
          return (
            <li key={to}>
              <NavLink to={to}>{path}</NavLink>
            </li>
          );
        })}
        <li>
          <FaSearch style={{ color: "black" }} />
        </li>
        <li>
          <LuUserRound />
        </li>
        <li>
          <FaShoppingCart />
        </li>
      </ul>
    </nav>
  );
}
