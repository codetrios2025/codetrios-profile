import React, { useState, useEffect, lazy, Suspense } from "react";
import Style from '../CSS/Style.module.css';
import HomeBanner from "./Banner";
import SEO from "../Common/webSiteMeta.jsx";
import Loader from "./Loader.jsx";
import WhyCodetrios from "./WhyUs.jsx";
import IdeaBuild from "./IdeaBuild.jsx";
import Development from "./Development.jsx";
import Industries from "../Pages/Industries.jsx";
import OrganizationSchema from "../Common/OrganizationSchema.jsx";
import WebsiteSchema from "../Common/WebsiteSchema.jsx";
import HomeServiceSchema from "../Common/HomeServiceSchema.jsx";
const AboutUs = lazy(() => import("./About"));
const OurServices = lazy(() => import("./Services"));
const OurPortfolio = lazy(() => import("./Portfolio"));
const ContactUs = lazy(() => import("./Contact"));

const HomeRoute = () =>{
    return(
        <>
          <SEO page="home" />
          <OrganizationSchema />
        <WebsiteSchema />
        <HomeServiceSchema />
          <HomeBanner />
          <AboutUs />
          <WhyCodetrios />
          <OurServices/>
          <Industries />
          <Development />
          <IdeaBuild />
          {/* <OurPortfolio /> */}
          <div className={Style.primeryBg + " " + Style.contactSec}><ContactUs /></div>
        </>
    )
}


export default HomeRoute;