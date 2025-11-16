import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import servicesImg from '../../assets/images/hero-banner.webp';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";


const OurServices = () =>{
    return(
        <div className={Style.commonPading + " " + Style.servicesSec}>
            <Container>
                <Row>
                    <Col>
                        <h2 className={Style.title}>Our Services</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={Style.servicesBox}>
                            <figure>
                                <img src={servicesImg} alt='' />
                            </figure>
                            <div className={Style.content}>
                                <span><FaPaintBrush className={Style.icon} /></span>
                                <h3>Website Design</h3>
                                <p>Need an online store that sells? We build smooth, secure e-commerce websites that make shopping easy and help you increase sales.</p>
                                <Link to="">Read More <BsArrowRight className={Style.icon} /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox}>
                            <figure>
                                <img src={servicesImg} alt='' />
                            </figure>
                            <div className={Style.content}>
                                <span><IoCodeSlash className={Style.icon} /></span>
                                <h3>Web Development</h3>
                                <p>Need an online store that sells? We build smooth, secure e-commerce websites that make shopping easy and help you increase sales.</p>
                                <Link to="">Read More <BsArrowRight className={Style.icon} /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox}>
                            <figure>
                                <img src={servicesImg} alt='' />
                            </figure>
                            <div className={Style.content}>
                                <span><FaMobileAlt className={Style.icon} /></span>
                                <h3>Mobile App Development</h3>
                                <p>Need an online store that sells? We build smooth, secure e-commerce websites that make shopping easy and help you increase sales.</p>
                                <Link to="">Read More <BsArrowRight className={Style.icon} /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox}>
                            <figure>
                                <img src={servicesImg} alt='' />
                            </figure>
                            <div className={Style.content}>
                                <span><BsCart3 className={Style.icon} /></span>
                                <h3>eCommerce Solutions</h3>
                                <p>Need an online store that sells? We build smooth, secure e-commerce websites that make shopping easy and help you increase sales.</p>
                                <Link to="">Read More <BsArrowRight className={Style.icon} /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox}>
                            <figure>
                                <img src={servicesImg} alt='' />
                            </figure>
                            <div className={Style.content}>
                                <span><IoCodeSlash className={Style.icon} /></span>
                                <h3>Web Development</h3>
                                <p>Need an online store that sells? We build smooth, secure e-commerce websites that make shopping easy and help you increase sales.</p>
                                <Link to="">Read More <BsArrowRight className={Style.icon} /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox}>
                            <figure>
                                <img src={servicesImg} alt='' />
                            </figure>
                            <div className={Style.content}>
                                <span><FaMobileAlt className={Style.icon} /></span>
                                <h3>Mobile App Development</h3>
                                <p>Need an online store that sells? We build smooth, secure e-commerce websites that make shopping easy and help you increase sales.</p>
                                <Link to="">Read More <BsArrowRight className={Style.icon} /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={Style.buttonFlex}>
                            <Link to="" className={Style.btnStyle}>See all Services <BsArrowRight className={Style.icon} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurServices;