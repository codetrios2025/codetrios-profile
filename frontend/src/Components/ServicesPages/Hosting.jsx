import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/hosting.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';

//icon
import { FaServer, FaCloud, FaWordpress   } from "react-icons/fa";
import { MdDesignServices, MdDns, MdSecurity, MdSpeed, MdSupportAgent  } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';

const WebHosting = () =>{

    return(
        <>
            <SEO page="web-hosting-services" />
            <SchemaGraph
                pageType="service"
                pageName="Web Hosting Services"
                pageDescription="CodeTrios provides web hosting services to help businesses deploy and maintain reliable websites and web applications."
                pageUrl="https://www.codetrios.com/web-hosting-services"
                serviceName="Web Hosting Services"
                serviceDescription="Web hosting services for websites and web applications."
                serviceType="Web Hosting"
                breadcrumbs={[
                    {
                        name: "Home",
                        url: "https://www.codetrios.com/"
                    },
                    {
                        name: "Services",
                        url: "https://www.codetrios.com/services"
                    },
                    {
                        name: "Web Hosting Services",
                        url: "https://www.codetrios.com/web-hosting-services"
                    }
                ]}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail + " " + Style.hostingStyle}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Web Hosting Services in India</h1>
                                    <p>Your website’s performance, security, and reliability depend heavily on the quality of its hosting infrastructure. At CodeTrios, we provide secure, high-performance, and scalable web hosting services in India designed to keep your website fast, stable, and accessible around the clock. Recognized as a best web hosting company India, our solutions are built to deliver a smooth user experience while supporting the performance and growth of your digital presence.</p>
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
                                    <img src={webImage} className='imgFull' alt='Secure and scalable web hosting services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Fast, Secure & Scalable Hosting Solutions for Your Digital Growth</h2>
                                    <p>We offer a wide range of hosting solutions including affordable web hosting India, cheap web hosting services India, linux web hosting India, cloud web hosting services India, wordpress web hosting India, business web hosting services India, and shared hosting services India. Whether you are hosting a corporate website, eCommerce store, web application, or high-traffic digital platform, our infrastructure is optimized for speed, reliability, security, and scalability. We combine performance-focused server configurations with proactive monitoring and expert technical support to ensure your website operates without interruption.</p>
                                    <h3>Why Choose CodeTrios Web Hosting?</h3>
                                    <ul>
                                      <li><FiCheck className={Style.icon} /> <strong>99.9% Uptime Assurance –</strong> Keep your website accessible and minimize unexpected downtime.</li>
                                      <li><FiCheck className={Style.icon} /> <strong>Optimized Server Performance –</strong> Fast, reliable infrastructure designed for improved website loading speeds and responsiveness.</li>
                                      <li><FiCheck className={Style.icon} /> <strong>Enterprise-Grade Security –</strong> Robust security measures help protect your website, applications, and data from common online threats.</li>
                                      <li><FiCheck className={Style.icon} /> <strong>Scalable Hosting Plans –</strong> Flexible hosting infrastructure that can scale with your traffic, resources, and business requirements.</li>
                                      <li><FiCheck className={Style.icon} /> <strong>Expert Technical Support –</strong> Get professional assistance with hosting configuration, performance, troubleshooting, and technical requirements.</li>
                                    </ul>
                                    <p>From website hosting and server management to performance optimization, security, and ongoing technical support, CodeTrios provides reliable web hosting services in India that give your business a strong and dependable digital foundation.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our Web Hosting Solutions</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaServer  /></span>
                                    <h3>Shared Hosting</h3>
                                    <p>Affordable Hosting for Small Websites & Startups<br/> Perfect for personal websites, blogs, and small businesses looking for a cost-effective hosting solution without compromising reliability.</p>
                                    <strong>Features:</strong>
                                    <ul>
                                      <li>Budget-friendly plans</li>
                                      <li>cPanel-based management</li>
                                      <li>Email hosting included</li>
                                      <li>Basic security protection</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdDns /></span>
                                    <h3>VPS Hosting</h3>
                                    <p>Greater Power, Control & Performance <br/>Designed for growing businesses that require dedicated resources, improved speed, and higher flexibility.</p>
                                    <strong>Features:</strong>
                                    <ul>
                                      <li>Dedicated CPU & RAM</li>
                                      <li>Faster load times</li>
                                      <li>Root access & customization</li>
                                      <li>Enhanced security</li>
                                      <li>Scalable resources</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaCloud /></span>
                                    <h3>Cloud Hosting</h3>
                                    <p>Flexible & Scalable Hosting for Modern Applications <br />Cloud hosting ensures high availability and performance even during traffic spikes.</p>
                                    <strong>Features:</strong>
                                    <ul>
                                      <li>Auto-scaling resources</li>
                                      <li>High availability architecture</li>
                                      <li>Pay-as-you-grow pricing</li>
                                      <li>Cloud-based backups</li>
                                      <li>Disaster recovery support</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdSecurity /></span>
                                    <h3>Security & Reliability</h3>
                                    <p>Protecting Your Website & Data at Every Layer <br />We follow industry best practices to keep your website safe from threats and data loss.</p>
                                    <strong>Features:</strong>
                                    <ul>
                                      <li>Free SSL certificate setup</li>
                                      <li>Firewall & malware protection</li>
                                      <li>Regular security updates</li>
                                      <li>Automated daily backups</li>
                                      <li>DDoS mitigation</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdSpeed /></span>
                                    <h3>Performance & Optimization</h3>
                                    <p>Speed-Optimized Hosting for Better User Experience <br />We fine-tune every hosting environment to ensure fast loading times and smooth website performance.</p>
                                    <strong>Performance Enhancements:</strong>
                                    <ul>
                                      <li>SSD-powered servers</li>
                                      <li>Server-side caching</li>
                                      <li>CDN integration</li>
                                      <li>Optimized PHP & database configuration</li>
                                      <li>Continuous speed monitoring</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdSupportAgent   /></span>
                                    <h3>Managed Hosting Support</h3>
                                    <p>We Manage the Server, You Manage Your Business <br />With CodeTrios Managed Hosting, our experts take care of all technical operations so you can stay focused on growth.</p>
                                    <strong>Managed Services Include:</strong>
                                    <ul>
                                      <li>Server setup & configuration</li>
                                      <li>Website migration</li>
                                      <li>Regular updates & patches</li>
                                      <li>Performance tuning</li>
                                      <li>24/7 monitoring & support </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaWordpress /></span>
                                    <h3>WordPress Hosting</h3>
                                    <p>Fast and secure WordPress hosting optimized for business websites, blogs, portfolios, and content-driven websites.</p>
                                    <ul>
                                        <li>WordPress installation</li>
                                        <li>SSL configuration</li>
                                        <li>Performance optimization</li>
                                        <li>Security configuration</li>
                                        <li>Website migration</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaServer /></span>
                                    <h3>Business Web Hosting</h3>
                                    <p>Reliable hosting for company websites, professional services, portals, and growing businesses that need better performance, security, and technical support.</p>
                                    <ul>
                                        <li>Business email support</li>
                                        <li>SSL & security setup</li>
                                        <li>Performance optimization</li>
                                        <li>Regular backups</li>
                                        <li>Technical assistance</li>
                                    </ul>
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
                                    <h2 className={Style.title}>Why Choose CodeTrios for Web Hosting?</h2>
                                    <p>From enterprise platforms and intelligent automation to custom applications, modular software solutions, and scalable technology infrastructure, CodeTrios becomes your long-term technology partner, helping your business stay agile, competitive, and prepared for a digital-first future.</p>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Website + Hosting Expertis</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Performance Optimization</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Website Migration</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>SSL & Security Configuration</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Regular Backups</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Scalable Infrastructure</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Technical Support</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Developer-Friendly Hosting</span>
                                    </div>
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

export default WebHosting;