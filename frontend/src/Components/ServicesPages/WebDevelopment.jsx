import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web-deve.webp';

import VisionComponent from '../Pages/VisionCode';
//icon
import { FaBuilding , FaReact } from "react-icons/fa";
import { MdSupportAgent, MdDashboardCustomize  } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";


const WebDevelopment = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>Website Development</h1>
                                <p>At CodeTrios, we develop high-performance, scalable, and SEO-optimized websites that reflect your brand and drive engagement. Whether it’s a business site, portfolio, or enterprise-level platform — we ensure speed, security, and smooth functionality every step of the way.</p>
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
                                <h2 className={Style.title}>Custom Web Development Services – Fast, Secure & Scalable Solutions</h2>
                                <p>At CodeTrios, we build high-performance, scalable, and SEO-optimized websites designed to represent your brand with precision and deliver an exceptional user experience. Our development approach focuses on clean architecture, fast loading speeds, and secure infrastructure—ensuring y”:lkytrewZ, M1ur website performs reliably across all devices and platforms.</p>
                                <p>Whether you need a corporate website, portfolio, eCommerce store, or a fully customized enterprise platform, we combine modern technologies with industry best practices to deliver digital solutions that support your growth. Every website we build is engineered for long-term success, backed by performance tuning, mobile responsiveness, and seamless integrations that streamline your operations.</p>
                                <p>We follow a structured development workflow—strategy, design, coding, testing, and deployment—to ensure your project is handled with transparency and quality control. Our team builds with future scalability in mind, enabling your platform to grow as your business expands, gains traffic, or requires new features.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
             <div className={"boxHeight " + Style.commonPading + " " + Style.weBuild}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>Our Web Development Services</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><FaBuilding  /></span>
                                        <h3>Corporate & Business Websites</h3>
                                        <p>We build professional, conversion-focused corporate websites that help businesses establish trust, communicate value clearly, and generate quality leads. Our sites are designed with strategic layouts, modern branding, and optimized performance to support strong digital credibility. Whether you're a startup, SME, or enterprise, we create tailored web experiences that reinforce your brand identity, highlight your services, and drive measurable engagement.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><FaBuilding  /></span>
                                        <h3>What You Get:</h3>
                                        <ul>
                                            <li>High-end corporate UI/UX</li>
                                            <li>Clear information architecture</li>
                                            <li>Speed-optimized & secure code</li>
                                            <li>Lead generation elements (forms, CTAs, funnels)</li>
                                            <li>Multi-page company profiles & service sections</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><MdDashboardCustomize  /></span>
                                        <h3>CMS Development</h3>
                                        <p>We develop easy-to-manage websites using powerful CMS platforms like WordPress, Drupal, Strapi, or fully customized admin panels. Our CMS solutions give you full control over your content so you can update pages, blogs, banners, media, and forms without technical knowledge.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><MdDashboardCustomize  /></span>
                                        <h3>What You Get:</h3>
                                        <ul>
                                            <li>Customizable dashboards</li>
                                            <li>Role-based user access</li>
                                            <li>SEO-friendly structures</li>
                                            <li>Plugin/module integration</li>
                                            <li>Secure & scalable architecture</li>
                                        </ul>
                                        <p>Perfect for businesses wanting flexibility and long-term content management independence.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><BiCodeCurly  /></span>
                                        <h3>Custom PHP & Node.js Development</h3>
                                        <p>Our team builds robust backend systems using PHP and Node.js to power web applications that require speed, automation, and scalability. Whether it's a custom CRM, booking system, analytics dashboard, or enterprise management solution, we develop secure and modular backends that grow with your business.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><BiCodeCurly  /></span>
                                        <h3>What You Get:</h3>
                                        <ul>
                                            <li>Custom APIs & microservices</li>
                                            <li>High-load performance optimization</li>
                                            <li>Database design & integration</li>
                                            <li>Secure authentication & role management</li>
                                            <li>Flexible, upgrade-ready architecture</li>
                                        </ul>
                                        <p>Your backend becomes reliable, efficient, and tailored to your exact workflow.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><FaReact  /></span>
                                        <h3>React.js Frontend Development</h3>
                                        <p>We build lightning-fast, interactive, and modern user interfaces using React.js, the most widely adopted JavaScript framework for high-performance applications. React enables real-time UI updates, smooth transitions, and exceptional mobile responsiveness—ideal for dashboards, SaaS platforms, eCommerce frontends, and enterprise applications.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><FaReact  /></span>
                                        <h3>What You Get:</h3>
                                        <ul>
                                            <li>Component-based architecture</li>
                                            <li>Pixel-perfect UI components</li>
                                            <li>Optimized rendering & state management</li>
                                            <li>API-driven dynamic pages</li>
                                            <li>Extremely fast load & response times</li>
                                        </ul>
                                        <p>Your application feels modern, polished, and engineered for user engagement.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.buildElem}>
                                <div className={Style.content}>
                                    <div className={Style.flipFront}>
                                        <span className={Style.icon}><MdSupportAgent  /></span>
                                        <h3>Website Maintenance & Support</h3>
                                        <p>Your website needs continuous monitoring, optimization, and updates to stay secure and performing at its best. Our maintenance services ensure your digital presence remains healthy, bug-free, and future-ready.</p>
                                    </div>
                                    <div className={Style.flipBack}>
                                        <span className={Style.icon}><MdSupportAgent  /></span>
                                        <h3>What You Get:</h3>
                                        <ul>
                                            <li>Regular security patches & updates</li>
                                            <li>Performance tuning & speed optimization</li>
                                            <li>Daily/weekly backups</li>
                                            <li>Uptime monitoring & issue resolution</li>
                                            <li>New features, content updates & enhancements</li>
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

export default WebDevelopment;