import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HeaderAdmin from '../../Components/Common/Header/HeaderAdmin';
import styles from './Layout.module.css';
// import { useSelector } from "react-redux";

const Layout = () => {
  // const { token,user } = useSelector((state) => state.auth);
 
  // const allowedModules = user?.modules || [];
   
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    //   },
    // };
    
  return (
    <div>
        <HeaderAdmin/>
    
    <div className={styles.container}>
      <div className={styles.sidebar}>
      
        <nav>
         <ul>
              <li><NavLink to="/admin/menu">Header Menu</NavLink></li>
              <li><NavLink to="/admin/home-page">Home Page</NavLink></li>

              <li><NavLink to="/admin/about">About Page</NavLink></li>
             <li><NavLink to="/admin/project-service">Services</NavLink></li>
              {/* <li><NavLink to="/admin/mission">Mission Value</NavLink></li> */}
             <li><NavLink to="/admin/policies">Policies Page</NavLink></li>

             

              <li><NavLink to="/admin/contact">Contact Us Query</NavLink></li>

            </ul>

        </nav>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default Layout;
