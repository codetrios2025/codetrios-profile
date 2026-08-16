import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import AboutBanner from '../../assets/images/about-banner.webp';
import { Link } from 'react-router-dom';
//Icon
import SEO from '../Common/webSiteMeta.jsx';
import CATComponent from './CATComponent.jsx';
//Components
import OurPortfolio from '../HomeRoute/Portfolio';
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
        <CATComponent />
        </>
    )
}

export default PortfolioPage;