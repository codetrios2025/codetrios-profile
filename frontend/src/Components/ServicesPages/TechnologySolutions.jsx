import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/E-commerceSolutions.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { MdSystemUpdateAlt, MdAutoMode, MdSpeed  } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { BiLayer } from "react-icons/bi";

const TechnologySolutions = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Technology Solutions</h1>
                            <p>Custom tech solutions to streamline and automate your workflow.</p>
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
                                <h2 className={Style.title}>Technology Solutions </h2>
                                <p>We help businesses adopt cutting-edge technologies and modern frameworks to streamline workflows and boost performance. Whether it’s automation, AI integration, or custom software, CodeTrio ensures your tech stack is built for the future. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.commonPading + " " +Style.weBuild}>
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
            </div>
            
            <VisionComponent />
        </div>
    )
}

export default TechnologySolutions;