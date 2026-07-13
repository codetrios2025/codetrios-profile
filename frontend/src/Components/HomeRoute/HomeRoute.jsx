import React, { useState, useEffect, lazy, Suspense } from "react";
import Style from '../CSS/Style.module.css';
import HomeBanner from "./Banner";
import SEO from "../Common/webSiteMeta.jsx";
import Loader from "./Loader.jsx";
import WhyCodetrios from "./WhyUs.jsx";
import IdeaBuild from "./IdeaBuild.jsx";
import Development from "./Development.jsx";
const AboutUs = lazy(() => import("./About"));
const OurServices = lazy(() => import("./Services"));
const OurPortfolio = lazy(() => import("./Portfolio"));
const ContactUs = lazy(() => import("./Contact"));

const HomeRoute = () =>{
    return(
        <>
          <SEO page="home" />
          <HomeBanner />
          <AboutUs />
          <WhyCodetrios />
          <OurServices/>
          <Development />
          <IdeaBuild />
          {/* <OurPortfolio /> */}
          <div className={Style.primeryBg + " " + Style.contactSec}><ContactUs /></div>
        </>
    )
}


export default HomeRoute;