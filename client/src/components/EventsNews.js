import React from "react";








        import Tab from "react-bootstrap/Tab";
        import Tabs from "react-bootstrap/Tabs";




const EventsNews = () => {
  return (
    <>
      <h1 style={{ color: "green" }}>WHAT EVENTSSSSSSSSSSSS</h1>

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          dsadsadad
        </Tab>
        <Tab eventKey="profile" title="Profile">
          sadadada
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          dadadsadasd
        </Tab>
      </Tabs>
    </>
  );
};

export default EventsNews;
