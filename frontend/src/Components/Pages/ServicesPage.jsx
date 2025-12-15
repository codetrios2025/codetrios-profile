import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import ServicesBanner from '../../assets/images/services-banner.webp';
import webDesignImg from '../../assets/images/website-design.webp';
import webDevelopimg from '../../assets/images/web_development.webp';
import eCommerceImg from '../../assets/images/e-Commerce_img.webp';
import webAppImg from '../../assets/images/web_application.webp';
import designServicesImg from '../../assets/images/design_services.webp';
import technologyImg  from '../../assets/images/technology_solutions.webp';
import designStrategyImg  from '../../assets/images/digital_strategy.webp';

import { Link } from 'react-router-dom';
import constants from '../../services/constants';
import parse from 'html-react-parser';
//Icon
import { BsArrowRight } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { FaPaintBrush, FaHandshake  } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";

//Components
import VisionComponent from './VisionCode';
import { fetchAllData } from '../../services/routes.services';

const ServicesPage = ()=>{
    return(
        <>
        <div className={Style.innerPage + " " + Style.servicesPage}>
            <div className={Style.innerBanner}>
                <img src={ServicesBanner} />
            </div>
            <div className={'servicesView ' + Style.commonPading + " " + Style.servicesSec}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>Our Services</h2>
                            <p className={Style.subContent}>At CodeTrios, we deliver end-to-end digital solutions designed to help your business thrive online. From full-stack development and API integrations to responsive design and performance optimization — we handle everything from concept to deployment, ensuring your digital presence is modern, scalable, and future-ready. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.servicesBox}>
                                <figure>
                                    <img src={webDesignImg} alt="" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><FaPaintBrush className={Style.icon} /></span>
                                    <h3>Website Design</h3>
                                    <p>Looking to take your business online? We build powerful, secure, and easy-to-manage e-commerce platforms that deliver seamless</p>
                                    <Link to="/website-design">Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox}>
                                <figure>
                                    <img src={webDevelopimg} alt="" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><IoCodeSlash className={Style.icon} /></span>
                                    <h3>Web Development</h3>
                                    <p>At CodeTrio, we develop high-performance, scalable, and SEO-optimized websites that reflect your brand and drive engagement. Whether it’s a business site, portfolio, or enterprise-level platform — we ensure speed, security, and smooth functionality every step of the way.</p>
                                    <Link to="/web-development">Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox}>
                                <figure>
                                    <img src={eCommerceImg} alt="" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><BsCart3 className={Style.icon} /></span>
                                    <h3>E-Commerce Solutions</h3>
                                    <p>Looking to take your business online? We build powerful, secure, and easy-to-manage e-commerce platforms that deliver seamless shopping experiences and drive conversions. Our goal is to help you sell more with smarter, faster, and mobile-friendly online stores.</p>
                                    <Link to="/e-commerce-solutions">Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox}>
                                <figure>
                                    <img src={webAppImg} alt="" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><FaGlobeAmericas className={Style.icon} /></span>
                                    <h3>Web Applications</h3>
                                    <p>We create custom web applications that empower your business to operate efficiently from anywhere. Our apps are built to perform — secure, user-friendly, and adaptable across all devices — ensuring both your team and your customers have the best experience.</p>
                                    <Link to="/web-applications">Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox}>
                                <figure>
                                    <img src={designServicesImg} alt="" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><MdDesignServices className={Style.icon} /></span>
                                    <h3>Design Services</h3>
                                    <p>Design is at the heart of what we do. Our creative team crafts visually stunning and user-centric designs that build trust and tell your brand story effectively. From branding to responsive layouts, we make your digital identity stand out.</p>
                                    <Link to="/design-services">Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox}>
                                <figure>
                                    <img src={technologyImg} alt="" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><PiPlugsConnectedBold className={Style.icon} /></span>
                                    <h3>Technology Solutions</h3>
                                    <p>We help businesses adopt cutting-edge technologies and modern frameworks to streamline workflows and boost performance. Whether it’s automation, AI integration, or custom software, CodeTrio ensures your tech stack is built for the future.</p>
                                    <Link to="/technologies">Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox}>
                                <figure>
                                    <img src={designStrategyImg} alt="" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><FaPaintBrush className={Style.icon} /></span>
                                    <h3>Digital Strategy</h3>
                                    <p>Our work doesn’t stop at development — we offer strategic digital consultancy to guide your business toward growth and innovation. From identifying the right tools to optimizing your online strategy, we help you make smarter technology decisions.</p>
                                    <Link to="/digital-strategy">Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        <VisionComponent />
        </>
    )
}

export default ServicesPage;