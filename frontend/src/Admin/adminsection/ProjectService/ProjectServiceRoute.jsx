import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../adminstyle/Style.module.css'
// import ProjectServiceSection from './ProjectServiceSection';
import ProjectServiceIconSection from './ProjectServiceIconSection';
import ServiceDtails from './ServiceDetails'
import AssuranceOverviewSection from './AssuranceOverviewSection';
import WhyChooseUS from './WhyChooseUs';

function ProjectServiceRoutes() {
  return (
    <Tabs
      defaultActiveKey="Service deatils"
      id="uncontrolled-tab-example"
      className="mb-3"    >
  {/* <Tab eventKey="Services" title="Services" > <ProjectServiceSection/></Tab> */}
      <Tab eventKey="Icon  & Delivery Model" title="Icon & Delivery Model" > <ProjectServiceIconSection/></Tab>
      <Tab eventKey="Service deatils" title="All Service Details" > <ServiceDtails/></Tab>
      <Tab eventKey="Assurance Overview" title="Assurance Overview" > <AssuranceOverviewSection/></Tab>
      <Tab eventKey="Why Choose US" title="Why Choose US" > <WhyChooseUS/></Tab>
     
    </Tabs>
  );
}

export default ProjectServiceRoutes;