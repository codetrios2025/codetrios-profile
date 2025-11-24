import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../adminstyle/Style.module.css'
import CarrerMain from './CarrerFrontSection';

function Carrerroutes() {
  return (
    <Tabs
      defaultActiveKey="Carrer"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
 <Tab eventKey="Carrer" title="Carrer Frontend" > <CarrerMain/></Tab>
     
    </Tabs>
  );
}

export default Carrerroutes;