import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "animate.css";
import {AnimationOnScroll} from "react-animation-on-scroll";
import Carousel from "react-bootstrap/Carousel";

import intro from "../images/packages.png";
import aim from "../images/aim.png";
import pac1 from "../images/pac1.png";
import pac2 from "../images/pac2.png";
import pac3 from "../images/pac3.png";
import pac4 from "../images/pac4.png";
import pac5 from "../images/pac5.png";
import objectives from "../images/objectives.png";


// CSS
import "./Home.css";


const Home = () => {
  return (
    <>
      <div className="container-fluid row container-home-CSS fade-in-zoom-in-CSS">
        <div className="col-md-5">
          <h1 className="welcome1-CSS">Welcome to</h1>
          <h1 className="welcome2-CSS">The Midlands Packaging Society</h1>
          <p className="home-p-CSS">
            An organisation dedicated to supporting packaging professionals
            across the midlands of Ireland.
          </p>
          <p className="home-p-CSS">
            Help us, to help you share knowledge, build your network and promote
            training and the effective use of packaging across all industrial
            and commercial sectors.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="img-fluid rounded mx-auto d-block packages-img-CSS"
            src={intro}
            alt="packages"
          />
        </div>
      </div>

      <svg
        style={{
          transform: "rotate(0deg)",
          transition: "0.3s",
          position: "relative",
          zIndex: "1",
        }}
        version="1.1"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="b" x2="0" y1="1">
            <stop stopColor="rgba(62, 152, 210, 1)" offset="0" />
            <stop stopColor="rgba(62, 152, 210, 1)" offset="1" />
          </linearGradient>
        </defs>
        <path
          d="m0 60 40-8.3c40-8.7 120-24.7 200-21.7s160 27 240 31.7c80 5.3 160-8.7 240-11.7s160 3 240 8.3c80 4.7 160 8.7 240 1.7s160-23 240-23.3c80 0.3 160 16.3 240 23.3s160 3 240-5 160-22 240-28.3c80-6.7 160-6.7 240-6.7h240 240c80 0 160 0 240 10s160 30 240 26.7c80-3.7 160-29.7 240-43.4 80-13.3 160-13.3 240 1.7s160 45 240 58.3c80 13.7 160 9.7 240 1.7s160-22 240-33.3c80-11.7 160-21.7 240-18.4 80 3.7 160 19.7 240 21.7s160-12 240-8.3c80 3.3 160 23.3 240 20 80-3.7 160-29.7 200-43.4l40-13.3v100h-40-200-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-200-40z"
          fill="url(#b)"
          style={{
            transform: "translate(0, 0px)",
            position: "relative",
            zIndex: "1",
          }}
        />
        <defs>
          <linearGradient id="a" x2="0" y1="1">
            <stop stopColor="rgba(39, 112, 159, 1)" offset="0" />
            <stop stopColor="rgba(39, 112, 159, 1)" offset="1" />
          </linearGradient>
        </defs>
        <path
          d="m0 20 40 5c40 5 120 15 200 11.7 80-3.7 160-19.7 240-20 80 0.3 160 16.3 240 16.6 80-0.3 160-16.3 240-23.3s160-3 240 6.7c80 10.3 160 26.3 240 28.3s160-12 240-21.7c80-10.3 160-16.3 240-6.6 80 10.3 160 36.3 240 50 80 13.3 160 13.3 240 8.3s160-15 240-20 160-5 240-3.3c80 1.3 160 5.3 240 3.3s160-8 240-3.3c80 5.3 160 21.3 240 28.3s160 3 240-11.7c80-15.3 160-41.3 240-46.6 80-4.7 160 11.3 240 25 80 13.3 160 23.3 240 28.3s160 5 240 5 160 0 240-5 160-15 240-15 160 10 240 16.7c80 6.3 160 10.3 200 11.6l40 1.7v10h-40-200-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-240-200-40z"
          fill="url(#a)"
          opacity=".9"
          style={{
            transform: "translate(0, 50px)",
            position: "relative",
            zIndex: "1",
          }}
        />
      </svg>

      <section className="container-fluid section1-home-CSS">
        <AnimationOnScroll
          animateIn="animate__fadeInDown"
          animateOnce="true"
          duration="2"
        >
          <div className="section1-1-home-CSS">
            <h1 className="intro-h1-CSS">The Midlands Packaging Society</h1>
            <p className="intro-p-CSS">
              The Midlands Packaging Society is an all island organisation,
              which is an affiliate of The Packaging Group, a division of the
              Institute of Materials, Minerals and Mining (IOM3) the UK based
              professional body.
            </p>
            <p className="intro-p-CSS">
              We link professionals in packaging development, design,
              manufacture, packer / filler, retail, sustainability and recovery
              to promote the sharing of knowledge and best practice across the
              Pharma, Food & Drink, Life Science, Medical Device and Industrial
              sectors.
            </p>
            <p className="intro-p-CSS">
              Our goal is to promote packaging learning and knowledge
              development through networking, formal training courses, events
              and specific subject matter webinars.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce="true"
          duration="2"
          delay="1000"
        >
          <div className="section1-2-home-CSS">
            <Link
              to="/about-us"
              onClick={() => {
                window.scrollTo({ top: "0", behavior: "none" });
              }}
            >
              <Button className="know-more-button-CSS">
                <h3 className="know-more-CSS">Know More ➤</h3>
              </Button>
            </Link>
          </div>
        </AnimationOnScroll>
      </section>

      <section className="container-fluid row section2-home-CSS">
        <div className="col-md-5">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce="true"
            duration="2"
          >
            <img
              className="img-fluid rounded mx-auto d-block aim-img-CSS"
              src={aim}
              alt="aim"
            />
          </AnimationOnScroll>
        </div>
        <div className="col-md-5">
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce="true"
            duration="2"
          >
            <h1 className="aim-h1-CSS">Our Aim</h1>
            <ul className="aim-ul-CSS">
              <li>
                Promote the science, technology and benefits of packaging
                materials and components including the supply chain processes in
                which packaging is used and disposed of, in the circular
                economy.
              </li>
              <li>
                Arrange webinars, conferences, meetings, factory visits and
                other events for professional development and networking. Arrange
                webinars, conferences, meetings, factory visits and other events
                for professional development and networking.
              </li>
              <li>Encourage careers in packaging.</li>
              <li>
                Promote training programmes on packaging related topics, such as
                packaging technology, sustainable packaging, print for
                packaging, introduction to packaging courses and sector specific
                training programs.
              </li>
            </ul>
          </AnimationOnScroll>
        </div>
      </section>

      <section className="container-fluid row section3-home-CSS">
        <AnimationOnScroll
          animateIn="animate__bounce"
          animateOnce="true"
          duration="2"
        >
          <h1 className="mids-h1-CSS">Benefits of being a MIDS Member</h1>
        </AnimationOnScroll>
        <div className="col-md-5">
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce="true"
            duration="2"
          >
            <ul className="mids-ul-CSS">
              <li className="mids-li-CSS">Networking</li>
              <p className="mids-p-CSS">
                Membership of The Midlands Packaging Society will provide a
                great opportunity for networking with other packaging
                professionals, both in your own industry, and also with the
                wider community of professionals working with packaging design,
                manufacturing, usage and recovery and will help expand your
                knowledge and build your professional network.
              </p>
              <li className="mids-li-CSS">
                Training Courses
              </li>
              <p className="mids-p-CSS">
                Members get first access to accredited training courses.
              </p>
              <li className="mids-li-CSS">
                Exclusive invitation to MIDS Events
              </li>
              <p className="mids-p-CSS">
                Members will get access to early sign up to MIDS events.
              </p>
            </ul>
          </AnimationOnScroll>
        </div>
        <div className="col-md-5">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce="true"
            duration="2"
          >
            <ul className="mids-ul-CSS">
              <li className="mids-li-CSS">
                International Links
              </li>
              <p className="mids-p-CSS">
                Connection with the greater packaging community in the UK and
                abroad, including the World Packaging Organisation.
              </p>
              <li className="mids-li-CSS">
                Member's Only Section of the Website
              </li>
              <p className="mids-p-CSS">
                Additional access to careers information and networking events.
              </p>
              <li className="mids-li-CSS">
                Online Access
              </li>
              <p className="mids-p-CSS">
                As a member of The Midlands Packaging Society, you will have
                access to our knowledge base and recorded events.
              </p>
              <Link
                to="/events-news"
                onClick={() => {
                  window.scrollTo({ top: "0", behavior: "none" });
                }}
              >
                <Button className="events-news-button-CSS">
                  <h3 className="events-news-CSS">
                    Go to Accredited Packaging Training Course ➤
                  </h3>
                </Button>
              </Link>
            </ul>
          </AnimationOnScroll>
        </div>
        <Carousel className="carousel-CSS" variant="dark" interval={2500}>
          <Carousel.Item>
            <img
              className="img-fluid rounded mx-auto d-block pac-img-CSS"
              src={pac1}
              alt="pac1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid rounded mx-auto d-block pac-img-CSS"
              src={pac2}
              alt="pac2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid rounded mx-auto d-block pac-img-CSS"
              src={pac3}
              alt="pac3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid rounded mx-auto d-block pac-img-CSS"
              src={pac4}
              alt="pac4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid rounded mx-auto d-block pac-img-CSS"
              src={pac5}
              alt="pac5"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="container-fluid row section4-home-CSS">
        <div className="col-md-5">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce="true"
            duration="2"
          >
            <h1 className="objectives-h1-CSS">What we do</h1>
            <p className="objectives1-p-CSS">
              The Midlands Packaging Society has been heavily involved in
              training Packaging Technologist for over 20 years.
            </p>
            <p className="objectives1-p-CSS">
              We also run factory visits, webinars and information days for our
              Members.
            </p>
            <p className="objectives1-p-CSS">
              If you would like us to run a specific subject matter webinar or,
              are looking for packaging training, do feel free to contact us.
            </p>
            <img
              className="img-fluid rounded mx-auto d-block objectives-img-CSS"
              src={objectives}
              alt="objectives"
            />
          </AnimationOnScroll>
        </div>
        <div className="col-md-5">
          <ul className="objectives-ul-CSS">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce="true"
              duration="2"
              delay="1000"
            >
              <li className="objectives-li-CSS">
                Continuous Professional Development (CPD)
              </li>
              <p className="objectives2-p-CSS">
                Many of our courses and programs, qualify for CPD recognition.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce="true"
              duration="2"
              delay="2000"
            >
              <li className="objectives-li-CSS">
                Training
              </li>
              <p className="objectives2-p-CSS">
                Links to courses such as our Diploma in Packaging Technology or
                the Certificate in Sustainable Food Packaging.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce="true"
              duration="2"
              delay="3000"
            >
              <li className="objectives-li-CSS">
                Raising Standards
              </li>
              <p className="objectives2-p-CSS">
                Keeping our members up to date with current and new packaging
                technology and legislation.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce="true"
              duration="2"
              delay="4000"
            >
              <li className="objectives-li-CSS">
                Networking
              </li>
              <p className="objectives2-p-CSS">
                Opportunities for networking at both in-person events and
                through online webinars and other events throughout the year.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce="true"
              duration="2"
              delay="5000"
            >
              <li className="objectives-li-CSS">
                Education & Lobbying
              </li>
              <p className="objectives2-p-CSS">
                Working with external bodies to ensure that the packaging
                profession has a voice in the wider industry in relation to
                packaging and its use in the modern world.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce="true"
              duration="2"
              delay="6000"
            >
              <Link
                to="/signup"
                onClick={() => {
                  window.scrollTo({ top: "0", behavior: "none" });
                }}
              >
                <Button className="sign-up-button-CSS">
                  <h3 className="sign-up-CSS">
                    Join Today for only €50 / £45 ➤
                  </h3>
                </Button>
              </Link>
            </AnimationOnScroll>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
