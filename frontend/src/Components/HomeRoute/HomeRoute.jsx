import React, { useState, useEffect } from "react";
import Style from '../CSS/Style.module.css';
import HomeBanner from "./Banner";
import AboutUs from "./About";
import OurServices from "./Services";
import OurPortfolio from "./Portfolio";
import ContactUs from "./Contact";
import SEO from "../Common/webSiteMeta.jsx";
//API

const HomeRoute = () =>{
    return(
        <>
          <SEO page="home" />
          <HomeBanner />
          <AboutUs />
          <OurServices/>
          <OurPortfolio />
          <div className={Style.primeryBg + " " + Style.contactSec}><ContactUs /></div>
        </>
    )
}


export default HomeRoute;