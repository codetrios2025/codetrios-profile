import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web_development.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
//icon
import { FaBuilding , FaReact } from "react-icons/fa";
import { MdSupportAgent, MdDashboardCustomize  } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import SEO from '../Common/webSiteMeta.jsx';
import ServiceSchema from '../SEO/ServiceSchema.jsx';
const WebDevelopment = () =>{
    const benefits = [
        "Business-focused development",
        "Responsive and mobile-first implementation",
        "SEO-friendly technical structure",
        "Fast and performance-focused websites",
        "Scalable architecture",
        "Clean and maintainable code",
        "API and third-party integrations",
        "Ongoing maintenance and support",
    ];
    return(
        <>
            <SEO page="web-development" />
            <ServiceSchema
                name="Web Development Services"
                description="CodeTrios provides scalable web development services for businesses, startups, and enterprises, building fast, secure, responsive, and high-performance websites and web applications."
                url="https://www.codetrios.com/web-development-services"
                serviceType={[
                    "Web Development",
                    "Custom Web Development",
                    "React Development",
                    "MERN Stack Development",
                    "Web Application Development"
                ]}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Web Development Company in India</h1>
                                    <p>At CodeTrios, we are a professional website development company delivering high-performance, scalable, secure, and SEO-friendly digital solutions for businesses of all sizes. Our website development services are designed to create fast, reliable, and user-focused websites that accurately represent your brand and provide an exceptional experience across all devices.</p>
                                    <CATButton />
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
                                    <img src={webImage} className='imgFull' alt='Custom web development services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Custom Web Development Services – Fast, Secure & Scalable Solutions</h2>
                                    <p>As an experienced web development agency, we offer end-to-end solutions covering website design and development, frontend web development, backend development services, and full stack web development. We combine modern technologies, clean coding practices, robust architecture, and industry best practices to build websites that are optimized for performance, security, usability, and long-term scalability.</p>
                                    <p>Whether you need a corporate website, portfolio website, eCommerce store, WordPress website, or a fully customized enterprise platform, our team develops solutions tailored to your specific business requirements. Our website development services include responsive development, custom functionality, third-party API integrations, database development, performance optimization, security implementation, and SEO-ready architecture.</p>
                                    <p>Our structured development process covers strategy, UI/UX design, frontend development, backend development, testing, optimization, and deployment. This systematic approach enables our website development company to maintain transparency, quality control, and consistency throughout every stage of your project</p>
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
                                            <h3>Corporate & Business Website Development</h3>
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
                <section className={`${Style.whyChooseSection}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Development Focused on Performance, Quality & Growth</h2>
                                    <p>We build every website with future growth in mind. Whether you expect increased traffic, need new features, or plan to expand your digital operations, our scalable architecture makes it easier to evolve your platform over time. From frontend web development and intuitive interfaces to powerful backend development services and complete full stack web development, CodeTrios provides reliable digital solutions built for performance and long-term success</p>
                                    {benefits.map((benefit, index) => (
                                        <div className={Style.benefitItem}>
                                            <BsCheckCircle
                                                className={Style.icon}
                                            />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                    <Link to="/about-us" className={Style.btnStyle} title="Learn more about CodeTrios">Learn More</Link>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <figure data-aos="fade-up" data-aos-delay="100">
                                    <img src={WhyChooseImg} className='imgFull' alt='Why Choose CodeTrios?' width="1747" height="1334" />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>             
                <CATComponent />
            </div>
        </>
    )
}

export default WebDevelopment;