import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import society from "../images/society.png";
import im3 from "../images/im3.png";


// CSS
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <>
      <div className="container-fluid container-about-CSS">
        <h1 className="about-h1-CSS">About MIDS</h1>
        <p className="about1-p-CSS">
          The Midlands Packaging Society, formerly the Institute of Packaging
          Ireland, is affiliated with the Institute of Materials, Minerals and
          Mining in the UK and the various UK Packaging Societies that make up
          the IOM3 Packaging Group.
        </p>
      </div>

      <section className="container-fluid row section1-about-CSS">
        <div className="col-md-5">
          <img
            className="img-fluid mx-auto d-block society-img-CSS"
            src={society}
            alt="society"
          />
          <a
            className="im3-anchor-CSS"
            href="https://www.iom3.org/group/packaging-group.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid rounded mx-auto d-block im3-img-CSS"
              src={im3}
              alt="im3"
            />
          </a>
        </div>
        <div className="col-md-5">
          <p className="about2-p-CSS">
            As an Affiliate The Midlands Packaging Society can now work in a
            more independent way, where we are now in a position to develop and
            build directly a local membership. As a result, we have formed a new
            Committee and are expanding membership of The Midlands Packaging
            Society, for an annual fee of €50 or £45. Fee is renewable annually,
            from date of joining.
          </p>
          <p className="about2-p-CSS">
            Direct membership of IOM3 is also possible and includes membership
            to a local society of your choice. This is the alternative way to
            become a member of The Midlands Packaging Society.
          </p>
          <p className="about2-p-CSS">
            Membership of The Midlands Packaging Society is across the whole
            island of Ireland.
          </p>
          <p className="about2-p-CSS">
            We are keen for everyone involved with specifying, manufacturing,
            packing, filling, converting, retailing, brand management, new
            product development, material testing, etc., to become members of
            The Midlands Packaging Society and benefit from networking, support,
            problem-solving, education and training opportunities.
          </p>
          <Link to="/signup">
            <Button className="become-member-button-CSS">
              <h3 className="become-member-CSS">Become a Member Today ➤</h3>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
