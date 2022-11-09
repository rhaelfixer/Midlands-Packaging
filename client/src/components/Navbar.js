import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import image from "../images/midlands-packaging-logo.jpg";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// CSS
import "./Navbar.css";


export default function Navbar() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="row">
      <p className="p-CSS">
        The home of Packaging Professionals, Packaging Engineers, Specifiers,
        Buyers, Converters, NPD Specialists and Packaging Designers.
      </p>
      <div className="col-md-3 header-CSS">
        <img
          src={image}
          className="rounded mx-auto d-block image-CSS"
          alt="midlands-packaging"
        />
      </div>
      <div className="col-md-9 header-CSS">
        <h3 className="h3-CSS">
          <nav className="navbar">
            <Nav className={toggle ? "nav-menu" : "nav-menu active"}>
              <Link className="link-CSS" to="/">
                Home
              </Link>
              <Link className="link-CSS" to="/about-us">
                About Us
              </Link>
              <Link className="link-CSS" to="/membership">
                Membership
              </Link>
              <Link className="link-CSS" to="/committee">
                Committee
              </Link>
              <Link className="link-CSS" to="/events-news">
                Events & News
              </Link>
              <Link className="link-CSS" to="/contact-us">
                Contact Us
              </Link>
              <div>
                <Link to="/become-member">
                  <Button className="button-CSS">
                    <h3 className="h3-CSS">Sign up</h3>
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="button-CSS">
                    <h3 className="h3-CSS">Login</h3>
                  </Button>
                </Link>
              </div>
            </Nav>
            <div
              onClick={() => setToggle(!toggle)}
              className={toggle ? "hamburger" : "hamburger active"}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </h3>
      </div>
    </div>
  );
}




