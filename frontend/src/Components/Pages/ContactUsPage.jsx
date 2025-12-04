import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import ServicesBanner from '../../assets/images/services-banner.webp';
import webImage from '../../assets/images/web-design.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
//Icon
import { IoMailOpenSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

//Components
import ContactUs from '../HomeRoute/Contact';

const ContactUsPage = ()=>{

    return(
        <>
        <div className={Style.innerPage + " " + Style.contactPage}>
            <div className={Style.innerBanner}>
                <img src={ServicesBanner} />
            </div>
            <div className={Style.contactSec}>
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className={Style.leftArea}>
                                <ContactUs />      
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className={Style.areInfo}>
                                <h3>CodeTrios</h3>
                                <p>
                                    <IoMailOpenSharp className={Style.icon} /><Link to="mailto:codetrio2025@gmail.com">codetrio2025@gmail.com</Link>
                                </p>
                                <p>
                                    <IoCall className={Style.icon} /> <Link to="tel:+91 93 1144 4685">+91 93 1144 4685</Link>
                                </p>
                                <p><FaLocationDot className={Style.icon} /> <span>We are a trio of passionate developers creating cutting-edge web solutions for startups</span>
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default ContactUsPage;