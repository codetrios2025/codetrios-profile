import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../adminstyle/Style.module.css'
import InfraSectorSection from './InfraSectorSection';
import AboutMain from './AboutMainSection';
import AboutOtherSection from './AboutOtherSection'
function AboutUsroutes() {
  return (
    <Tabs
      defaultActiveKey="InfraSectorSection"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
 <Tab eventKey="InfraSectorSection" title="Subsidiaries & Affiliates" > <InfraSectorSection/></Tab>
 <Tab eventKey="AboutMain" title="About Main Section" > <AboutMain/></Tab>
      <Tab eventKey="Why Choose US" title="About Detail" > <AboutOtherSection/></Tab>
    </Tabs>
  );
}

export default AboutUsroutes;