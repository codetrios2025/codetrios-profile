import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web-design.webp';

import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const AboutUs = () =>{
    return(
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
                            <h6>About Codetrios</h6>
                            <h2 className={Style.title}>Full-Stack Web Development that Drives Business Growth</h2>
                            <p>We partner with businesses to transform ideas into high-performing, scalable, and SEO-optimized web platforms—all with a single, expert team.</p>
                            <ul>
                                <li><FiCheck className={Style.icon} /> Top Digital Service: We craft future-ready websites with creative finesse.</li>
                                <li><FiCheck className={Style.icon} /> Seamless Digital Transformation: We craft websites that redefine your online presence.</li>
                                <li><FiCheck className={Style.icon} /> Responsive Design Excellence: Your website, accessible and engaging on any device.</li>
                            </ul>
                            <Link to="/about-us" className={Style.btnStyle}>Explore More <BsArrowRight className={Style.icon} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs;