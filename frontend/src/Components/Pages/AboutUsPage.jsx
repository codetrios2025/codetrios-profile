import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import AboutBanner from '../../assets/images/about-banner.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
//Icon
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt } from "react-icons/tb";
import { FaServer, FaWordpress } from "react-icons/fa";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";


//Components
import AboutUs from '../HomeRoute/About';
import VisionComponent from './VisionCode';

const AboutUsPage = ()=>{
    return(
        <>
        <div className={Style.innerPage + " " + Style.aboutPage}>
            <div className={Style.innerBanner}>
                <img src={AboutBanner} />
            </div>
            <AboutUs />
            <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title} data-aos="fade-up">What We Build</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box} data-aos="fade-up" data-aos-delay="200">
                                <span className={Style.icon}><TbDeviceDesktopCode /></span>
                                <h3>Frontend Development that Converts</h3>
                                <p>Architecting responsive, fast UI/UX with modern stacks like **React.js, JavaScript, HTML5, CSS3, and Bootstrap** to maximize user engagement.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box} data-aos="fade-up" data-aos-delay="300">
                                <span className={Style.icon}><FaServer /></span>
                                <h3>Scalable & Secure Backend Solutions</h3>
                                <p>Building robust, high-performance architecture powered by **Node.js, PHP, and MySQL** for stable growth and reliable data handling.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box} data-aos="fade-up" data-aos-delay="300">
                                <span className={Style.icon}><FaWordpress /></span>
                                <h3>Enterprise WordPress & CMS Customisation</h3>
                                <p>Delivering powerful, bespoke platforms via **custom themes, plugins, API integrations**, and advanced customisation for any content need.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box} data-aos="fade-up" data-aos-delay="400">
                                <span className={Style.icon}><TbSeo /></span>
                                <h3>SEO & Performance First</h3>
                                <p>Every platform is built from the ground up for speed, search-visibility, and **high engagement scores** to ensure you rank and convert.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.aboutSec + " " + Style.whyUs}>
                <Container>
                    <Row>
                        <Col md={5}>
                            <figure data-aos="fade-right" data-aos-delay="100">
                                <img src={WhyChooseImg} className='imgFull' alt='' width="1747" height="1334" />
                            </figure>
                        </Col>
                        <Col md={7}>
                            <div className={Style.aboutContent} data-aos="fade-left" data-aos-delay="200">
                                <h2 className={Style.title}>Why Choose Code Trios</h2>
                               <ul>
                                    <li>
                                        <h4><RiLoopLeftLine className={Style.icon} /> Full-Cycle Delivery</h4>
                                        <p>We manage the project from initial planning and architecture, through development, launch, and **ongoing support.**</p>
                                    </li>
                                    <li>
                                        <h4><RiTeamLine className={Style.icon} /> Single Team, Multiple Disciplines </h4>
                                        <p>No need to juggle different vendors for frontend, backend, SEO, and hosting. Get **complete end-to-end service** from one trusted partner. </p>
                                    </li>
                                    <li>
                                        <h4><BiTargetLock className={Style.icon} /> Client-Focused, Detail-Oriented </h4>
                                        <p>We listen, we adapt, and we guarantee delivery **on time and on budget.** Your vision is our priority. </p>
                                    </li>
                                    <li>
                                        <h4><TbWorldBolt className={Style.icon} /> Future-Proof Solutions</h4>
                                        <p>Our commitment to clean code, modular design, and maintainability ensures your platform **scales effortlessly** with your business.</p>
                                    </li>
                                </ul>
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

export default AboutUsPage;