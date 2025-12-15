import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/E-commerceSolutions.webp';
import parse from 'html-react-parser';

import { Link } from 'react-router-dom';
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt } from "react-icons/tb";
import { FaServer, FaWordpress } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

//API
// import { fetchAllData } from '../../servicessss/routes.services';

const ServicesDetail = () =>{
//     const [data, setData] = useState({});
//      const url = window.location.pathname; 
//  const parts = url.split("/").filter(Boolean);
//  const lastPart = parts[parts.length - 1];

// console.log(parts[0]);
//     useEffect(() => {
//             fetchAllData(`servicedetails/deatils/${parts[0]}`).then(res =>{
//                 setData(res?.data?.servicedetails); 
//             })
//     }, []);
//     const detailItem = data?.[0];
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
                                <h2 className={Style.title}>E-Commerce Solutions</h2>
                                <p>Looking to take your business online? We build powerful, secure, and easy-to-manage e-commerce platforms that deliver seamless shopping experiences and drive conversions. Our goal is to help you sell more with smarter, faster, and mobile-friendly online stores. </p>
                                <h4>Our e-commerce expertise includes: </h4>
                                <ul>
                                    <li><FiCheck className={Style.icon} /> Custom Store Setup</li>
                                    <li><FiCheck className={Style.icon} /> Payment Gateway Integration </li>
                                    <li><FiCheck className={Style.icon} /> Mobile-Responsive Design </li>
                                    <li><FiCheck className={Style.icon} /> Inventory & Order Management </li>
                                    <li><FiCheck className={Style.icon} /> Product Optimization </li>
                                </ul>
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
                                <h2 className={Style.title}>Why Choose Our E-Commerce Development? </h2>
                                <p>We understand that every brand is unique — and so is its e-commerce journey. Our solutions combine elegant design, powerful functionality, and scalability to help your store grow with your business. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.commonPading + " " +Style.weBuild}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>What We Offer</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><TbDeviceDesktopCode  /></span>
                                <h3>Custom Store Design & Setup</h3>
                                <p>Tailor-made storefronts that align with your brand identity.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaServer  /></span>
                                <h3>Payment Gateway Integration </h3>
                                <p>Secure, seamless transactions supporting multiple payment modes.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><FaWordpress  /></span>
                                <h3>Inventory & Order Management</h3>
                                <p>Easy-to-use dashboards to manage products, stock, and fulfillment. </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><TbSeo  /></span>
                                <h3>Mobile-Optimized Experience</h3>
                                <p>Smooth performance across devices to ensure higher conversions.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><AiOutlineCloudServer  /></span>
                                <h3>Third-Party API Integration</h3>
                                <p>Connect with CRMs, analytics, and logistics tools effortlessly.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box}>
                                <span className={Style.icon}><AiOutlineCloudServer  /></span>
                                <h3>Performance Optimization</h3>
                                <p>Fast-loading pages for better user retention and search ranking.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={Style.platformsSec}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.box}>
                                <h2 className={Style.title}>Platforms We Work On </h2>
                                <ul>
                                    <li>
                                        {/* <figure>
                                            <img src='' />
                                        </figure> */}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ServicesDetail;