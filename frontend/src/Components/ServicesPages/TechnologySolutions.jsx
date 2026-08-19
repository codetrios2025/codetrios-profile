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
import { FaRobot, FaLaptopCode } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BsCheckCircle } from "react-icons/bs";
//Components
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';

const TechnologySolutions = () =>{
    
    return(
        <>
            <SEO page="custom-software-solutions" />
            <SchemaGraph
                pageType="service"
                pageName="Custom Software Solutions"
                pageDescription="CodeTrios develops custom software solutions designed around the specific business requirements of organizations and growing companies."
                pageUrl="https://www.codetrios.com/custom-software-solutions"
                serviceName="Custom Software Solutions"
                serviceDescription="Custom software development solutions designed around specific business requirements."
                serviceType="Custom Software Development"
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
                        name: "Custom Software Solutions",
                        url: "https://www.codetrios.com/custom-software-solutions"
                    }
                ]}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Custom Software Development Company in India</h1>
                                    <p>CodeTrios is a custom software development company in India helping businesses build secure, scalable, and high-performance software solutions tailored to their specific workflows and business goals. From business automation and enterprise applications to API integrations and software modernization, we create technology solutions designed for long-term growth.</p>
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
                                    <h2 className={Style.title}>Custom Software Development Services for Business Growth</h2>
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
                                <h2 className={Style.title}>Our Custom Software Development Services</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdSystemUpdateAlt  /></span>
                                            <h3>Business Software Development</h3>
                                            <p>We build custom business applications that simplify operations, organize information, and help teams manage their day-to-day workflows more efficiently.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdSystemUpdateAlt  /></span>
                                            <h3>What We Build</h3>
                                            <ul>
                                                <li>Internal business applications</li>
                                                <li>Customer portals</li>
                                                <li>Management systems</li>
                                                <li>Workflow applications</li>
                                                <li>Custom dashboards</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaRobot  /></span>
                                            <h3>Business Automation & AI Integration</h3>
                                            <p>Automate repetitive processes and connect intelligent technologies with your existing business systems to improve productivity and reduce manual work.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaRobot  /></span>
                                            <h3>Automation Solutions</h3>
                                            <ul>
                                                <li>Workflow automation</li>
                                                <li>AI-powered business tools</li>
                                                <li>Automated notifications</li>
                                                <li>Document and data processing</li>
                                                <li>Business process automation</li>

                                            </ul>
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
                                            <p>Connect your applications and third-party platforms through secure and reliable APIs designed for efficient data exchange and system integration.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><TbApi  /></span>
                                            <h3>API Services</h3>
                                            <ul>
                                                <li>REST API development</li>
                                                <li>GraphQL API development</li>
                                                <li>Third-party API integration</li>
                                                <li>Payment gateway integration</li>
                                                <li>CRM and ERP integrations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdExtension  /></span>
                                            <h3>Software Modernization</h3>
                                            <p>Modernize outdated software and legacy applications to improve performance, security, maintainability, and scalability.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdExtension  /></span>
                                            <h3>Modernization Services</h3>
                                            <ul>
                                                <li>Legacy application modernization</li>
                                                <li>Technology upgrades</li>
                                                <li>Database modernization</li>
                                                <li>Architecture improvements</li>
                                                <li>Security and performance improvements</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaLaptopCode  /></span>
                                            <h3>Custom Application Development</h3>
                                            <p>Develop purpose-built applications around your specific business requirements, workflows, users, and operational needs.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaLaptopCode  /></span>
                                            <h3>Application Solutions</h3>
                                            <ul>
                                                <li>Customer portals</li>
                                                <li>Business dashboards</li>
                                                <li>SaaS applications</li>
                                                <li>Workflow management systems</li>
                                                <li>Enterprise applications</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>  
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdSpeed  /></span>
                                            <h3>Performance & Scalability</h3>
                                            <p>Optimize software systems to handle growing traffic, users, data, and business operations while maintaining reliable performance.</p>                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdSpeed  /></span>
                                            <h3>Performance Services</h3>
                                            <ul>
                                                <li>Code optimization</li>
                                                <li>Database optimization</li>
                                                <li>Caching strategies</li>
                                                <li>Server optimization</li>
                                                <li>Application monitoring</li>
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
                                    <h2 className={Style.title}>Custom Software Built Around Your Business</h2>
                                    <p>CodeTrios combines business understanding, modern development practices, and scalable technology to create software solutions that solve real business problems. Our development approach focuses on reliability, security, performance, and long-term maintainability.</p>
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
                                    <img src={WhyChooseImg} className='imgFull' alt='Why Choose CodeTrios for custom software development?' width="1747" height="1334" />
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