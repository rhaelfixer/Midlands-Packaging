import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

import image from "../images/midlands-packaging-logo.png";


// CSS
import "./Footer.css";


const Footer = () => (
  <>
    <div className="container-fluid row container-footer-CSS">
      <div className="col section1-footer-CSS">
        <Link
          className="footer-link-CSS"
          to="/"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "none" });
          }}
        >
          <img
            src={image}
            className="rounded mx-auto d-block footer-logo-CSS"
            alt="midlands-packaging"
          />
        </Link>
        <p className="footer-p-CSS">
          The Midlands Packaging Society is affiliated with the Institute of
          Materials, Minerals and Mining in the UK and the various UK Packaging
          Societies that make up the IOM3 Packaging Group.
        </p>
      </div>
      <div className="col section2-footer-CSS">
        <h1 className="footer-h1-CSS">QUICK LINKS</h1>
        <Link
          className="footer-link-CSS"
          to="/"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "none" });
          }}
        >
          Home
        </Link>
        <Link
          className="footer-link-CSS"
          to="/about-us"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "none" });
          }}
        >
          About Us
        </Link>
        <Link
          className="footer-link-CSS"
          to="/membership"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "none" });
          }}
        >
          Membership
        </Link>
        <Link
          className="footer-link-CSS"
          to="/committee"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "none" });
          }}
        >
          Committee
        </Link>
        <Link
          className="footer-link-CSS"
          to="/events-news"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "none" });
          }}
        >
          Events & News
        </Link>
        <Link
          className="footer-link-CSS"
          to="/affiliate"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "none" });
          }}
        >
          Affiliate
        </Link>
        <Link
          className="footer-link-CSS"
          to="/terms-conditions"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "none" });
          }}
        >
          Terms & Conditions
        </Link>
      </div>
      <div className="col section3-footer-CSS">
        <h1 className="footer-h1-CSS">CONTACT DETAILS</h1>
        <a className="footer-contacts-CSS" href="tel:0115-939-2566">
          &#9742; 0115-939-2566 &#9742;
        </a>
        <a
          className="footer-contacts-CSS"
          href="mailto:info@midlandspackagingsociety.ie"
        >
          &#9993; info@midlandspackagingsociety.ie &#9993;
        </a>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.824480787013!2d-1.2572733841770796!3d52.93358627989456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e97490d25b67%3A0x67179c60c5d249fb!2s26%20Rufford%20Ave%2C%20Bramcote%2C%20Nottingham%20NG9%203JH%2C%20UK!5e0!3m2!1sen!2smy!4v1669005424086!5m2!1sen!2smy"
          title="Midlands Address"
          className="map-CSS"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container-fluid row footer-bar-CSS">
        <p className="col footer-col1-CSS">
          &#169; Copyright 2022 The Midlands Packaging Society
        </p>
        <p className="col footer-col2-CSS">
          <span role="img" aria-label="packages">
            🚚 📦 🏢 🎁 🚛
          </span>
        </p>
        <p className="col footer-col3-CSS">
          <Link
            className="footer-privacy-link-CSS"
            to="/privacy-policy"
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "none" });
            }}
          >
            Privacy Policy
          </Link>{" "}
          | Designed by Rhaelan Inc.
        </p>
      </div>
    </div>
  </>
);

export default Footer;