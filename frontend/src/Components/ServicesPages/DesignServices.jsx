import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/design_services.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';

//icon
import { FaRegIdBadge, FaPaintBrush, FaPlayCircle    } from "react-icons/fa";
import { MdDesignServices   } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

import SEO from '../Common/webSiteMeta.jsx';

const DesignServices = () =>{
    const benefits = [
        "User-centered design approach",
        "Mobile-first and responsive layouts",
        "Conversion-focused user journeys",
        "Consistent design systems",
        "Wireframes and interactive prototypes",
        "Modern and scalable UI components",
        "Performance-aware design decisions",
        "Designs aligned with business goals",
    ];
    return(
        <>
            <SEO page="ui-ux-design-services" />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>UI UX Design Services for Websites & Digital Products</h1>
                                    <p>At CodeTrios, we believe design is the foundation of a strong digital presence. As a user experience design company, our creative team combines strategy, aesthetics, usability, and technology to create digital experiences that reflect your brand identity while delivering meaningful results. Every visual element is designed with a clear purpose—to engage users, communicate your message, guide user behavior, and strengthen your brand.</p>
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
                                    <img src={webImage} className='imgFull' alt='UI UX design services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Creative Graphic Design Services – Branding & Visual Identity Experts</h2>
                                    <p>Our UI/UX design services and responsive web design services focus on creating intuitive, visually engaging, and user-centered digital experiences. From website and mobile app interfaces to complete digital products, we also provide responsive weblayout design Services that ensure seamless performance across all devices. We develop designs that balance creativity with functionality, ensuring every interaction feels smooth, consistent, and purposeful.</p>
                                    <p>Whether you are building a new brand identity, refreshing an existing brand, designing a website, or developing a complete digital experience, our team delivers creative branding solutions and compelling visuals that connect with your target audience. We focus on consistent typography, colors, layouts, visual hierarchy, and interaction patterns to build a recognizable and cohesive brand experience supported by strong brand visuals and design services.</p>
                                    <p>From UI/UX design and website design to mobile app design, brand identity, and digital product design, CodeTrios helps businesses turn ideas into engaging visual experiences. Our expertise also includes creative graphic design services, brand graphics & illustrations, animation design services, and motion graphic design services, helping brands communicate more effectively through dynamic and visually rich storytelling. Our design process combines research, strategy, wireframing, prototyping, visual design, and usability considerations to ensure every decision supports your business objectives.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our Design Capabilities</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdDesignServices  /></span>
                                    <h3>Website UI/UX Design</h3>
                                    <p>We design intuitive and aesthetically pleasing layouts that enhance user experience. Every screen is crafted to make navigation seamless, actions clear, and engagement natural, ensuring your users find value without friction.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdWeb /></span>
                                    <h3>Responsive Web Layouts</h3>
                                    <p>Your website adapts perfectly to every device — desktop, tablet, and mobile. Our responsive designs maintain visual consistency while ensuring fast loading and smooth usability across all screen sizes.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaRegIdBadge  /></span>
                                    <h3>Branding & Identity Design</h3>
                                    <p>From logos to complete brand guidelines, we help define your visual identity. Colors, typography, iconography, and styles are strategically combined to represent your brand voice and values. </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaPaintBrush  /></span>
                                    <h3>Creative Graphics & Illustrations</h3>
                                    <p>Custom-designed creatives that align with your brand personality. From marketing banners and social posts to infographics and product visuals — everything is crafted to make your content more engaging. </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaPlayCircle   /></span>
                                    <h3>Animation & Motion Design </h3>
                                    <p>Subtle motion elements, animated graphics, explainer videos, and micro-interactions that add life and depth to your interface. Motion is used not just for aesthetics but to enhance understanding and usability.</p>
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
                                    <h2 className={Style.title}>Design Focused on Users and Business Goals</h2>
                                    <p>With a strong focus on creativity, usability, and conversion, we create designs that not only look beautiful but also solve problems, improve user engagement, and bring your brand to life across digital platforms.</p>
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

export default DesignServices;