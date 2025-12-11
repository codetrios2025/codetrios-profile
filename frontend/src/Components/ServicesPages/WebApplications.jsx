import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/E-commerceSolutions.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { MdDeveloperMode , MdWeb } from "react-icons/md";
import { BiGitMerge } from "react-icons/bi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsCloudCheck } from "react-icons/bs";

const WebApplications = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Web Applications</h1>
                            <p>High‑performance mobile apps for Android and iOS users.</p>
                        </Col>
                    </Row>
                </Container>
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
                                <h2 className={Style.title}>Web Applications </h2>
                                <p>We create custom web applications that empower your business to operate efficiently from anywhere. Our apps are built to perform — secure, user-friendly, and adaptable across all devices — ensuring both your team and your customers have the best experience. </p>
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
                            <h2 className={Style.title}>Our Expertise</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdDeveloperMode  /></span>
                                <h3>Custom Application Development</h3>
                                <p>From CRMs to booking systems — built to your exact needs.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdWeb  /></span>
                                <h3>Progressive Web Apps (PWAs)</h3>
                                <p>Fast, reliable, and installable apps that perform like native ones. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><BiGitMerge  /></span>
                                <h3>API Development & Integration</h3>
                                <p>Secure, well-documented APIs for better system connectivity.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><HiBuildingOffice2  /></span>
                                <h3>Enterprise Applications</h3>
                                <p>Role-based dashboards, workflows, and analytics for large teams. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><BsCloudCheck  /></span>
                                <h3>Cloud Integration</h3>
                                <p>Deploy and manage your apps on AWS, Azure, or Google Cloud.</p>
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
                                <h2 className={Style.title}>Why Choose Our Web Applications? </h2>
                                <p>We focus on performance, security, and user experience. Our applications are modular, easy to maintain, and designed to scale as your business grows.  </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <VisionComponent />
        </div>
    )
}

export default WebApplications;