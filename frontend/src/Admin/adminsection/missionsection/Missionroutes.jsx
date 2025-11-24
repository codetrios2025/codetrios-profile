import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../adminstyle/Style.module.css'
import MissionVissionSection from './MissionVissionSection';
import ValuesSection from './ValuesSection';
import VideoSection from './VideoSection'

function Homeroutes() {
  return (
    <Tabs
      defaultActiveKey="missionvision"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
     <Tab eventKey="missionvision" title="Mission & Vision" ><MissionVissionSection/></Tab>
      <Tab eventKey="values" title="Values" > <ValuesSection/></Tab>
      <Tab eventKey="video" title="Video" > <VideoSection/></Tab>
     
    </Tabs>
  );
}

export default Homeroutes;