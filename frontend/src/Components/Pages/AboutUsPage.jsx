import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web-design.webp';
import AboutBanner from '../../assets/images/about-banner.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
//Icon
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt } from "react-icons/tb";
import { FaServer, FaWordpress } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

//Components
import AboutUs from '../HomeRoute/About';
import ContactUs from '../HomeRoute/Contact';

const AboutUsPage = ()=>{
    const [isOPen, setIsopen] = useState(false);

    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }

    return(
        <>
        <div className={Style.innerPage + " " + Style.aboutPage}>
            <div className={Style.innerBanner}>
                <img src={AboutBanner} />
            </div>
            <AboutUs />
            <div className={Style.commonPading + " " +Style.weBuild}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>What We Buile</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><TbDeviceDesktopCode  /></span>
                                <h3>Frontend Development that Converts </h3>
                                <p>Architecting responsive, fast UI/UX with modern stacks like **React.js, JavaScript, HTML5, CSS3, and Bootstrap** to maximize user engagement. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaServer  /></span>
                                <h3>Scalable & Secure Backend Solutions </h3>
                                <p>Building robust, high-performance architecture powered by **Node.js, PHP, and MySQL** for stable growth and reliable data handling. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaWordpress  /></span>
                                <h3>Enterprise WordPress & CMS Customisation </h3>
                                <p>Delivering powerful, bespoke platforms via **custom themes, plugins, API integrations**, and advanced customisation for any content need. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><TbSeo  /></span>
                                <h3>SEO & Performance First </h3>
                                <p>Every platform is built from the ground up for speed, search-visibility, and **high engagement scores** to ensure you rank and convert. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><AiOutlineCloudServer  /></span>
                                <h3>Server & Cloud Deployment </h3>
                                <p>Setting up cloud-ready, secure, and scalable environments tailored for your business, ensuring **seamless deployment and uptime.** </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.aboutSec + " " + Style.whyUs}>
                <Container>
                    <Row>
                        <Col md={5}>
                            <figure>
                                <img src={WhyChooseImg} className='imgFull' alt='' width="1747" height="1334" />
                            </figure>
                        </Col>
                        <Col md={7}>
                            <div className={Style.aboutContent}>
                                <h2 className={Style.title}>Why Choose Code Trios? </h2>
                                <ul>
                                    <li>
                                        <h4><RiLoopLeftLine  className={Style.icon} /> Full-Cycle Delivery </h4>
                                        <p>We manage the project from initial planning and architecture, through development, launch, and **ongoing support.** </p>
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
            <div className={Style.visionSec}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.visionElem}>
                                <h4>Your vision deserves more than just code — it deserves commitment.</h4>
                                <p>At Code Trios, we combine creativity, technical excellence, and strategic clarity to <br />craft solutions that drive real business growth.</p>
                                <button type='button'onClick={formOpenHandler} className={Style.btnStyle}>Request a free project</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        {isOPen && 
            <div className={Style.formPop}>
                <div className={Style.formElem}>
                    <button type='button' onClick={formCloseHandler} className={Style.closeBtn}><IoCloseSharp /></button>
                    <ContactUs />
                </div>
            </div>
        }
        </>
    )
}

export default AboutUsPage;