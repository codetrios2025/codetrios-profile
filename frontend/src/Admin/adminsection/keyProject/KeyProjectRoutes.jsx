import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../adminstyle/Style.module.css'
import KeyprojectSection from './KeyprojectSection';
import Keyheading from './KeyProjectHeading';

function AboutUsroutes() {
  return (
    <Tabs
      defaultActiveKey="keyproject"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
  <Tab eventKey="keyproject" title="key Projects" > <KeyprojectSection/></Tab>
  <Tab eventKey="Keyheading" title="key Heading" > <Keyheading/></Tab>
     
    </Tabs>
  );
}

export default AboutUsroutes;