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


const WebDesign = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>Website Design</h1>
                                <p>At CodeTrios, we develop high-performance, scalable, and SEO-optimized websites that reflect your brand and drive engagement. Whether it’s a business site, portfolio, or enterprise-level platform — we ensure speed, security, and smooth functionality every step of the way.</p>
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
                                <h2 className={Style.title}>Professional Website Design Services – Modern & Responsive Business Websites</h2>
                                <p>Modern, responsive websites that convert visitors into customers. We design visually appealing, user-focused websites that reflect your brand identity and deliver seamless experiences across all devices. Our layouts are created with strategic UX, clear navigation, and strong visual hierarchy to increase engagement and guide users toward actions like inquiries, bookings, or purchases. Every design balances aesthetics with performance, ensuring your website is fast, accessible, and aligned with your business goals.</p>
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
                                <p>Clean, modern, and purpose-driven designs tailored for businesses that want to make a strong digital impression. We create layouts that highlight your value, build credibility, and inspire user action.</p>
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
                                <p>Conversion-ready storefronts designed for Shopify, WooCommerce, Magento, or custom e-commerce builds. We ensure intuitive navigation, fast checkout flows, and strong product presentation.</p>
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
                    </Row>
                </Container>
            </div>
            {/* <div className={Style.whoAreSec}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.box}>
                                <h2 className={Style.title}>Why Choose Our Web Development? </h2>
                                <p>Whether you’re starting fresh or revamping an existing site, we ensure your web presence is built to engage, perform, and grow. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            
            <VisionComponent />
        </div>
    )
}

export default WebDesign;