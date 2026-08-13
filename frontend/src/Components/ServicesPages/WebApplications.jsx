import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web_application.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { MdDeveloperMode , MdWeb } from "react-icons/md";
import { BiGitMerge } from "react-icons/bi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsCloudCheck } from "react-icons/bs";
import SEO from '../Common/webSiteMeta.jsx';
const WebApplications = () =>{

    return(
        <>
            <SEO  page="web-application-development" />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Web Applications</h1>
                                    <p>At CodeTrios, we build powerful, scalable, and secure web applications designed to streamline business operations, improve productivity, and deliver exceptional user experiences. Our web application development solutions are tailored to your specific business requirements, helping you transform complex processes into fast, intuitive, and easy-to-use digital platforms.</p>
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
                                    <h2 className={Style.title}>Mobile App Development Services – Android & iOS App Experts</h2>
                                    <p>In addition to web solutions, we are a full-service mobile application development company offering end-to-end mobile app development services. Our expertise includes custom mobile app development, iOS and Android app development, and advanced cross-platform app development to ensure your product reaches users across all devices efficiently. We also provide specialized iOS app development services and Android app development services, delivering high-performance native applications tailored to each platform. As a trusted app development agency, we help businesses turn ideas into scalable mobile products that drive engagement and growth.</p>
                                    <p>Whether you need custom web applications, internal business tools, customer portals, SaaS platforms, dashboards, or enterprise-level web applications, our experienced development team creates solutions that align with your business goals. We focus on clean architecture, robust security, high performance, and scalability to ensure your application remains reliable as your business and user base grow.</p>
                                    <p>Our web applications are built to work seamlessly across devices and platforms, providing users with a consistent experience whether they access your application from a desktop, tablet, or smartphone. From intuitive interfaces and responsive frontend development to powerful backend systems, databases, APIs, and third-party integrations, we deliver complete solutions engineered for performance and long-term reliability.</p>
                                    <p>With a structured approach covering strategy, UI/UX design, development, testing, deployment, and ongoing optimization, CodeTrios helps businesses build both web and mobile applications that simplify operations, enhance customer engagement, and create a strong foundation for digital growth.</p>
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
                                    <span className={Style.icon}><MdDeveloperMode  /></span>
                                    <h3>Custom Application Development</h3>
                                    <p>End-to-end development of bespoke web applications built around your business processes. From internal CRMs and inventory systems to customer portals and advanced workflow apps — we turn complex requirements into a seamless digital experience.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdWeb  /></span>
                                    <h3>Mobile & Progressive Web Apps (PWAs)</h3>
                                    <p>Modern, high-speed applications that feel and function like native mobile apps. PWAs work offline, are installable on mobile devices, and deliver exceptional performance — perfect for reaching users anytime, anywhere, without app-store limitations.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdWeb  /></span>
                                    <h3>PHP & Node.js Development</h3>
                                    <p>Robust backend systems built using industry-leading technologies. Whether you need the stability of PHP or real-time capabilities of Node.js, we architect solutions that scale effortlessly and remain secure under heavy usage.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><BiGitMerge  /></span>
                                    <h3>API Development & Integration</h3>
                                    <p>We design clean, secure, and well-documented APIs that allow systems to communicate effortlessly. From third-party integrations (payment gateways, CRMs, ERPs) to custom internal APIs — we ensure reliable data flow across all platforms.</p>
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
                {/* <div className={Style.whoAreSec}>
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
                </div> */}
                
                <VisionComponent />
            </div>
        </>
    )
}

export default WebApplications;