import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import portfolio1 from '../../assets/images/portfolio01.webp';
import portfolio2 from '../../assets/images/portfolio02.webp';
import portfolio3 from '../../assets/images/portfolio03.webp';
import portfolio4 from '../../assets/images/portfolio04.webp';

const OurPortfolio = () =>{
    return(
        <div className={Style.commonPading + " " + Style.protfolioSec}>
            <Container>
                <Row>
                    <Col>
                        <h2 className={Style.title}data-aos="fade-up">Featured Projects</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={Style.projectBox} data-aos="fade-up" data-aos-delay="200">
                            <Link to="">
                                <div className={Style.projectImg}>
                                    <span className={Style.scrollAnime} style={{ backgroundImage: `url(${portfolio1})` }}></span>
                                </div>
                                <p>Ecommerce Website - Shopify</p>
                                <h5>Elite GYM</h5>
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} data-aos="fade-up" data-aos-delay="300">
                        <div className={Style.projectBox}>
                            <Link to="">
                                <div className={Style.projectImg}>
                                    <span className={Style.scrollAnime} style={{ backgroundImage: `url(${portfolio2})` }}></span>
                                </div>
                                <p>Ecommerce Website - Shopify</p>
                                <h5>Prime Estate</h5>
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} data-aos="fade-up" data-aos-delay="400">
                        <div className={Style.projectBox}>
                            <Link to="">
                                <div className={Style.projectImg}>
                                    <span className={Style.scrollAnime} style={{ backgroundImage: `url(${portfolio3})` }}></span>
                                </div>
                                <p>Ecommerce Website - Shopify</p>
                                <h5>XOPA</h5>
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} data-aos="fade-up" data-aos-delay="500">
                        <div className={Style.projectBox}>
                            <Link to="">
                                <div className={Style.projectImg}>
                                    <span className={Style.scrollAnime} style={{ backgroundImage: `url(${portfolio4})` }}></span>
                                </div>
                                <p>Ecommerce Website - Shopify</p>
                                <h5>Anjum Jewels</h5>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={Style.buttonFlex}>
                            <Link to="" className={Style.btnStyle}>See all Projects <BsArrowRight className={Style.icon} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurPortfolio;