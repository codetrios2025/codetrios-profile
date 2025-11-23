import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../adminstyle/Style.module.css'
import DownloadType from './DownloadType';
import DownloadManager from './DownloadManager';

function Downloadroutes() {
  return (
    <Tabs
      defaultActiveKey="downloads"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
 <Tab eventKey="downloads" title="Downaloads" > <DownloadManager/></Tab>
 <Tab eventKey="Downloadtype" title="Download Types" > <DownloadType/></Tab>
     
    </Tabs>
  );
}

export default Downloadroutes;