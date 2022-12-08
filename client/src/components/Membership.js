import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import training from "../images/training.png";
import membership from "../images/society.png";
import benefits from "../images/benefits.png";


// CSS
import "./Membership.css";


const Membership = () => {
  return (
    <>
      <div className="container-fluid container-membership-CSS">
        <div className="col-md-8">
          <h1 className="membership-h1-CSS">
            Join The Midlands Packaging Society!
          </h1>
          <p className="membership-p-CSS">
            We promote the science, technology and benefits of packaging
            materials and components, including the supply chain processes in
            which packaging is used, and disposed of, for a more circular
            economy.
          </p>
          <Link to="/signup">
            <Button className="membership-button-CSS">
              <h3 className="membership-CSS">Become a Member ➤</h3>
            </Button>
          </Link>
        </div>
      </div>

      <section className="container-fluid row section1-membership-CSS">
        <div className="col-md-5 display1-img1-CSS">
          <img
            className="img-fluid d-block training-img-CSS"
            src={training}
            alt="training"
          />
        </div>
        <div className="col-md-5">
          <h1 className="training-h1-CSS">
            We provide packaging training programs for beginners and
            professionals.
          </h1>
          <p className="training-p-CSS">
            Members include individuals that design, specify, buy, sell,
            develop, convert, brand manage, pack, fill and hopefully recycle,
            and promote sustainable thinking for a more circular economy.
          </p>
        </div>
        <div className="col display2-img1-CSS">
          <img
            className="img-fluid float-end d-block training-img-CSS"
            src={training}
            alt="training"
          />
        </div>
      </section>

      <section className="container-fluid row section2-membership-CSS">
        <div className="benefits-membership-CSS">
          <h1 className="benefits-h1-CSS">Benefits of Joining</h1>
          <p className="benefits1-p-CSS">
            The Midlands Packaging Society provides and facilitates a range of
            industry marketing, educational and networking forums that enable
            manufacturers, distributors, brand owners, and importers of
            packaging to link with like-minded individuals, share industry data
            and maintain knowledge of the latest industry trends and
            innovations.
          </p>
          <p className="benefits1-p-CSS">
            Members include companies that supply and use packaging materials
            across a number of industries, including food, beverage, pharma,
            medical device, life science and industrial sectors.
          </p>
        </div>
        <div className="col-lg-5">
          <img
            className="img-fluid mx-auto d-block membership-img-CSS"
            src={membership}
            alt="membership"
          />
        </div>
        <div className="col-lg-5">
          <ul className="benefits-ul-CSS">
            <li className="benefits-li-CSS">Networking</li>
            <p className="benefits2-p-CSS">
              Membership of The Midlands Packaging Society will provide a great
              opportunity for networking with other packaging professionals,
              both in your own industry, and also with the wider community of
              professionals working with packaging design, manufacturing, usage
              and recovery and will help expand your knowledge and build your
              professional network.
            </p>
            <li className="benefits-li-CSS">
              Training Courses
            </li>
            <p className="benefits2-p-CSS">
              Members get first access to accredited training courses.
            </p>
            <li className="benefits-li-CSS">
              Exclusive invitation to MIDS Events
            </li>
            <p className="benefits2-p-CSS">
              Members will get access to early sign up to MIDS events.
            </p>
            <li className="benefits-li-CSS">
              International Links
            </li>
            <p className="benefits2-p-CSS">
              Connection with the greater packaging community in the UK and
              abroad, including the World Packaging Organisation.
            </p>
            <li className="benefits-li-CSS">
              Member's Only Section of the Website
            </li>
            <p className="benefits2-p-CSS">
              Additional access to careers information and networking events.
            </p>
            <li className="benefits-li-CSS">
              Online Access
            </li>
            <p className="benefits2-p-CSS">
              As a member of The Midlands Packaging Society, you will have
              access to our knowledge base and recorded events.
            </p>
            <Link to="/signup">
              <Button className="benefits-button-CSS">
                <h3 className="benefits-CSS">Join MIDS Now ➤</h3>
              </Button>
            </Link>
          </ul>
        </div>
      </section>

      <section className="container-fluid row section3-membership-CSS">
        <div className="col-lg-5 display1-img2-CSS">
          <img
            className="img-fluid mx-auto d-block benefits-img-CSS"
            src={benefits}
            alt="benefits"
          />
        </div>
        <div className="col-lg-5">
          <h1 className="benefit-society-h1-CSS">
            We promote the science, technology and benefits of packaging
            materials and components including the supply chain processes.
          </h1>
        </div>
        <div className="col-md-5 display2-img2-CSS">
          <img
            className="img-fluid mx-auto d-block benefits-img-CSS"
            src={benefits}
            alt="benefits"
          />
        </div>
      </section>
    </>
  );
};

export default Membership;
