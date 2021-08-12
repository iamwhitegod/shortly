import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <svg className="footer__logo--white">
          <use href={sprite + "#logo"}></use>
        </svg>
      </div>

      <ul className="footer__list footer__list--1">
        <h4 className="heading heading--quad">Features</h4>

        <li className="footer__item">
          <Link to="#">Links Shortening</Link>
        </li>
        <li className="footer__item">
          <Link to="#">Branded Links</Link>
        </li>
        <li className="footer__item">
          <Link to="#">Analytics</Link>
        </li>
      </ul>
      <ul className="footer__list footer__list--2">
        <h4 className="heading heading--quad">Resourses</h4>

        <li className="footer__item">
          <Link to="#">Blog</Link>
        </li>
        <li className="footer__item">
          <Link to="#">Developers</Link>
        </li>
        <li className="footer__item">
          <Link to="#">Support</Link>
        </li>
      </ul>
      <ul className="footer__list footer__list--3">
        <h4 className="heading heading--quad">Company</h4>

        <li className="footer__item">
          <Link to="#">About</Link>
        </li>
        <li className="footer__item">
          <Link to="#">Our Team</Link>
        </li>
        <li className="footer__item">
          <Link to="#">Career</Link>
        </li>
        <li className="footer__item">
          <Link to="#">Contact</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <span className="footer__icon">
          <svg className="footer__icon--facebook">
            <use href={sprite + "#icon-facebook"}></use>
          </svg>
        </span>

        <span className="footer__icon">
          <svg className="footer__icon--twitter">
            <use href={sprite + "#icon-twitter"}></use>
          </svg>
        </span>

        <span className="footer__icon">
          <svg className="footer__icon--pinterest">
            <use href={sprite + "#icon-pinterest"}></use>
          </svg>
        </span>

        <span className="footer__icon">
          <svg className="footer__icon--instagram">
            <use href={sprite + "#icon-instagram"}></use>
          </svg>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
