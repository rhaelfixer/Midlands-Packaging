import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";


import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Membership from "./components/Membership";
import Committee from "./components/Committee";
import EventsNews from "./components/EventsNews";
import Affiliate from "./components/Affiliate";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

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
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer></Footer>
      </>
    );
    
  }
}


export default App;
