import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import digitalImg from '../../assets/images/digital_strategy.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { MdTransform, MdEmail , MdAnalytics, MdFactCheck, MdInsights, MdShare , MdTimeline        } from "react-icons/md";
import { FaBullhorn , FaChartBar  } from "react-icons/fa";
import { BiGitMerge } from "react-icons/bi";
import SEO from '../Common/webSiteMeta.jsx';

const DigitalStrategy = () =>{

    return(
        <>
            <SEO page="digital-strategy-consulting" />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Digital Strategy</h1>
                                    <p>Digital success doesn’t happen by accident—it comes from a clear, data-driven strategy built around your business goals. At CodeTrios, we provide strategic digital solutions as part of our digital strategy consulting services India, helping businesses navigate the evolving digital landscape with actionable insights, structured plans, and performance-focused frameworks. As one of the emerging business strategy consulting firms India, we analyze your audience, market, competitors, and customer journey to develop strategies that create meaningful and measurable business outcomes.</p>
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
                                    <img src={digitalImg} className='imgFull' alt='' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Data-Driven Digital Strategy Services – Grow Your Online Presence</h2>
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
                                    <p>With CodeTrios as your digital strategy partner, you get structured digital consulting services India that are measurable, scalable, and growth-focused. We help your brand show up consistently, connect with the right audience, and perform effectively across the digital ecosystem.</p>
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
                                    <span className={Style.icon}><MdInsights    /></span>
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
                                    <span className={Style.icon}><MdShare    /></span>
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
                                    <span className={Style.icon}><MdTimeline    /></span>
                                    <h3>Conversion Funnel Planning</h3>
                                    <p>Map user journeys from awareness to purchase to ensure more leads turn into customers.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdAnalytics    /></span>
                                    <h3>Performance Measurement & Analytics</h3>
                                    <p>Track KPIs, analyze performance dashboards, and refine campaigns for better ROI.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <div className={Style.commonPading + " " + Style.buildStyle + " " + Style.techStyleOne}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>What We Offer</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdInsights  /></span>
                                            <h3>Audience & Market Research</h3>
                                            <p>A strong strategy starts with understanding your customers.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdInsights  /></span>
                                            <h3>Our research includes:</h3>
                                            <ul>
                                                <li>Demographics, interests & behavior analysis</li>
                                                <li>Pain points & motivation mapping</li>
                                                <li>Buyer persona creation</li>
                                                <li>Market demand and trend analysis</li>
                                                <li>Customer segmentation for targeting</li>
                                            </ul>
                                            <p>This ensures every message and campaign resonates with the right people.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col> 
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaBullhorn  /></span>
                                        <h3>Social & Paid Media Strategy</h3>
                                            <p>We help you identify the right channels and craft campaigns that drive measurable results.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaBullhorn  /></span>
                                            <h3>Strategy components include:</h3>
                                            <ul>
                                                <li>Social media content blueprint</li>
                                                <li>Paid ads budget planning & targeting</li>
                                                <li>Retargeting and remarketing funnels</li>
                                                <li>Multi-channel campaign structure</li>
                                                <li>Storytelling and brand engagement approach</li>
                                            </ul>
                                            <p>This ensures maximum reach and efficient ad spend.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdEmail  /></span>
                                        <h3>Email & Automation Strategy</h3>
                                            <p>Email remains one of the highest ROI digital channels.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdEmail  /></span>
                                            <h3>We create:</h3>
                                            <ul>
                                                <li>Drip email sequences</li>
                                                <li>Customer lifecycle flows</li>
                                                <li>Lead nurturing campaigns</li>
                                                <li>Segmentation & personalization strategies</li>
                                                <li>Performance optimization plans</li>
                                            </ul>
                                            <p>Delivering communication that converts and retains users.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col> 
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><BiGitMerge  /></span>
                                        <h3>Conversion Funnel Optimization</h3>
                                            <p>We map the complete customer journey to eliminate friction and increase conversions. </p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><BiGitMerge  /></span>
                                            <h3>Our funnel strategy includes:</h3>
                                            <ul>
                                                <li>Landing page structure planning</li>
                                                <li>CTA placement and design recommendations</li>
                                                <li>CTA placement and design recommendations</li>
                                                <li>Behavior-driven personalization</li>
                                                <li>A/B testing frameworks</li>
                                            </ul>
                                            <p>Turning your website into a high-performing revenue engine.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col> 
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdAnalytics   /></span>
                                        <h3>Analytics, Tracking & Reporting</h3>
                                            <p>Data drives decisions — we ensure proper tracking and measurement.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdAnalytics   /></span>
                                            <h3>Our analytics setup covers:</h3>
                                            <ul>
                                                <li>· Google Analytics 4 configuration</li>
                                                <li>· Google Tag Manager events & triggers</li>
                                                <li>· Conversion tracking for all campaigns</li>
                                                <li>· Monthly performance reports</li>
                                                <li>· Actionable insights & recommendations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col> 
        
                        </Row>
                    </Container>
                </div> */}
                {/* <div className={Style.whoAreSec}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.box}>
                                    <h2 className={Style.title}>Why Partner with CodeTrio</h2>
                                    <p>We bring years of full-stack experience, technical expertise, and a problem-solving mindset to every consultation. Our aim is simple — to help your business scale confidently in the digital world. </p>
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

export default DigitalStrategy;