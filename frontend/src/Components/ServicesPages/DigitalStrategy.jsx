import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/E-commerceSolutions.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { MdTransform, MdAutorenew, MdAnalytics, MdFactCheck, MdAssessment     } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";


const DigitalStrategy = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Digital Strategy</h1>
                            <p>Data‑driven digital roadmaps to grow your online presence.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.commonPading + " " + Style.aboutSec}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <figure>
                                <img src={webImage} className='imgFull' alt='' width="1747" height="1334" />
                            </figure>
                        </Col>
                        <Col md={6}>
                            <div className={Style.aboutContent}>
                                <h2 className={Style.title}>Business Consultancy </h2>
                                <p>Our work doesn’t stop at development — we offer strategic digital consultancy to guide your business toward growth and innovation. From identifying the right tools to optimizing your online strategy, we help you make smarter technology decisions. </p>
                                <h4>Our consultancy services include: </h4>
                                <ul>
                                    <li><FiCheck className={Style.icon} /> Digital Strategy & Roadmapping </li>
                                    <li><FiCheck className={Style.icon} /> Process Automation  </li>
                                    <li><FiCheck className={Style.icon} /> Technology Consulting </li>
                                    <li><FiCheck className={Style.icon} /> Workflow Optimization  </li>
                                    <li><FiCheck className={Style.icon} /> Growth & Marketing Support  </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.commonPading + " " +Style.weBuild}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>Our Consultancy Focus Areas: </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdTransform   /></span>
                                <h3>Digital Transformation Strategy</h3>
                                <p>Build a roadmap to move your business online efficiently.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdAutorenew   /></span>
                                <h3>Process Automation</h3>
                                <p>Identify tasks that can be optimized with smart technology. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdAnalytics   /></span>
                                <h3>Technology Evaluation</h3>
                                <p>Choose the right tools and platforms for your goals. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdFactCheck   /></span>
                                <h3>Performance Audits</h3>
                                <p> Analyze and improve existing digital systems. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaChartLine  /></span>
                                <h3>Growth & Marketing Strategy</h3>
                                <p>Blend development and marketing for long-term success.</p>
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
                                <h2 className={Style.title}>Why Partner with CodeTrio</h2>
                                <p>We bring years of full-stack experience, technical expertise, and a problem-solving mindset to every consultation. Our aim is simple — to help your business scale confidently in the digital world. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <VisionComponent />
        </div>
    )
}

export default DigitalStrategy;