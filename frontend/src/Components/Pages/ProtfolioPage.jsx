import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import AboutBanner from '../../assets/images/about-banner.webp';
import { Link } from 'react-router-dom';
//Icon
import SEO from '../Common/webSiteMeta.jsx';

//Components
import OurPortfolio from '../HomeRoute/Portfolio';
import VisionComponent from './VisionCode';
const PortfolioPage = ()=>{

    return(
        <>
        <SEO page="portfolio" />
        <div className={Style.innerPage + " " + Style.PortfolioPage}>
            <div className={Style.innerBanner}>
                <img src={AboutBanner} />
            </div>
            <OurPortfolio/>
        </div>
        <VisionComponent />
        </>
    )
}

export default PortfolioPage;