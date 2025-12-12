import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import digitalImg from '../../assets/images/digital-strategy.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { MdTransform, MdAutorenew, MdAnalytics, MdFactCheck, MdInsights, MdShare , MdTimeline        } from "react-icons/md";
import { FaChartLine, FaChartBar , FaBullhorn  } from "react-icons/fa";


const DigitalStrategy = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>Digital Strategy</h1>
                                <p>Our work doesn’t stop at development — we offer strategic digital consultancy to guide your business toward growth and innovation. From identifying the right tools to optimizing your online strategy, we help you make smarter technology decisions.</p>
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
                                <img src={digitalImg} className='imgFull' alt='' width="1747" height="1334" />
                            </figure>
                        </Col>
                        <Col md={7}>
                            <div className={Style.aboutContent}>
                                <p>Digital success doesn’t happen by accident — it happens through a clear, data-driven strategy. At CodeTrios, we help businesses navigate the digital landscape with actionable insights, structured plans, and performance-focused frameworks. From understanding your audience to optimizing every touchpoint, our strategies ensure your brand shows up consistently and effectively across web, search, social, and paid marketing channels.</p>
                                <p>Whether you’re launching a new brand, scaling an existing one, or refining your marketing funnel, we build custom digital roadmaps that maximize visibility, engagement, and conversions.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.commonPading + " " +Style.weBuild + " " + Style.buildStyle}>
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
            <div className={Style.commonPading + " " + Style.buildStyle}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>What We Offer</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={Style.buildContainer}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Audience & Market Research</h3>
                                        <p>A strong strategy starts with understanding your customers.</p>
                                        <strong>Our research includes:</strong>
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
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Competitor & Industry Analysis</h3>
                                        <p>We study your competitors to identify their strengths and weaknesses.</p>
                                        <strong>Our analysis covers:</strong>
                                        <ul>
                                            <li>Competitor website & content audits</li>
                                            <li>Social media and engagement reports</li>
                                            <li>SEO keyword and ranking comparison</li>
                                            <li>Ad strategies, creatives & positioning</li>
                                            <li>Gaps and opportunities in the market</li>
                                        </ul>
                                        <p>This helps us build a strategy that puts you ahead of your competition.</p>
                                    </div>
                                </div>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>SEO Strategy & Content Planning</h3>
                                        <p>We create a long-term SEO roadmap that improves your visibility and search ranking.</p>
                                        <strong>Our SEO strategy includes:</strong>
                                        <ul>
                                            <li>Keyword research & clustering</li>
                                            <li>On-page optimization planning</li>
                                            <li>Technical SEO recommendations</li>
                                            <li>Content calendar creation</li>
                                            <li>Link-building and authority growth plan</li>
                                        </ul>
                                        <p>Designed to generate consistent, high-quality organic traffic.</p>
                                    </div>
                                </div>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Social & Paid Media Strategy</h3>
                                        <p>We help you identify the right channels and craft campaigns that drive measurable results.</p>
                                        <strong>Strategy components include:</strong>
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
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Email & Automation Strategy</h3>
                                        <p>Email remains one of the highest ROI digital channels.</p>
                                        <strong>We create:</strong>
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
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Conversion Funnel Optimization</h3>
                                        <p>We map the complete customer journey to eliminate friction and increase conversions. </p>
                                        <strong>Our funnel strategy includes:</strong>
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
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <h3>Analytics, Tracking & Reporting</h3>
                                        <p>Data drives decisions — we ensure proper tracking and measurement.</p>
                                        <strong>Our analytics setup covers:</strong>
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
            </div>
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
    )
}

export default DigitalStrategy;