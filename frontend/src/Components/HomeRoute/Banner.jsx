import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../../assets/images/hero-banner.webp';

import Style from '../CSS/Style.module.css';
import { FaUser } from "react-icons/fa";
import { IoMail, IoCall  } from "react-icons/io5";


const HomeBanner = () =>{
    return(
        <div className={Style.heroBanner}>
            <img src={HeroImage} alt="We Build Modern Web Experiences" width="2400" height="1122" className={Style.imgResponsive} />
            <div className={Style.content}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.detail}>
                                <h6>Your Partner for Digital Growth Solutions</h6>
                                <h1>We Build Fast & Modern Web <span>Experiences That Scale</span></h1>
                                <p>Code Trio delivers scalable, fast and elegant websites and <span>applications tailored to your business goals.</span></p>
                                <form>
                                    <div className={Style.queryForm}>
                                        <div className={Style.group}>
                                            <FaUser className={Style.icon} />
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                        <div className={Style.group}>
                                            <IoMail className={Style.icon} />
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className={Style.group}>
                                            <IoCall  className={Style.icon} />
                                            <input type="text" placeholder="Mobile No." />
                                        </div>
                                        <div className={Style.group}>
                                            <button type="button">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomeBanner;