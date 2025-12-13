import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/design_services.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { FaRegIdBadge, FaPaintBrush, FaPlayCircle    } from "react-icons/fa";
import { MdDesignServices   } from "react-icons/md";
import { MdWeb } from "react-icons/md";


const DesignServices = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>Design Services</h1>
                                <p>Design is at the heart of what we do. Our creative team crafts visually stunning and user-centric designs that build trust and tell your brand story effectively. From branding to responsive layouts, we make your digital identity stand out.</p>
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
                                <h2 className={Style.title}>Creative Graphic Design Services – Branding & Visual Identity Experts</h2>
                                <p>Design is the foundation of your brand’s digital presence — and at CodeTrios, we ensure every visual element reflects quality, clarity, and purpose. Our creative team combines strategy, aesthetics, and usability to craft designs that don’t just look beautiful, but also solve problems, guide user behavior, and bring your brand to life.</p>
                                <p>Whether you’re building a new identity, refreshing an old one, or designing a full digital experience, we help you stand out with compelling visuals that connect with your audience and strengthen your brand.</p>
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
            {/* <div className={Style.commonPading + " " + Style.buildStyle}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>Our Design Offerings</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><MdDesignServices  /></span>
                                        <h3>UI/UX Design</h3>
                                        <p>We create human-centered design systems that balance aesthetics with functionality.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><MdDesignServices  /></span>
                                        <h3>Our UI/UX process includes:</h3>
                                        <ul>
                                            <li>User journey mapping</li>
                                            <li>Wireframing and prototyping</li>
                                            <li>Visual UI design with modern trends</li>
                                            <li>Usability testing and refinement</li>
                                            <li>Design systems and component libraries</li>
                                        </ul>
                                        <p>interfaces that feel effortless, look modern, and convert better.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><MdWeb  /></span>
                                        <h3>Website Redesign</h3>
                                        <p>Outdated websites hurt trust and conversions — we fix that.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><MdWeb  /></span>
                                        <h3>Our redesigns focus on:</h3>
                                        <ul>
                                            <li>Modernizing the visual layout</li>
                                            <li>Improving navigation and structure</li>
                                            <li>Enhancing mobile responsiveness</li>
                                            <li>Increasing engagement and conversions</li>
                                            <li>Strengthening brand alignment</li>
                                        </ul>
                                        <p>We retain what works and rebuild what doesn’t, transforming your site into a high-performing digital asset.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><FaRegIdBadge  /></span>
                                        <h3>Brand Identity & Logo Design</h3>
                                        <p>Your logo and branding are the first impression customers get — we make it impactful.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><FaRegIdBadge  /></span>
                                        <h3>Our branding services cover:</h3>
                                        <ul>
                                            <li>Logo concepts and finalization</li>
                                            <li>Color palette engineering</li>
                                            <li>Typography selection</li>
                                            <li>Brand voice & personality mapping</li>
                                            <li>Full brand guidelines documentation</li>
                                        </ul>
                                        <p>This ensures your brand looks consistent everywhere — online and offline.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><FaPaintBrush  /></span>
                                        <h3>Graphics & Illustrations</h3>
                                        <p>Custom-made visuals that capture attention and support your marketing goals.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><FaPaintBrush  /></span>
                                        <h3>We design:</h3>
                                        <ul>
                                            <li>Social media creatives</li>
                                            <li>Ad banners & hero images</li>
                                            <li>Corporate brochures & presentations</li>
                                            <li>Icons, infographics & diagrams</li>
                                            <li>Product and feature illustrations</li>
                                        </ul>
                                        <p>Each graphic is optimized for clarity, readability, and engagement.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><FaPlayCircle  /></span>
                                        <h3>Motion & Animation</h3>
                                        <p>Motion adds clarity, emotion, and modern appeal to your interfaces.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><FaPlayCircle  /></span>
                                        <h3>We create:</h3>
                                        <ul>
                                            <li>UI micro-interactions</li>
                                            <li>Logo animations</li>
                                            <li>Explainer animations</li>
                                            <li>Scroll-triggered effects</li>
                                            <li>Animated banners & product visuals</li>
                                        </ul>
                                        <p>Animations are carefully applied to guide user attention without overwhelming the experience.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>       
                    </Row>
                </Container>
            </div> */}
            <VisionComponent />
        </div>
    )
}

export default DesignServices;