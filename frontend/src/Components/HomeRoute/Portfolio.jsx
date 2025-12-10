import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import constants from '../../services/constants';
import portfolio1 from '../../assets/images/portfolio01.png';
import portfolio2 from '../../assets/images/portfolio02.png';
import portfolio3 from '../../assets/images/portfolio03.png';
import portfolio4 from '../../assets/images/portfolio04.png';

const OurPortfolio = ({ data }) =>{
    const portfolio = data?.jointeams;
    return(
        <div className={Style.commonPading + " " + Style.protfolioSec}>
            <Container>
                <Row>
                    <Col>
                        <h2 className={Style.title}>Featured Projects</h2>
                    </Col>
                </Row>
                <Row>
                    {portfolio && portfolio.length > 0 ?
                        portfolio.map((item, index) =>{
                            return(
                                <Col md={6} key={index}>
                                    <div className={Style.projectBox}>
                                        <Link to="">
                                            <div className={Style.projectImg}>
                                                <span className={Style.scrollAnime} style={{ backgroundImage: `url(${constants.Image_BASE_URL}/${item?.image?.[0].fileName})` }}></span>
                                            </div>
                                            <p>{item?.description}</p>
                                            <h5>{item?.title}</h5>
                                        </Link>
                                    </div>
                                </Col>
                            )
                        })
                        : null
                    }
                    
                    {/* <Col md={6}>
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
                    <Col md={6}>
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
                    <Col md={6}>
                        <div className={Style.projectBox}>
                            <Link to="">
                                <div className={Style.projectImg}>
                                    <span className={Style.scrollAnime} style={{ backgroundImage: `url(${portfolio4})` }}></span>
                                </div>
                                <p>Ecommerce Website - Shopify</p>
                                <h5>Anjum Jewels</h5>
                            </Link>
                        </div>
                    </Col> */}
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