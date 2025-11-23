import React from 'react';
import Style from "../adminstyle/Style.module.css"
const SideMenu = ({ activeTab, setActiveTab }) => {
  return (
    <div className={Style.sideMenu}>
         <div
        className={`${Style.menuItem} ${activeTab === 'Menu' ? Style.active : ''}`}
        onClick={() => setActiveTab('Menu')}
      >
       Header Menu
      </div>
      <div
        className={`${Style.menuItem} ${activeTab === 'Home' ? Style.active : ''}`}
        onClick={() => setActiveTab('Home')}
      >
        Home
      </div>
      <div
        className={`${Style.menuItem} ${activeTab === 'Project Service' ? Style.active : ''}`}
        onClick={() => setActiveTab('Project Service')}
      >
        Project Service
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'Member' ? Style.active : ''}`}
         onClick={() => setActiveTab('Member')}
      >
        Members
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'About' ? Style.active : ''}`}
         onClick={() => setActiveTab('About')}
      >
        About
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'KeyProject' ? Style.active : ''}`}
         onClick={() => setActiveTab('KeyProject')}
      >
        Key Projects
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'SocialLink' ? Style.active : ''}`}
         onClick={() => setActiveTab('SocialLink')}
      >
        Social Links
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'Address' ? Style.active : ''}`}
         onClick={() => setActiveTab('Address')}
      >
        Branch Office
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'Blog' ? Style.active : ''}`}
         onClick={() => setActiveTab('Blog')}
      >
        Blogs
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'Mission' ? Style.active : ''}`}
         onClick={() => setActiveTab('Mission')}
      >
        Mission & Values
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'Policies' ? Style.active : ''}`}
         onClick={() => setActiveTab('Policies')}
      >
        Policies
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'Custmores' ? Style.active : ''}`}
         onClick={() => setActiveTab('Custmores')}
      >
        Custmores
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'Download' ? Style.active : ''}`}
         onClick={() => setActiveTab('Download')}
      >
        Download
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'ContactUs' ? Style.active : ''}`}
         onClick={() => setActiveTab('ContactUs')}
      >
        Contact Query
      </div>
      <div
         className={`${Style.menuItem} ${activeTab === 'map-locations' ? Style.active : ''}`}
         onClick={() => setActiveTab('map-locations')}
      >
       Map Location
      </div>
    </div>
  );
};

export default SideMenu;
