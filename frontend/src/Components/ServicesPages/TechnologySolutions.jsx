import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/technology_solutions.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { MdSystemUpdateAlt , MdExtension , MdSpeed  } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { TbApi } from "react-icons/tb";


const TechnologySolutions = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>Technology Solutions</h1>
                                <p>We help businesses adopt cutting-edge technologies and modern frameworks to streamline workflows and boost performance. Whether it’s automation, AI integration, or custom software, CodeTrios ensures your tech stack is built for the future. .</p>
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
                                <h2 className={Style.title}>Custom Technology Solutions – Automation & Workflow Optimization</h2>
                                <p>Technology is evolving faster than ever — and businesses that adapt early gain a massive competitive advantage. At CodeTrios, we help companies modernize, automate, and scale their operations using powerful, future-ready technologies. Whether you need system upgrades, custom applications, intelligent automation, or architecture planning, we deliver solutions tailored to your exact workflows and growth goals.</p>
                                <h4>Our focus is simple:</h4>
                                <ul>
                                    <li><FiCheck className={Style.icon} /> Build systems that are secure, fast, scalable, and built to last.</li>
                                    <li><FiCheck className={Style.icon} /> From enterprise tools to smart automation, we become your long-term technology partner, ensuring your business stays ahead in a digital-first world.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className={Style.commonPading + " " +Style.weBuild}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>What We Do</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdSystemUpdateAlt  /></span>
                                <h3>Software Modernization</h3>
                                <p>Upgrade legacy systems with the latest tech stack. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdAutoMode  /></span>
                                <h3>Automation & AI Integration</h3>
                                <p>Simplify workflows, reduce manual effort, and boost productivity. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><TbApi  /></span>
                                <h3>API Development & Integration</h3>
                                <p>Connect your software ecosystem for seamless data flow.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><BiLayer  /></span>
                                <h3>Custom Framework Solutions</h3>
                                <p>Node.js, React, and PHP-based tech solutions for scalable systems. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdSpeed   /></span>
                                <h3>Performance Optimization</h3>
                                <p> Speed, stability, and scalability built into every layer. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <div className={"boxHeight " + Style.commonPading + " " + Style.weBuild + " " + Style.techStyle}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>What We Do</h2>
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
            
            <VisionComponent />
        </div>
    )
}

export default TechnologySolutions;