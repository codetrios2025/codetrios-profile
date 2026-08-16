import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/technology_solutions.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';

//icon
import { MdSystemUpdateAlt , MdExtension , MdSpeed  } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BsCheckCircle } from "react-icons/bs";

import SEO from '../Common/webSiteMeta.jsx';

const TechnologySolutions = () =>{

    return(
        <>
            <SEO page="custom-software-solutions" />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Custom Software Development Services for Growing Businesses</h1>
                                    <p>Technology is evolving faster than ever, and businesses that adapt early can gain a significant competitive advantage. As a Top Custom software development services company, CodeTrios helps organizations modernize, automate, and scale their operations through powerful, future-ready technology solutions. From system upgrades and Custom software modernization development services to custom software applications, intelligent automation, and technology architecture planning, we deliver solutions tailored to your workflows, business objectives, and long-term growth goals.</p>
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
                                    <img src={webImage} className='imgFull' alt='Custom software development solutions' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Custom Technology Solutions – Automation & Workflow Optimization</h2>
                                    <p>Our technology consulting and digital transformation services help businesses identify opportunities to improve efficiency, reduce operational complexity, and build scalable digital infrastructure. We combine modern technologies, robust development practices, automation software services, and strategic planning to create secure and high-performance systems designed for evolving business needs.</p>
                                    <p>Whether you need enterprise software development, custom application development, business process automation, cloud solutions, system integration, API development services, API integration services, or technology architecture consulting, our team works closely with you to understand your requirements and build solutions that deliver measurable business value.</p>
                                    <p>We also specialize in advanced engineering capabilities such as custom software framework development, machine learning software solutions, and modular software solutions, enabling businesses to build flexible, intelligent, and future-ready digital ecosystems.</p>
                                    <h4>Our Focus Is Simple:</h4>
                                    <ul>
                                        <li><FiCheck className={Style.icon} /> Build secure systems that protect your data, applications, and business operations.</li>
                                        <li><FiCheck className={Style.icon} /> Create fast and high-performance solutions that improve productivity and user experience.</li>
                                        <li><FiCheck className={Style.icon} /> Develop scalable technology that can grow with your business, users, and changing requirements.</li>
                                        <li><FiCheck className={Style.icon} /> Automate repetitive processes through advanced automation software services to reduce manual work and improve operational efficiency.</li>
                                        <li><FiCheck className={Style.icon} /> Modernize existing systems with future-ready technologies and architecture using Custom software modernization development services.</li>
                                        <li><FiCheck className={Style.icon} /> Build long-term technology partnerships that support continuous innovation and digital growth.</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " + Style.weBuild + " " + Style.techStyle}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Custom Software Development Services</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdSystemUpdateAlt  /></span>
                                            <h3>Software Modernization</h3>
                                            <p>Legacy systems slow down productivity and limit innovation. We help transform outdated applications into modern, efficient, and cloud-ready platforms.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdSystemUpdateAlt  /></span>
                                            <h3>Our modernization services include:</h3>
                                            <ul>
                                                <li> Rebuilding monolithic apps into modular architectures</li>
                                                <li> Migrating old codebases to modern frameworks</li>
                                                <li> Upgrading databases, backend technologies, and UI layers</li>
                                                <li> Enhancing security, compliance, and performance</li>
                                                <li> Re-architecting systems for long-term scalability</li>
                                            </ul>
                                            <p>You get faster workflows, improved reliability, and better technology ROI — without disrupting your business operations.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaRobot  /></span>
                                        <h3>Automation & AI Integration</h3>
                                            <p>Eliminate repetitive tasks and reduce operational costs with intelligent automation.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaRobot  /></span>
                                        <h3>We integrate automation and AI across your processes:</h3>
                                            <ul>
                                                <li>Workflow automation for HR, finance, support, and operations</li>
                                                <li>AI-powered chatbots and customer support tools</li>
                                                <li>Predictive analytics for business forecasting</li>
                                                <li>OCR, data extraction, and smart document processing</li>
                                                <li>Auto-emailing, notifications, and pipeline automation</li>
                                                <li>Process mapping & automation strategy planning</li>
                                            </ul>
                                            <p>The result: more productivity, fewer errors, and better decision-making.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><TbApi  /></span>
                                        <h3>API Development & Integration</h3>
                                            <p>A modern business thrives when its systems work together seamlessly. We build secure, reliable APIs and integrate third-party systems to create a connected ecosystem.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><TbApi  /></span>
                                        <h3>Our API services include:</h3>
                                            <ul>
                                                <li>Custom REST & GraphQL API development</li>
                                                <li>Secure authentication (JWT, OAuth, API Keys)</li>
                                                <li>CRM, ERP, LMS, and payment gateway integrations</li>
                                                <li>Microservices architecture for scalability</li>
                                                <li>Real-time data sync between platforms</li>
                                                <li>API performance auditing & optimization</li>
                                            </ul>
                                            <p>This ensures smooth communication across all tools and enhances operational efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdExtension  /></span>
                                        <h3>Custom Framework Solutions</h3>
                                            <p>We build custom software using modern, enterprise-level frameworks to ensure long-term scalability and strong performance.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdExtension  /></span>
                                        <h3>Our expertise covers:</h3>
                                            <ul>
                                                <li>Node.js for fast, scalable backends</li>
                                                <li>React.js for high-performance frontend interfaces</li>
                                                <li>PHP & Laravel for robust, flexible applications</li>
                                                <li>Next.js for modern, SEO-ready web applications</li>
                                                <li>Express.js for lightweight but powerful APIs</li>
                                                <li>MongoDB / MySQL / PostgreSQL for data management</li>
                                            </ul>
                                            <p>Every solution is engineered for high uptime, security, and extensibility.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdSpeed  /></span>
                                            <h3>Performance Optimization</h3>
                                            <p>Slow systems lead to lost revenue — we fix that.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdSpeed  /></span>
                                            <h3>We optimize applications at every level:</h3>
                                            <ul>
                                                <li>Code refactoring and cleanup</li>
                                                <li>Database query optimization</li>
                                                <li>Server load balancing and caching</li>
                                                <li>CDN setup & asset optimization</li>
                                                <li>Cloud scalability enhancements</li>
                                                <li>Monitoring & performance analytics</li>
                                            </ul>
                                            <p>Our goal: make your systems faster, stable, and ready for growth.</p>
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
                                    <h2 className={Style.title}>Technology Built Around Your Business</h2>
                                    <p>From enterprise platforms and intelligent automation to custom applications, modular software solutions, and scalable technology infrastructure, CodeTrios becomes your long-term technology partner, helping your business stay agile, competitive, and prepared for a digital-first future.</p>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Business-Focused Development</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Business-Focused Development</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Scalable Architecture</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Security First</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Long-Term Support</span>
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

export default TechnologySolutions;