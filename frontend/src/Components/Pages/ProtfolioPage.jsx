import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../CSS/Style.module.css";
import AboutBanner from "../../assets/images/about-banner.webp";
import { Link } from "react-router-dom";
//Icon
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from "../SEO/Schema/SchemaGraph.jsx";
import CATComponent from "./CATComponent.jsx";
//Components
import OurPortfolio from "../HomeRoute/Portfolio";
import CATButton from "../ServicesPages/CATButtons.jsx";
const PortfolioPage = () => {
  return (
    <>
      <SEO page="portfolio" />
      <SchemaGraph
        pageType="portfolio"
        pageName="Web Development Portfolio & Projects | CodeTrios"
        pageDescription="Explore CodeTrios portfolio of websites, web applications, ecommerce platforms, CMS solutions, UI/UX projects, and custom software developed for businesses across different industries."
        pageUrl="https://www.codetrios.com/portfolio"
        breadcrumbs={[
            {
                name: "Home",
                url: "https://www.codetrios.com/"
            },
            {
                name: "Portfolio",
                url: "https://www.codetrios.com/portfolio"
            }
        ]}
        
    />
      <div className={Style.innerPage + " " + Style.PortfolioPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>Web Development Portfolio</h1>
                                <p>Explore selected web design, web development, ecommerce, web application, UI/UX, CMS and custom software projects delivered by CodeTrios for businesses in India and beyond.</p>
                                <CATButton />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        <OurPortfolio />
      </div>
      <CATComponent />
    </>
  );
};

export default PortfolioPage;
