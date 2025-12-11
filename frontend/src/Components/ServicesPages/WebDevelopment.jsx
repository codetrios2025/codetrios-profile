import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/E-commerceSolutions.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { FaBuilding, FaNodeJs, FaReact } from "react-icons/fa";
import { MdSupportAgent, MdDashboardCustomize  } from "react-icons/md";


const WebDevelopment = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
            </div>
            <div className={Style.commonPading + " " + Style.aboutSec}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <figure>
                                <img src={webImage} className='imgFull' alt='' width="1747" height="1334" />
                            </figure>
                        </Col>
                        <Col md={6}>
                            <div className={Style.aboutContent}>
                                <h2 className={Style.title}>Web Development </h2>
                                <p>At CodeTrio, we develop high-performance, scalable, and SEO-optimized websites that reflect your brand and drive engagement. Whether it’s a business site, portfolio, or enterprise-level platform — we ensure speed, security, and smooth functionality every step of the way. </p>
                                <h4>Our offerings include: </h4>
                                <ul>
                                    <li><FiCheck className={Style.icon} /> Custom Application Development </li>
                                    <li><FiCheck className={Style.icon} /> Mobile & Progressive Web Apps </li>
                                    <li><FiCheck className={Style.icon} /> PHP & Node.js Development </li>
                                    <li><FiCheck className={Style.icon} /> API Development & Integration </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.commonPading + " " +Style.weBuild}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>Our Web Development Services</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaBuilding  /></span>
                                <h3>Corporate & Business Websites </h3>
                                <p>Professional, conversion-driven web presence.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdDashboardCustomize   /></span>
                                <h3>CMS Development</h3>
                                <p>Manage your content easily with WordPress, Drupal, or custom CMS.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaNodeJs  /></span>
                                <h3>Custom PHP & Node.js Development</h3>
                                <p>Tailored backends built for reliability.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaReact  /></span>
                                <h3>React.js Frontend Development </h3>
                                <p>Lightning-fast interfaces for modern web apps.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdSupportAgent  /></span>
                                <h3>Website Maintenance & Support </h3>
                                <p> Continuous updates, backups, and performance checks.</p>
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
                                <h2 className={Style.title}>Why Choose Our Web Development? </h2>
                                <p>Whether you’re starting fresh or revamping an existing site, we ensure your web presence is built to engage, perform, and grow. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <VisionComponent />
        </div>
    )
}

export default WebDevelopment;