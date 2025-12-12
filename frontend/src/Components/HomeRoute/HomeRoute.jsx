import React, { useState, useEffect } from "react";
import Style from '../CSS/Style.module.css';
import HomeBanner from "./Banner";
import AboutUs from "./About";
import OurServices from "./Services";
import OurPortfolio from "./Portfolio";
import ContactUs from "./Contact";
import Loader from "./Loader";
//API
import { fetchAllData } from "../../services/routes.services";

const HomeRoute = () =>{
    const [bannerData, setBannerData] = useState([]);
    const [aboutData, setAboutData] = useState([]);
    const [servicesData, setServiceData] = useState([]);
    const [portfilioData, setPortfilioData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
    const fetchData = async () =>{
        try{
            const bannerResponse = await fetchAllData('banners');
            const aboutResponse = await fetchAllData('whoweare');
            const servicesResponse = await fetchAllData('homeservices');
            const portfolioResponse = await fetchAllData('portfolio');

            setBannerData(bannerResponse.data);
            setAboutData(aboutResponse.data);
            setServiceData(servicesResponse.data);
            setPortfilioData(portfolioResponse.data);
            
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchData();
    }, []);
    //console.log(servicesData)
    return(
        <>
        {loading ? 
            <Loader /> 
            :
            <div>
                <HomeBanner data={bannerData} />
                <AboutUs data={aboutData} />
                <OurServices data={servicesData} />
                <OurPortfolio data={portfilioData} />
                <div className={Style.primeryBg + " " + Style.contactSec}><ContactUs /></div>
            </div>
        }
        </>
    )
}


export default HomeRoute;