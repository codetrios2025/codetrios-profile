import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BannerListing from './BannerListing';
import WhoWeAreListing from './WhoWeAreListing';
import WhatWeOffer from './WhatWeOfferRoutes';
import '../../adminstyle/Style.module.css'
import JoinTeamSection from './JoinTeamSection';
import ImprovementSection from './ImprovementSection';
import SectorSection from './SectorSection';


function Homeroutes() {
  return (
    <Tabs
      defaultActiveKey="whoweare"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="banner" title="Banner"> <BannerListing/> </Tab>
      <Tab eventKey="whoweare" title="About Us"><WhoWeAreListing/> </Tab>
      <Tab eventKey="whatweoffer" title="Our Services" ><WhatWeOffer/></Tab>
      <Tab eventKey="jointeam" title="Portfoilo" > <JoinTeamSection/></Tab>
      {/* <Tab eventKey="improvement" title="Improvement Section" > <ImprovementSection/></Tab>
      <Tab eventKey="sector" title="Sectors" ><SectorSection/></Tab> */}
     
     
    </Tabs>
  );
}

export default Homeroutes;