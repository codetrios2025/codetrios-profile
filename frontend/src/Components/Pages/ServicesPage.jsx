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
import hostingImg  from '../../assets/images/hosting.webp';
import { Link } from 'react-router-dom';
//Icon
import { BsArrowRight } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { FaPaintBrush, FaHandshake  } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdDesignServices, MdInsights  } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";

//Components
import VisionComponent from './VisionCode';
import SEO from '../Common/webSiteMeta.jsx';
const ServicesPage = ()=>{
    return(
        <>

        <SEO page="services" />
        <div className={Style.innerPage + " " + Style.servicesPage}>
            <div className={Style.innerBanner}>
                <img src={ServicesBanner} />
            </div>
            <div className={'servicesView ' + Style.commonPading + " " + Style.servicesSec}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title} data-aos="fade-up">Our Services</h2>
                            <p className={Style.subContent}  data-aos="fade-up" data-aos-delay="100">At CodeTrios, we deliver end-to-end digital solutions designed to help your business thrive online. From full-stack development and API integrations to responsive design and performance optimization — we handle everything from concept to deployment, ensuring your digital presence is modern, scalable, and future-ready. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="200">
                                <figure>
                                    <img src={webDesignImg} alt="website design services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><FaPaintBrush className={Style.icon} /></span>
                                    <h3>Website Design</h3>
                                    <p>Looking to take your business online? We build powerful, secure, and easy-to-manage e-commerce platforms that deliver seamless</p>
                                    <Link to="/website-design-services" title='website design services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="300">
                                <figure>
                                    <img src={webDevelopimg} alt="web development services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><IoCodeSlash className={Style.icon} /></span>
                                    <h3>Web Development</h3>
                                    <p>At CodeTrio, we develop high-performance, scalable, and SEO-optimized websites that reflect your brand and drive engagement. Whether it’s a business site, portfolio, or enterprise-level platform — we ensure speed, security, and smooth functionality every step of the way.</p>
                                    <Link to="/web-development-services" title='web development services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="400">
                                <figure>
                                    <img src={eCommerceImg} alt="ecommerce development services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><BsCart3 className={Style.icon} /></span>
                                    <h3>E-Commerce Solutions</h3>
                                    <p>Looking to take your business online? We build powerful, secure, and easy-to-manage e-commerce platforms that deliver seamless shopping experiences and drive conversions. Our goal is to help you sell more with smarter, faster, and mobile-friendly online stores.</p>
                                    <Link to="/ecommerce-development-services" title='ecommerce development services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="500">
                                <figure>
                                    <img src={webAppImg} alt="web application development" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><FaGlobeAmericas className={Style.icon} /></span>
                                    <h3>Web Applications</h3>
                                    <p>We create custom web applications that empower your business to operate efficiently from anywhere. Our apps are built to perform — secure, user-friendly, and adaptable across all devices — ensuring both your team and your customers have the best experience.</p>
                                    <Link to="/web-application-development" title='web application development'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="600">
                                <figure>
                                    <img src={designServicesImg} alt="ui ux design services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><MdDesignServices className={Style.icon} /></span>
                                    <h3>Design Services</h3>
                                    <p>Design is at the heart of what we do. Our creative team crafts visually stunning and user-centric designs that build trust and tell your brand story effectively. From branding to responsive layouts, we make your digital identity stand out.</p>
                                    <Link to="/ui-ux-design-services" title='ui ux design services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="700">
                                <figure>
                                    <img src={technologyImg} alt="custom software solutions" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><PiPlugsConnectedBold className={Style.icon} /></span>
                                    <h3>Technology Solutions</h3>
                                    <p>At CodeTrios, we offer reliable and high-performance web hosting services designed to keep your website fast, secure, and always online. From startups to enterprise platforms, our hosting solutions are built to support your business at every stage.</p>
                                    <Link to="/custom-software-solutions" title='custom software solutions'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="200">
                                <figure>
                                    <img src={designStrategyImg} alt="digital strategy consulting" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><MdInsights  className={Style.icon} /></span>
                                    <h3>Digital Strategy</h3>
                                    <p>Our work doesn’t stop at development — we offer strategic digital consultancy to guide your business toward growth and innovation. From identifying the right tools to optimizing your online strategy, we help you make smarter technology decisions.</p>
                                    <Link to="/digital-strategy-consulting" title='digital strategy consulting'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="200">
                                <figure>
                                    <img src={hostingImg} alt="web hosting services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><MdInsights  className={Style.icon} /></span>
                                    <h3>Web Hosting Services</h3>
                                    <p>Your website’s success depends on its hosting. We ensure lightning-fast speed, strong security, and maximum uptime — so your visitors always get the best experience.</p>
                                    <Link to="/web-hosting-services" title='web hosting services'>Read More <BsArrowRight className={Style.icon} /></Link>
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