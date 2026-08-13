import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/website-design.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { FaPencilRuler, FaShoppingCart, FaRegIdBadge, FaBullhorn,  FaUniversalAccess   } from "react-icons/fa";
import { MdWeb, MdDesignServices, MdAutorenew,      } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import SEO from '../Common/webSiteMeta.jsx';

const WebDesign = () =>{

    return(
        <>
            <SEO page="website-design-services"
            title="Best Professional website design services Company in India | Affordable Custom Responsive web design services India"
            description="Best website design company in India providing professional, affordable, custom, responsive, WordPress & ecommerce website design and development services in Delhi, NCR India."
            keywords="website design services in India, best website design company India, professional web design services India, affordable website design India, custom website design India, responsive web design services India, wordpress website design India, ecommerce website design India, website design and development India, web design company India"

            />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Website Design</h1>
                                    <p>We are a leading web design company in India, providing professional, creative, and result-driven website design services in India for businesses, startups, brands, and organizations. As a best website design company in India, we combine innovative design, intuitive user experience, high performance, and conversion-focused strategies to create websites that help businesses grow online.</p>
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
                                    <img src={webImage} className='imgFull' alt='' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
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
                                <h2 className={Style.title}>Our Offerings Include</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdWeb  /></span>
                                    <h3>Landing Page & Corporate Website Design</h3>
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
                <div className={Style.whoAreSec}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.box}>
                                    <h5>Choose us for professional, affordable, and scalable website design and development services in India that combine modern technology, creative design, and business-focused results.</h5>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
               

                <VisionComponent />
            </div>
        </>
    )
}

export default WebDesign;