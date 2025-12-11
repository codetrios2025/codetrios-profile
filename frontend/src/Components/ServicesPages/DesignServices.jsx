import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/E-commerceSolutions.webp';
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';
//icon
import { FaRegIdBadge, FaPaintBrush, FaPlayCircle    } from "react-icons/fa";
import { MdDesignServices   } from "react-icons/md";
import { MdWeb } from "react-icons/md";


const DesignServices = () =>{

    return(
        <div className={Style.innerPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
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
                                <h2 className={Style.title}>Design Services </h2>
                                <p>Design is at the heart of what we do. Our creative team crafts visually stunning and user-centric designs that build trust and tell your brand story effectively. From branding to responsive layouts, we make your digital identity stand out. </p>
                                <h4>Our design capabilities: </h4>
                                <ul>
                                    <li><FiCheck className={Style.icon} /> Website UI/UX Design </li>
                                    <li><FiCheck className={Style.icon} /> Responsive Web Layouts </li>
                                    <li><FiCheck className={Style.icon} /> Branding & Identity Design  </li>
                                    <li><FiCheck className={Style.icon} /> Creative Graphics & Illustrations  </li>
                                    <li><FiCheck className={Style.icon} /> Animation & Motion Design   </li>
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
                            <h2 className={Style.title}>Our Design Offerings: </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdDesignServices  /></span>
                                <h3>UI/UX Design</h3>
                                <p>Human-centered interfaces that are both beautiful and intuitive. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><MdWeb /></span>
                                <h3>Website Redesign</h3>
                                <p>Modern makeovers to boost engagement and performance.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaRegIdBadge  /></span>
                                <h3>Brand Identity & Logo Design</h3>
                                <p>Establish your unique visual presence. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaPaintBrush  /></span>
                                <h3>Graphics & Illustrations</h3>
                                <p>Eye-catching visuals for marketing and digital use. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaPlayCircle   /></span>
                                <h3>Motion & Animation </h3>
                                <p> Bring your brand to life with smooth, modern animations. </p>
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
                                <h2 className={Style.title}>Our Design Approach</h2>
                                <p>We blend creativity with usability — ensuring that every design not only looks great but drives interaction and results.</p>
                                <p>We use the latest tools like Figma, Adobe XD, and After Effects to deliver pixel-perfect designs.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <VisionComponent />
        </div>
    )
}

export default DesignServices;