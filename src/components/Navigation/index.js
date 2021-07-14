import React from "react";

import logo from "../../assets/logo.svg";

function Navigation() {
  return (
    <div className="app__navigation">
      <div className="app__row">
        <nav>
          <figure>
            <img src={logo} alt="logo" />
          </figure>

          <div className="app__navigation--link">
            <ul>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resourses</a>
              </li>
            </ul>

            <div className="app__btns">
              <button>Login</button>
              <button className="active">Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
