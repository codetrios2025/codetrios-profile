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
                        <figure>
                            <img src={webImage} className='imgFull' alt='' width="1747" height="1334" />
                        </figure>
                    </Col>
                    <Col md={6}>
                        <div className={Style.aboutContent}>
                            <h6>About Codetrios</h6>
                            <h2 className={Style.title}>{aboutContent?.text}</h2>
                            {aboutContent?.description && parse(aboutContent.description)}
                            <Link to={aboutContent?.link} className={Style.btnStyle}>Explore More <BsArrowRight className={Style.icon} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs;