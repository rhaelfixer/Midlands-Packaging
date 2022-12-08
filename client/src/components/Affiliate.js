import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import affiliate from "../images/affiliate.png";


// CSS
import "./Affiliate.css";


const Affiliate = () => {
  return (
    <>
      <div className="container-fluid container-affiliate-CSS">
        <h1 className="affiliate-h1-CSS">Affiliate</h1>
        <p className="affiliate-p-CSS">
          Be an affiliate with us. Being our membership panel allows free
          membership registration for your company for up to 5 personnel and
          register members enjoys discounted live events and technical webinars.
          They can also access posted recording after the event.
        </p>
        <a
          className="affiliate-anchor-CSS"
          href="https://www.benchmark-consulting.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid rounded mx-auto d-block affiliate-img-CSS"
            src={affiliate}
            alt="affiliate"
          />
        </a>
      </div>
    </>
  );
};

export default Affiliate;
