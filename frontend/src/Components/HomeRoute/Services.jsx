import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import servicesImg from '../../assets/images/E-commerceSolutions.webp';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import parse from 'html-react-parser';
import constants from '../../services/constants';
const OurServices = ({ data }) =>{
    console.log(data)
    const services = data?.homeservice;
    return(
        <div className={'servicesView ' + Style.commonPading + " " + Style.servicesSec}>
            <Container>
                <Row>
                    <Col>
                        <h2 className={Style.title}>Our Services</h2>
                        <p className={Style.subContent}>At CodeTrio, we deliver end-to-end digital solutions designed to help your business thrive online. From full-stack development and API integrations to responsive design and performance optimization — we handle everything from concept to deployment, ensuring your digital presence is modern, scalable, and future-ready. </p>
                    </Col>
                </Row>
                <Row>
                    {services && services.length > 0 ?
                        services.slice(0, 6).map((item, index) =>{
                            return(
                                <Col md={4} key={index}>
                                    <div className={Style.servicesBox}>
                                        <figure>
                                            <img src={`${constants.Image_BASE_URL}${item.image}`} alt="" />
                                        </figure>
                                        <div className={Style.content}>
                                            <span className={Style.spanICon}><FaPaintBrush className={Style.icon} /></span>
                                            <h3>{item?.title}</h3>
                                            {item?.description && parse(item?.description)}
                                            {/* <p>Looking to take your business online? We build powerful, secure, and easy-to-manage e-commerce platforms that deliver seamless shopping experiences and drive conversions. Our goal is to help you sell more with smarter, faster, and mobile-friendly online stores. </p> */}
                                            <Link to={item?.link}>Read More <BsArrowRight className={Style.icon} /></Link>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                        : null
                    }
                    
                    {/* <Col md={4}>
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
                    </Col> */}
                </Row>
                <Row>
                    <Col>
                        <div className={Style.buttonFlex}>
                            <Link to="/services" className={Style.btnStyle}>See all Services <BsArrowRight className={Style.icon} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurServices;