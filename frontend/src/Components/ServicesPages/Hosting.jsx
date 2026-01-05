import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/hosting.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { FaServer, FaCloud   } from "react-icons/fa";
import { MdDesignServices, MdDns, MdSecurity, MdSpeed, MdSupportAgent  } from "react-icons/md";
import SEO from '../Common/webSiteMeta.jsx';

const WebHosting = () =>{

    return(
        <>
            <SEO page="web-hosting-services" />
            <div className={Style.innerPage + " " + Style.servicesDetail + " " + Style.hostingStyle}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Web Hosting Services</h1>
                                    <p>At CodeTrios, we offer reliable and high-performance web hosting services designed to keep your website fast, secure, and always online. From startups to enterprise platforms, our hosting solutions are built to support your business at every stage.</p>
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
                                    <h2 className={Style.title}>Fast, Secure & Scalable Hosting Solutions for Your Digital Growth</h2>
                                    <p>Your website’s success depends on its hosting. We ensure lightning-fast speed, strong security, and maximum uptime — so your visitors always get the best experience.</p>
                                    <h3>Why Choose CodeTrios Web Hosting?</h3>
                                    <ul>
                                      <li><FiCheck className={Style.icon} />99.9% uptime assurance</li>
                                      <li><FiCheck className={Style.icon} />Optimized server performance</li>
                                      <li><FiCheck className={Style.icon} />Enterprise-grade security</li>
                                      <li><FiCheck className={Style.icon} />Scalable hosting plans</li>
                                      <li><FiCheck className={Style.icon} />Expert technical support</li>
                                    </ul>
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
        </>
    )
}

export default WebHosting;