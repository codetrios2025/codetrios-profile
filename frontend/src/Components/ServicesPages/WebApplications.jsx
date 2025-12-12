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
                            <div className={Style.content}>
                                <h1>Web Applications</h1>
                                <p>We create custom web applications that empower your business to operate efficiently from anywhere. Our apps are built to perform — secure, user-friendly, and adaptable across all devices — ensuring both your team and your customers have the best experience. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.commonPading + " " + Style.aboutSec}>
                <Container>
                    <Row>
                        <Col md={5}>
                            <figure>
                                <img src={webImage} className='imgFull' alt='' width="1747" height="1334" />
                            </figure>
                        </Col>
                        <Col md={7}>
                            <div className={Style.aboutContent}>
                                <h2 className={Style.title}>Web Applications </h2>
                                <p>We build powerful, scalable, and secure web applications that streamline your operations and elevate user experience. Whether you need internal tools, customer portals, or enterprise-level platforms, our solutions are tailored to your business goals and optimized for long-term growth. Accessible from any device — fast, intuitive, and engineered for performance.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.commonPading + " " +Style.weBuild}>
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
            <div className={Style.commonPading + " " + Style.buildStyle}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>Our Expertise</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={Style.buildContainer}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Custom Application Development</h3>
                                        <p>Fully customized systems — CRMs, booking engines, workflow tools, task managers, HR systems, and more — built to match your exact business requirements with intuitive UIs and smart automation.</p>
                                    </div>
                                </div>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Progressive Web Apps (PWAs)</h3>
                                        <p>Ultra-fast apps with offline functionality, push notifications, and home-screen installation. Ideal for businesses wanting mobile-first engagement without the cost of separate Android/iOS development.</p>
                                    </div>
                                </div>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>API Development & Integration</h3>
                                        <p>Secure RESTful APIs, GraphQL endpoints, and third-party API integrations designed for stability and scalability. We ensure smooth communication between your app, services, and databases.</p>
                                    </div>
                                </div>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Enterprise Applications</h3>
                                        <p>Advanced, multi-user systems designed for large teams and complex operations. </p>
                                        <strong>Features include:</strong>
                                        <ul>
                                            <li>Role-based control & permissions</li>
                                            <li>Custom dashboards</li>
                                            <li>Multi-step workflows</li>
                                            <li>Real-time analytics & reporting</li>
                                            <li>Audit logs & activity tracking</li>
                                        </ul>
                                        <p>Perfect for organizations that need a powerful internal digital backbone.</p>
                                    </div>
                                </div>

                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Cloud Integration</h3>
                                        <p>Seamless deployment and integration with leading cloud providers — AWS, Azure, or Google Cloud.</p>
                                        <strong>Our cloud services include:</strong>
                                        <ul>
                                            <li>Serverless architecture setup</li>
                                            <li>CI/CD pipelines</li>
                                            <li>Load balancing & scalability planning</li>
                                            <li>Backup & disaster recovery</li>
                                            <li>App monitoring and performance tuning</li>
                                        </ul>
                                    </div>
                                </div>
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
    )
}

export default WebApplications;