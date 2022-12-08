import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import tim from "../images/tim.png";
import ian from "../images/ian.png";


// CSS
import "./Committee.css";


const Committee = () => {
  return (
    <>
      <div className="container-fluid container-committee-CSS">
        <h1 className="committee-h1-CSS">MIDS Committee</h1>
      </div>

      <section className="container-fluid row section1-committee-CSS">
        <div className="col-lg-5">
          <img
            className="img-fluid mx-auto d-block tim-img-CSS"
            src={tim}
            alt="tim"
          />
        </div>
        <div className="col-lg-5">
          <h3 className="committee-h3-CSS">Tim Barbary</h3>
          <h5 className="committee-h5-CSS">Chairperson</h5>
          <p className="committee-p-CSS">
            Tim is a Fellow of IOM3, Chairman The Midlands Packaging Society,
            sits on the UK board of the Packaging Society and a purchasing
            professional with over 30 years' experience.
          </p>
          <h5 className="committee-h5-CSS">To be Updated...</h5>
        </div>
      </section>

      <section className="container-fluid row section2-committee-CSS">
        <div className="col-lg-5">
          <img
            className="img-fluid mx-auto d-block ian-img-CSS"
            src={ian}
            alt="ian"
          />
        </div>
        <div className="col-lg-5">
          <h3 className="committee-h3-CSS">Ian Morris</h3>
          <h5 className="committee-h5-CSS">Trainer</h5>
          <p className="committee-p-CSS">
            Ian is a Fellow of IOM3, trainer of The Midlands Packaging Society,
            sits on the UK board of the Packaging Society and a purchasing
            professional with over 30 years' experience.
          </p>
          <h5 className="committee-h5-CSS">To be Updated...</h5>
        </div>
      </section>
    </>
  );
};

export default Committee;
