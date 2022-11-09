import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Membership from "./components/Membership";
import Committee from "./components/Committee";
import EventsNews from "./components/EventsNews";
import ContactUs from "./components/ContactUs";
import BecomeMember from "./components/BecomeMember";

class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/events-news" element={<EventsNews />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/become-member" element={<BecomeMember />} />
        </Routes>
      </>
    );
            // Footer will be for here when other routes settle down...
  }
}


export default App;
