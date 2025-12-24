import React, { useState, useEffect } from "react";
import Style from '../CSS/Style.module.css';
import HomeBanner from "./Banner";
import AboutUs from "./About";
import OurServices from "./Services";
import OurPortfolio from "./Portfolio";
import ContactUs from "./Contact";
import Loader from "./Loader";
import SEO from "../Common/webSiteMeta.jsx";
//API

const HomeRoute = () =>{

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

    return(
        <>
        {loading ? 
            <Loader /> 
            :
            <div>
                <SEO page="home" />
                <HomeBanner />
                <AboutUs />
                <OurServices/>
                <OurPortfolio />
                <div className={Style.primeryBg + " " + Style.contactSec}><ContactUs /></div>
            </div>
        }
        </>
    )
}


export default HomeRoute;