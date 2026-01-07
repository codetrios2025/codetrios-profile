import React, { useState, useEffect, lazy, Suspense } from "react";
import Style from '../CSS/Style.module.css';
import HomeBanner from "./Banner";
import SEO from "../Common/webSiteMeta.jsx";
import Loader from "./Loader.jsx";

const AboutUs = lazy(() => import("./About"));
const OurServices = lazy(() => import("./Services"));
const OurPortfolio = lazy(() => import("./Portfolio"));
const ContactUs = lazy(() => import("./Contact"));

const HomeRoute = () =>{
    return(
        <>
          <SEO page="home" />
          <HomeBanner />
          <Suspense fallback={<Loader />}>
            <AboutUs />
            <OurServices/>
            <OurPortfolio />
            <div className={Style.primeryBg + " " + Style.contactSec}><ContactUs /></div>
          </Suspense>
        </>
    )
}


export default HomeRoute;