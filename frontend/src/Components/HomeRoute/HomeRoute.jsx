import React, { useState, useEffect, lazy, Suspense } from "react";
import Style from '../CSS/Style.module.css';
import HomeBanner from "./Banner";
import Loader from "./Loader.jsx";
import WhyCodetrios from "./WhyUs.jsx";
import IdeaBuild from "./IdeaBuild.jsx";
import Development from "./Development.jsx";
import Industries from "../Pages/Industries.jsx";
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from "../SEO/Schema/SchemaGraph.jsx";
//import HomeServiceSchema from "../SEO/HomeServiceSchema.jsx";
const AboutUs = lazy(() => import("./About"));
const OurServices = lazy(() => import("./Services"));
const OurPortfolio = lazy(() => import("./Portfolio"));
const ContactUs = lazy(() => import("./Contact"));

const HomeRoute = () =>{
    return(
        <>
          <SEO page="home" />
          <SchemaGraph
            pageType="website"

            pageName="CodeTrios - Web Design Company in India"

            pageDescription="CodeTrios is a web design and development company in India providing professional website design, web development, UI/UX design, React development, ecommerce development, SEO and GEO services."

            pageUrl="https://www.codetrios.com/"

            breadcrumbs={[
                {
                    name: "Home",
                    url: "https://www.codetrios.com/"
                }
            ]}
          />
          <HomeBanner />
          <AboutUs />
          <WhyCodetrios />
          <OurServices/>
          <Industries />
          <Development title="Our Development" subTitle="Process" />
          <IdeaBuild />
          {/* <OurPortfolio /> */}
          <div className={Style.primeryBg + " " + Style.contactSec}><ContactUs /></div>
        </>
    )
}


export default HomeRoute;