import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/e-Commerce_img.webp';
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt } from "react-icons/tb";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';

//icon
import { FaStore, FaBoxes , FaServer, FaWordpress, FaTags } from "react-icons/fa";
import { MdPhoneIphone, MdSpeed  } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

import SEO from '../Common/webSiteMeta.jsx';

const EcommerceSolutions = () =>{
    const benefits = [
        "Business-focused ecommerce strategy",
        "Conversion-focused user experience",
        "Responsive and mobile-first development",
        "Secure payment integration",
        "SEO-friendly website architecture",
        "Fast and performance-focused stores",
        "Scalable ecommerce solutions",
        "Ongoing maintenance and support",
    ];
    return(
        <>
            <SEO page="ecommerce-development-services" />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Ecommerce Development Company in India</h1>
                                    <p>Taking your business online requires more than just a website—it requires a strategic, high-performance eCommerce ecosystem designed to enhance user experience, streamline operations, and drive sales. At CodeTrios, we provide comprehensive eCommerce development services and are recognized for delivering the best ecommerce development services tailored to modern business needs. As the best ecommerce development company in India, we specialize in building robust, secure, scalable, and conversion-focused online stores designed around your business model, products, and customer behavior.</p>
                                    <CATButton />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={'servicesCol ' + Style.commonPading + " " + Style.aboutSec}>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <figure>
                                    <img src={webImage} className='imgFull' alt='Ecommerce website development' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}> E-Commerce Development Services – Complete Online Store Setup & Growth</h2>
                                    <p>Whether you are launching a new online store, migrating from an existing platform, or upgrading your current eCommerce website, our team creates seamless digital shopping experiences through responsive ecommerce website design that is fast, intuitive, mobile-friendly, and optimized for conversions. From custom storefront designs and product catalogs to secure payment gateways and advanced integrations, we build every component with performance and usability in mind.</p>
                                    <p>Our eCommerce website development services include custom eCommerce development, responsive storefront design, shopping cart and checkout solutions, payment gateway integration, inventory management, order management, customer accounts, third-party API integrations, and performance optimization. We also provide best ecommerce design and development services that ensure your store is visually appealing, highly functional, and conversion-driven. We work with modern technologies and popular eCommerce platforms to deliver flexible solutions, including WooCommerce ecommerce development, Shopify ecommerce development, and Magento ecommerce development, supporting a wide range of business requirements.</p>
                                    <p>As an experienced eCommerce development company, CodeTrios focuses on creating online stores that are easy to manage, secure for customers, and scalable as your business grows. Our development approach ensures your eCommerce platform performs reliably across desktops, tablets, and smartphones while providing a consistent shopping experience across every customer touchpoint. We also deliver complete online ecommerce business solutions that help businesses establish, manage, and scale their digital presence effectively.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}> Ecommerce Development Services</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaStore  /></span>
                                    <h3>Custom Store Setup</h3>
                                    <p>End-to-end ecommerce development with personalized layouts, product structures, and branded interfaces tailored to your industry and audience.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaServer  /></span>
                                    <h3>Payment Gateway Integration </h3>
                                    <p>Secure checkout experiences powered by trusted gateways like Razorpay, Stripe, PayPal, and more — offering multiple currencies and payment modes.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaBoxes  /></span>
                                    <h3>Inventory & Order Management</h3>
                                    <p>Powerful back-office dashboards to manage products, categories, stock levels, orders, returns, and shipping workflows. </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdPhoneIphone  /></span>
                                    <h3>Mobile-Responsive Design</h3>
                                    <p>Optimized layouts that ensure your store loads fast and performs exceptionally on all screen sizes.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaTags   /></span>
                                    <h3>Product Optimization</h3>
                                    <p>Well-structured product pages with optimized images, descriptions, variants, and SEO-friendly metadata for better visibility and conversions.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdSpeed /></span>
                                    <h3>Performance Optimization</h3>
                                    <p>Fast-loading pages for better user retention and search ranking.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>       
                <section className={`${Style.whyChooseSection}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Ecommerce Development Focused on Growth</h2>
                                    <p>From strategy and UI/UX design to development, testing, deployment, SEO readiness, and ongoing optimization, CodeTrios delivers end-to-end eCommerce solutions built to improve customer engagement, streamline operations, increase conversions, and support long-term online business growth.</p>
                                    {benefits.map((benefit, index) => (
                                        <div className={Style.benefitItem}>
                                            <BsCheckCircle
                                                className={Style.icon}
                                            />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                    <Link to="/about-us" className={Style.btnStyle} title="Learn more about CodeTrios">Learn More</Link>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <figure data-aos="fade-up" data-aos-delay="100">
                                    <img src={WhyChooseImg} className='imgFull' alt='Why Choose CodeTrios?' width="1747" height="1334" />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>          
                <CATComponent />
            </div>
        </>
    )
}

export default EcommerceSolutions;