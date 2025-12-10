import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web-design.webp';
import AboutBanner from '../../assets/images/about-banner.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
//Icon
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt } from "react-icons/tb";
import { FaServer, FaWordpress } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

//Components
import OurPortfolio from '../HomeRoute/Portfolio';
import ContactUs from '../HomeRoute/Contact';

import { fetchAllData } from '../../services/routes.services';
const PortfolioPage = ()=>{
    const [isOPen, setIsopen] = useState(false);
    const [portfilioData, setPortfilioData] = useState([]);

    useEffect(() => {
        fetchAllData("portfolio").then(res => setPortfilioData(res.data));
    }, []);
    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }

    return(
        <>
        <div className={Style.innerPage + " " + Style.PortfolioPage}>
            <div className={Style.innerBanner}>
                <img src={AboutBanner} />
            </div>
            <OurPortfolio data={portfilioData} />
        </div>
        </>
    )
}

export default PortfolioPage;