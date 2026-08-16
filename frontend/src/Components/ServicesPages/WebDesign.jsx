import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/website-design.webp';
import { FiCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';
import WhyChooseImg from '../../assets/images/why_choose.webp';

//icon
import { FaPencilRuler, FaShoppingCart, FaRegIdBadge, FaBullhorn,  FaUniversalAccess   } from "react-icons/fa";
import { MdWeb, MdDesignServices, MdAutorenew,      } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import {LuBuilding2} from "react-icons/lu";
import { PiBuildingApartmentFill, PiBuildingOfficeLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsHeartPulse } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";

import { BiEdit } from "react-icons/bi";
import Industries from '../Pages/Industries.jsx';
import SEO from '../Common/webSiteMeta.jsx';
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import ServiceSchema from '../SEO/ServiceSchema.jsx';
const WebDesign = () =>{
    const benefits = [
        "Business-focused website strategy",
        "Modern and responsive UI/UX",
        "SEO-friendly website structure",
        "Fast and performance-focused design",
        "Mobile-first user experience",
        "Conversion-focused layouts",
        "Scalable website architecture",
        "Ongoing support and improvements",
    ];

    return(
        <>
            <SEO page="website-design-services" />
            <ServiceSchema
                    name="Website Design Services"
                    description="CodeTrios provides professional website design services for businesses, startups, brands, and organizations, with modern UI/UX, responsive design, SEO-friendly structure, and conversion-focused experiences."
                    url="https://www.codetrios.com/website-design-services"
                    serviceType="Website Design Services"
                />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content} data-aos="fade-up" data-aos-delay="100">
                                    <h1>Professional Website Design Company in India</h1>
                                    <p>We are a leading web design company in India, providing professional, creative, and result-driven website design services in India for businesses, startups, brands, and organizations. As a best website design company in India, we combine innovative design, intuitive user experience, high performance, and conversion-focused strategies to create websites that help businesses grow online.</p>
                                    <CATButton />
                                </div>                            </Col>

                        </Row>
                    </Container>
                </div>
                <div className={'servicesCol ' + Style.commonPading + " " + Style.aboutSec}>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <figure data-aos="fade-up" data-aos-delay="100">
                                    <img src={webImage} className='imgFull' alt='Professional website design services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent} data-aos="fade-up" data-aos-delay="200">
                                    <h2 className={Style.title}>Professional & Affordable Website Design Services in India</h2>
                                    <p>Our professional web design services in India include custom website design in India, responsive web design services in India, WordPress website development, eCommerce website development, UI/UX design, and complete website design and development in India. We create websites that are visually engaging, fast-loading, secure, SEO-friendly, and optimized to perform seamlessly across desktops, tablets, and smartphones.</p>
                                    <p>Whether you are looking for affordable website design in India for a growing business, a WordPress website design in India for your company, or a powerful eCommerce website design in India for your online store, our experienced web design team delivers tailored solutions based on your business goals and target audience.</p>
                                    <p>As an experienced web design company in India, we handle the complete process—from website strategy and planning to UI/UX design, development, mobile responsiveness, performance optimization, and ongoing support. Our custom website design services in India are built to strengthen your brand identity, improve user engagement, generate leads, and drive conversions.</p>
                                    <p></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title} data-aos="fade-up" data-aos-delay="100">Our Offerings Include</h2>
                            </Col>
                        </Row>
                        <Row data-aos="fade-up" data-aos-delay="100">
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdWeb  /></span>
                                    <h3>Corporate & Business Website Design</h3>
                                    {/* <p>Clean, modern, and purpose-driven designs tailored for businesses that want to make a strong digital impression. We create layouts that highlight your value, build credibility, and inspire user action.</p> */}
                                    <p>Clean, modern designs crafted by a leading web design company in India. Ideal for startups, enterprises, and growing brands looking for affordable website design in India.
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdDesignServices    /></span>
                                    <h3>Responsive UI/UX Design</h3>
                                    <p>Pixel-perfect, device-friendly interfaces crafted for an exceptional user experience. Every page is optimized for seamless browsing across mobiles, tablets, and desktops — ensuring maximum engagement.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><BiEdit  /></span>
                                    <h3>Figma / Adobe XD Prototyping</h3>
                                    <p>High-fidelity design prototypes that give you a visual preview of your website before development begins. Structured, scalable, and built following modern design systems.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaShoppingCart   /></span>
                                    <h3>E-commerce Store Design</h3>
                                    <p>Conversion-focused ecommerce website design in India for Shopify, WooCommerce, Magento, and custom platforms. Built for speed, usability, and sales growth.</p>
                                    
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaRegIdBadge   /></span>
                                    <h3>Branding & Visual Identity Design</h3>
                                    <p>Beautiful, cohesive visuals that reflect your brand’s personality. From color palettes and typography to iconography and imagery — we create a design identity that stands out.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaBullhorn   /></span>
                                    <h3>Landing Pages for Ads & Campaigns</h3>
                                    <p>High-impact landing pages optimized for Google Ads, Meta Ads, and marketing campaigns. Designed with CTA-driven layouts to improve conversions and lead generation.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdAutorenew   /></span>
                                    <h3>Revamp & Redesign Services</h3>
                                    <p>Transform outdated websites into fresh, modern, and user-friendly experiences. We improve structure, usability, aesthetics, and overall performance to match today’s design trends.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaUniversalAccess   /></span>
                                    <h3>Accessibility-Focused Design</h3>
                                    <p>WCAG-compliant design solutions that ensure your website is usable for all visitors, including those with disabilities. Better accessibility means broader reach and stronger credibility.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdWeb  /></span>
                                    <h3>Wordpress Website Design</h3>
                                    <p>
                                    We specialize in WordPress website design in India, delivering flexible, scalable, and SEO-ready websites for businesses of all sizes.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
                <Industries />
                <section className={`${Style.whyChooseSection}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Digital Solutions Built Around Your Goals</h2>
                                    <p>Choose us for professional, affordable, and scalable website design and development services in India that combine modern technology, creative design, and business-focused results.</p>
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

export default WebDesign;