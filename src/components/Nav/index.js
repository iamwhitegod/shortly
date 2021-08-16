import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import sprite from "../../assets/sprite.svg";

import Button from "../Button";

function Nav() {
  const toggleMenu = (e) => {
    const parentEl = e.target
      .closest(".nav")
      .querySelector(".nav__menu-wrapper")
      .classList.toggle("hidden");
    // const menu = e.target.closest(".nav__menu");
    // console.log(parentEl.querySelector(".nav__menu-wrapper"));
    console.log(parentEl);
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="brand logo" />
      </div>

      <div className="nav__menu-wrapper hidden">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="#">Features</Link>
          </li>
          <li className="nav__item">
            <Link to="#">Pricing</Link>
          </li>
          <li className="nav__item">
            <Link to="#">Resourses</Link>
          </li>
        </ul>

        <div className="nav__btns">
          <Button>Login</Button>
          <Button classname="btn--active">Sign Up</Button>
        </div>
      </div>

      <div className="nav__menu hidden" onClick={toggleMenu}>
        <svg className="nav__menu--icon">
          <use href={sprite + "#menu"}></use>
        </svg>
      </div>
    </nav>
  );
}

export default Nav;
