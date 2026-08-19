import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import digitalImg from '../../assets/images/digital_strategy.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';

//icon
import { MdTransform, MdEmail , MdAnalytics, MdFactCheck, MdInsights, MdShare , MdTimeline        } from "react-icons/md";
import { FaBullhorn , FaChartBar, FaChartLine  } from "react-icons/fa";
import { FaUsersViewfinder, FaDiagramProject, FaFilterCircleDollar } from "react-icons/fa6";
import { BiGitMerge } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';

const DigitalStrategy = () =>{
    const benefits = [
        "Strategy aligned with business objectives",
        "Data-informed decision making",
        "Clear digital growth roadmap",
        "Customer-focused digital experiences",
        "Integrated channel planning",
        "Measurable performance indicators",
        "Conversion-focused strategy",
        "Scalable long-term approach",
    ];
    return(
        <>
            <SEO page="digital-strategy-consulting" />
            <SchemaGraph
                pageType="service"
                pageName="Digital Strategy Consulting"
                pageDescription="CodeTrios provides digital strategy consulting to help businesses plan effective digital experiences, technology solutions and growth strategies."
                pageUrl="https://www.codetrios.com/digital-strategy-consulting"
                serviceName="Digital Strategy Consulting"
                serviceDescription="Digital strategy consulting services for businesses planning digital products, websites and technology solutions."
                serviceType="Digital Strategy Consulting"
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
                        name: "Digital Strategy Consulting",
                        url: "https://www.codetrios.com/digital-strategy-consulting"
                    }
                ]}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Digital Strategy Consulting for Sustainable Online Growth</h1>
                                    <p>Digital success doesn’t happen by accident—it comes from a clear, data-driven strategy built around your business goals. At CodeTrios, we provide strategic digital solutions as part of our digital strategy consulting services India, helping businesses navigate the evolving digital landscape with actionable insights, structured plans, and performance-focused frameworks. As one of the emerging business strategy consulting firms India, we analyze your audience, market, competitors, and customer journey to develop strategies that create meaningful and measurable business outcomes.</p>
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
                                    <img src={digitalImg} className='imgFull' alt='Digital strategy consulting services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Digital Strategy Consulting for Sustainable Business Growth</h2>
                                    <p>Our digital strategy and consulting services and digital consulting services India cover the complete customer journey, helping businesses optimize every digital touchpoint across websites, search engines, social media, content, and paid marketing channels. From building a strong digital foundation to improving campaign performance, our strategies are designed to increase visibility, engagement, qualified traffic, and conversions. We also specialize in IT strategy consulting services India, ensuring that your technology and digital ecosystem work seamlessly with your business goals.</p>
                                    <p>Whether you are launching a new brand, expanding into new markets, scaling an existing business, or refining your marketing funnel, our digital marketing strategy consulting India approach ensures we create custom digital marketing strategies aligned with your objectives. Our approach combines audience research, market analysis, SEO strategy, content planning, social media strategy, paid advertising, conversion optimization, and performance analytics to create a unified digital growth roadmap.</p>
                                    <p>We also help businesses develop digital business consulting services India that turn insights into actionable decisions. By continuously analyzing performance, user behavior, and conversion data, we identify opportunities to improve campaigns, optimize customer journeys, and maximize your marketing investment.</p>
                                    <p>From digital strategy and SEO planning to social media, paid marketing, content strategy, and conversion optimization, CodeTrios delivers integrated digital roadmaps designed to maximize your brand’s online visibility, strengthen engagement, generate qualified leads, and drive sustainable business growth.</p>
                                    <h4>Our Strategic Approach</h4>
                                    <ul>
                                        <li><FiCheck className={Style.icon} /> <strong>Research & Insights –</strong> Understand your audience, market, competitors, and business opportunities.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Strategy & Planning –</strong> Build a clear digital roadmap aligned with your business goals.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Channel Optimization –</strong> Strengthen your presence across search, web, social, content, and paid channels.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Conversion Strategy –</strong> Optimize customer journeys and digital touchpoints to improve conversions.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Performance Analytics –</strong> Measure results, identify opportunities, and continuously refine your strategy.</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild + " " + Style.buildStyle}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our Digital Strategy Expertise Includes</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaUsersViewfinder    /></span>
                                    <h3>Audience Research & Insights</h3>
                                    <p>We identify who your customers are, what they need, and where they spend their time online.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaChartBar    /></span>
                                    <h3>Competitor Analysis</h3>
                                    <p>Understand what top players in your industry are doing — and how to outperform them.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaDiagramProject    /></span>
                                    <h3>Channel Strategy & Optimization</h3>
                                    <p>A clear plan for where to invest your efforts — SEO, social media, paid ads, email, etc.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaBullhorn    /></span>
                                    <h3>Brand Positioning & Messaging</h3>
                                    <p>Define how your brand should speak, present itself, and differentiate in the market.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaFilterCircleDollar    /></span>
                                    <h3>Conversion Funnel Planning</h3>
                                    <p>Map user journeys from awareness to purchase to ensure more leads turn into customers.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaChartLine    /></span>
                                    <h3>Performance Measurement & Analytics</h3>
                                    <p>Track KPIs, analyze performance dashboards, and refine campaigns for better ROI.</p>
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
                                    <h2 className={Style.title}>Strategy Focused on Business Outcomes</h2>
                                    <p>With CodeTrios as your digital strategy partner, you get structured digital consulting services India that are measurable, scalable, and growth-focused. We help your brand show up consistently, connect with the right audience, and perform effectively across the digital ecosystem.</p>
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

export default DigitalStrategy;