import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Content from './Content';
import Style from "../adminstyle/Style.module.css"
import AdminHeader from "../AdminHeader"

const AdminMenu = () => {
  const [activeTab, setActiveTab] = useState('Menu');

  return (
    <div>
      {/* <AdminHeader/> */}
  
    <div className={Style.appContainer}>
      
     
        <SideMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <Content activeTab={activeTab} />
     
    </div>
    </div>
  );
};

export default AdminMenu;
