import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/about_services.webp';

import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import parse from 'html-react-parser';

const AboutUs = ({data}) =>{
    const aboutContent = data?.whoweare?.[0];
    //console.log(aboutContent)
    return(
        <div className={"aboutCls " + Style.commonPading + " " + Style.aboutSec}>
            <Container>
                <Row>
                    <Col md={6}>
                        <figure data-aos="fade-up">
                            <img src={webImage} className='imgFull' alt='Full-Stack Web Development that Drives Business Growth' width="1747" height="1334" />
                        </figure>
                    </Col>
                    <Col md={6}>
                        <div className={Style.aboutContent}>
                            <h6 data-aos="fade-up">About Codetrios</h6>
                            <h2 className={Style.title} data-aos="fade-up" data-aos-delay="200">Full-Stack Web Development that Drives Business Growth</h2>
                            <p data-aos="fade-up" data-aos-delay="400">At Codetrios, our work doesn’t stop at launch. We provide continuous website maintenance, updates, security monitoring, and performance optimization to ensure long-term success.</p>
                            <p data-aos="fade-up" data-aos-delay="500">We partner with businesses to transform ideas into high-performing, scalable, and SEO-optimized web platforms—all with a single, expert team.</p>
                            <ul data-aos="fade-up" data-aos-delay="600">
                                <li><FiCheck className={Style.icon} /> Top Digital Service: We craft future-ready websites with creative finesse.</li>
                                <li><FiCheck className={Style.icon} /> Seamless Digital Transformation: We craft websites that redefine your online presence.</li>
                                <li><FiCheck className={Style.icon} /> Responsive Design Excellence: Your website, accessible and engaging on any device.</li>
                            </ul>
                            <Link to="about-us" className={Style.btnStyle} data-aos="fade-up" data-aos-delay="800">Explore More <BsArrowRight className={Style.icon} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs;