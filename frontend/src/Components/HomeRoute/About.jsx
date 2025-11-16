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
                    <Col>
                        <figure>
                            <img src={webImage} className='imgFull' alt='' width="1747" height="1334" />
                        </figure>
                    </Col>
                    <Col>
                        <div className={Style.aboutContent}>
                            <h6>About Codetrios</h6>
                            <h2 className={Style.title}>Why Choose Us</h2>
                            <p>We are a trio of passionate developers creating cutting-edge web solutions for startups, agencies, and enterprises. Our mission is to transform your ideas into beautiful and functional digital experiences. With deep server-side knowledge and a keen eye for design, we build platforms that stand out and perform.</p>
                            <ul>
                                <li><FiCheck className={Style.icon} /> Top Digital Service: We craft future-ready websites with creative finesse.</li>
                                <li><FiCheck className={Style.icon} /> Seamless Digital Transformation: We craft websites that redefine your online presence.</li>
                                <li><FiCheck className={Style.icon} /> Responsive Design Excellence: Your website, accessible and engaging on any device.</li>
                            </ul>
                            <Link to="" className={Style.btnStyle}>Explore More <BsArrowRight className={Style.icon} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs;