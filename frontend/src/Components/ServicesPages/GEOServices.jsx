import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/geo-img.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { FaServer, FaCloud, FaWordpress } from "react-icons/fa";
import { FiSearch, FiBarChart2 } from "react-icons/fi";
import { FaBrain, FaMicrochip, FaChartLine } from "react-icons/fa6";
import { HiOutlineGlobeAlt, HiOutlineMegaphone, HiOutlinePresentationChartLine } from "react-icons/hi2";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdDesignServices, MdDns, MdSecurity, MdSpeed, MdSupportAgent, MdManageSearch, MdVerifiedUser  } from "react-icons/md";
import SEO from '../Common/webSiteMeta.jsx';
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt, TbSettingsAutomation } from "react-icons/tb";
import { RiLoopLeftLine, RiGlobalLine, RiTeamLine, RiFileTextLine, RiAiGenerate } from "react-icons/ri";
import { BiTargetLock, BiSearchAlt } from "react-icons/bi";

const GEOServices = () =>{

    return(
        <>
            <SEO page="geo-seo-services" />
            <div className={Style.innerPage + " " + Style.servicesDetail + " " + Style.hostingStyle}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Geo & SEO Services</h1>
                                    <p>CodeTrios helps businesses increase their visibility across traditional search engines and AI-powered platforms through AI Search Engine Optimization, Generative Engine Optimization (GEO), and LLM Optimization Services. We optimize your website, content, and digital authority so your business becomes the trusted answer in Google Search, AI Overviews, ChatGPT, Gemini, Claude, Perplexity, and other AI-driven search experiences.</p>
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
                                    <h2 className={Style.title}>AI Search Engine Optimization Services</h2>
                                    <p>The future of search has changed. Customers no longer rely only on Google—they also ask AI assistants like ChatGPT, Gemini, Claude, and Perplexity for recommendations, products, services, and business solutions.</p>
                                    <p>At CodeTrios, we help organizations adapt to this new era with advanced AI Search Optimization Services. Our strategies combine Technical SEO, Semantic SEO, Entity Optimization, AI Content Optimization, and Generative Engine Optimization Services to improve visibility across both search engines and AI-powered platforms.</p>
                                    <p>Whether you're a startup, SaaS company, eCommerce brand, healthcare provider, educational institution, or enterprise, our experts create customized strategies that increase organic traffic, AI search rankings, and qualified leads.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our AI SEO & GEO Services</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FiSearch  /></span>
                                    <h3>AI Search Engine Optimization</h3>
                                    <p>Our AI Search Engine Optimization services help businesses improve visibility across Google Search and AI-powered search experiences.</p>
                                    <strong>Our services include::</strong>
                                    <ul>
                                      <li>AI-friendly website optimization</li>
                                      <li>Semantic SEO</li>
                                      <li>Search intent optimization</li>
                                      <li>Entity SEO</li>
                                      <li>Structured data implementation</li>
                                      <li>AI-ready metadata</li>
                                      <li>Topical authority development</li>
                                      <li>Technical AI optimization</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><TbSeo /></span>
                                    <h3>AI SEO Services</h3>
                                    <p>As a leading provider of AI SEO Services in India, we use advanced AI tools and proven SEO strategies to help businesses achieve long-term growth.</p>
                                    <strong>Our AI SEO solutions include:</strong>
                                    <ul>
                                      <li>AI-powered keyword research</li>
                                      <li>Competitor analysis</li>
                                      <li>AI-assisted SEO strategy</li>
                                      <li>Search trend analysis</li>
                                      <li>Website optimization</li>
                                      <li>Content planning</li>
                                      <li>Performance tracking</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><HiOutlineGlobeAlt /></span>
                                    <h3>Generative Engine Optimization (GEO) Services</h3>
                                    <p>Our Generative Engine Optimization Services help businesses become trusted sources that AI platforms reference when generating responses.</p>
                                    <strong>Our GEO Services include:</strong>
                                    <ul>
                                      <li>AI citation optimization</li>
                                      <li>Knowledge Graph optimization</li>
                                      <li>Brand entity optimization</li>
                                      <li>Conversational content strategy</li>
                                      <li>AI-friendly website architecture</li>
                                      <li>FAQ optimization</li>
                                      <li>Structured content implementation</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><RiFileTextLine /></span>
                                    <h3>AI Content Optimization</h3>
                                    <p>High-quality content is essential for AI search visibility.</p>
                                    <strong>Our AI Content Optimization services include:</strong>
                                    <ul>
                                      <li>AI-optimized landing pages</li>
                                      <li>Service page optimization</li>
                                      <li>Blog content strategy</li>
                                      <li>Topic clusters</li>
                                      <li>EEAT optimization</li>
                                      <li>Conversational content</li>
                                      <li>AI-ready FAQs</li>
                                      <li>Semantic content enhancement</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaBrain /></span>
                                    <h3>LLM Optimization Services</h3>
                                    <p>Large Language Models rely on structured, authoritative, and trustworthy content.</p>
                                    <strong>Our LLM Optimization Services improve your visibility across:</strong>
                                    <ul>
                                      <li>ChatGPT</li>
                                      <li>Google AI Overviews</li>
                                      <li>Gemini</li>
                                      <li>Claude</li>
                                      <li>Perplexity</li>
                                      <li>Microsoft Copilot</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><HiOutlineMegaphone   /></span>
                                    <h3>AI Search Marketing Services</h3>
                                    <p>Expand your digital reach through AI-powered search marketing strategies.</p>
                                    <strong>Our AI Search Marketing services include:</strong>
                                    <ul>
                                      <li>AI visibility campaigns</li>
                                      <li>Organic growth strategies</li>
                                      <li>Content marketing</li>
                                      <li>Digital PR</li>
                                      <li>Authority building</li>
                                      <li>AI citation management</li>
                                      <li>Reputation management</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={Style.aboutSec + " " + Style.whyUs}>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <figure data-aos="fade-right" data-aos-delay="100">
                                    <img src={WhyChooseImg} className='imgFull' alt='' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent} data-aos="fade-left" data-aos-delay="200">
                                    <h2 className={Style.title}>Why Choose CodeTrios?</h2>
                                    <ul>
                                        <li>
                                            <h4><FaMicrochip className={Style.icon} /> AI-First SEO Strategy</h4>
                                            <p>We combine traditional SEO with AI Search Optimization to prepare your business for the future of search.</p>
                                        </li>
                                        <li>
                                            <h4><RiGlobalLine className={Style.icon} /> GEO Specialists </h4>
                                            <p>Our GEO experts optimize your business for AI-generated search experiences and conversational search. </p>
                                        </li>
                                        <li>
                                            <h4><FiBarChart2 className={Style.icon} /> Data-Driven Optimization </h4>
                                            <p>Every decision is backed by analytics, keyword research, user intent, and AI search insights. </p>
                                        </li>
                                        <li>
                                            <h4><TbSettingsAutomation className={Style.icon} /> Custom AI SEO Solutions</h4>
                                            <p>Every business receives a customized optimization strategy based on industry, competition, and business goals.</p>
                                        </li>
                                        <li>
                                            <h4><HiOutlineDocumentReport className={Style.icon} /> Transparent Reporting</h4>
                                            <p>Track keyword rankings, AI visibility, organic traffic, and business growth with detailed monthly reports. </p>
                                        </li>
                                        <li>
                                            <h4><FaChartLine className={Style.icon} /> Long-Term Growth</h4>
                                            <p>We focus on sustainable SEO and GEO strategies that continue delivering value as AI search evolves.</p>
                                        </li>
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
                                <h2 className={Style.title}>Our Process</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdManageSearch  /></span>
                                    <h3>Website & AI Search Audit</h3>
                                    <p>We evaluate your website's SEO performance, technical health, content quality, and AI readiness.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><BiSearchAlt /></span>
                                    <h3>AI Keyword & Entity Research</h3>
                                    <p>Our team identifies high-value keywords, search intent, entities, and opportunities to improve AI visibility.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><TbSeo /></span>
                                    <h3>Content & Technical Optimization</h3>
                                    <p>We optimize website architecture, metadata, structured data, content, and technical SEO to improve discoverability.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><RiAiGenerate /></span>
                                    <h3>AI Content Optimization</h3>
                                    <p>We create authoritative, conversational, and AI-friendly content designed to rank in both search engines and AI platforms.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdVerifiedUser /></span>
                                    <h3>Authority & GEO Enhancement</h3>
                                    <p>Through digital PR, citations, backlinks, and entity optimization, we strengthen your online authority.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><HiOutlinePresentationChartLine   /></span>
                                    <h3>Continuous Monitoring</h3>
                                    <p>We monitor rankings, AI search visibility, traffic, user engagement, and conversions while continuously refining the strategy.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={Style.whoAreSec}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.box}>
                                    <h2 className={Style.title}>Ready to Rank Higher?</h2>
                                    <p>Whether you're looking to dominate local search, increase organic traffic, or optimize <br />for the future of AI-powered search, CodeTrios delivers SEO and GEO strategies that drive measurable business growth.</p>
                                    <h4>Let's build your digital visibility and turn search traffic into loyal customers.</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <VisionComponent />
            </div>
        </>
    )
}

export default GEOServices;