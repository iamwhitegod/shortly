import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import Button from "../Button";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="brand logo" />
      </div>

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
    </nav>
  );
}

export default Nav;
