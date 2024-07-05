import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenu] = useState("");
  const handleClick = () => setMenu(!menuOpen);
  return (
    <div className={style.links}>
      <div>
        <img
          src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bb4424e5513bc04508ecbc_gearo-logo.svg"
          alt="gear"
        />
      </div>
      <div className={style.menu} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
      <div className={style.category}>
        <i class="fa-solid fa-list"></i>
        <span>All Categories</span>
        <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div className={style.search}>
        <i class="fa-solid fa-magnifying-glass"></i>
        <button>
          <i class="fa-solid fa-bag-shopping"></i>
          <i class="fa-brands fa-creative-commons-zero"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
