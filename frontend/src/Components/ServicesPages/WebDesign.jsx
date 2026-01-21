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
                                    <p>At CodeTrios, we provide professional website design services in India, delivering high-performance, scalable, and SEO-optimized websites that reflect your brand and drive engagement. As a trusted web design company in India, we build business websites, portfolios, WordPress sites, and enterprise platforms with speed, security, and seamless user experience. Whether it’s a business site, portfolio, or enterprise-level platform — we ensure speed, security, and smooth functionality every step of the way.</p>
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
                                    <p>
                                    We are a best website design company in India offering custom website design, responsive web design services, and complete website design and development solutions. Our professional web design services in India focus on user experience, performance, and conversion-driven layouts. Whether you need a WordPress website design in India, an eCommerce website design, or a fully custom solution, we ensure your website looks stunning and performs flawlessly across all devices.
                                    </p>

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
                                   
                                   <p>
                                    CodeTrios is a trusted web design company in India offering custom website design, responsive web design services, WordPress website design, ecommerce website design, and complete website design and development solutions. Our affordable website design services in India help businesses establish a strong digital presence and achieve measurable growth.
                                    </p>
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