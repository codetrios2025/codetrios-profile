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
           {/* {user?.role === "user" && (
             <li>
              <NavLink
                to="/admin/UserPermission"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                User Menu
              </NavLink>
            </li>
           )} */}
           {/* {allowedModules.includes("menu") && ( */}
            <li>
              <NavLink
                to="/admin/menu"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Header Menu
              </NavLink>
            </li>
            {/* )} */}
             {/* {allowedModules.includes("home-page") && ( */}
            <li>
              <NavLink
                to="/admin/home-page"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Home Page
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("about-page") && ( */}
            <li>
              <NavLink
                to="/admin/about-page"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                About Page
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("carrer") && ( */}
            <li>
              <NavLink
                to="/admin/carrer"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Carrer Page
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("services") && ( */}
            <li>
              <NavLink
                to="/admin/services"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >                Services
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("mission-value") && ( */}
            <li>
              <NavLink
                to="/admin/mission-value"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Mission Value
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("team-member") && ( */}
            <li>
              <NavLink
                to="/admin/team-member"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Team Member
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("address") && ( */}
            <li>
              <NavLink
                to="/admin/address"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
               Office Address
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("key-projects") && ( */}
            <li>
              <NavLink
                to="/admin/key-projects"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Key Projects
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("blog-pagee") && ( */}
            <li>
              <NavLink
                to="/admin/blog-page"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Blog Page
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("policie-page") && ( */}
            <li>
              <NavLink
                to="/admin/policie-page"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Policies Page
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("custmores") && ( */}
            <li>
              <NavLink
                to="/admin/custmores"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Customers
              </NavLink>
            </li>
             {/* )} */}
             {/* {allowedModules.includes("downloads") && ( */}
            <li>
              <NavLink
                to="/admin/downloads"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Downloads
              </NavLink>
            </li>
             {/* )} */}
              {/* {allowedModules.includes("foodDownload") && ( */}
             <li>
              <NavLink
                to="/admin/foodDownload"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Food Downloads
              </NavLink>
            </li>
              {/* )} */}
               {/* {allowedModules.includes("contact") && ( */}
            <li>
              <NavLink
                to="/admin/contact"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Contact Us Query
              </NavLink>
            </li>
               {/* )} */}
            {/* <li>
              <NavLink
                to="/admin/socialmedia"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Social Media
              </NavLink>
            </li> */}
             {/* {allowedModules.includes("jobs") && ( */}
            <li>
              <NavLink
                to="/admin/jobs"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Job Posting
              </NavLink>
            </li>
             {/* )} */}
              {/* {allowedModules.includes("map-locations") && ( */}
            <li>
              <NavLink
                to="/admin/map-locations"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
               Map Location
              </NavLink>
            </li>
              {/* )} */}
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
