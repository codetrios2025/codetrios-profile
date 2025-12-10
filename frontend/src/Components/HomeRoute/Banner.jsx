import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../../assets/images/hero-banner.webp';
import constants from "../../services/constants";
import Style from '../CSS/Style.module.css';
import { FaUser } from "react-icons/fa";
import { IoMail, IoCall  } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import ContactUs from "./Contact";

const HomeBanner = ({data}) =>{
    const [isOPen, setIsopen] = useState(false);
    const banner = data?.banners?.[0];
    //console.log(banner)
        const formOpenHandler=()=>{
            setIsopen(true);
        }
        const formCloseHandler=()=>{
            setIsopen(false);
        }
    return(
        <div className={Style.heroBanner}>
            <img src={`${constants.Image_BASE_URL}${banner?.bannerImage}`} alt="We Build Modern Web Experiences" width="2400" height="1122" className={Style.imgResponsive} />
            <div className={Style.content}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.detail}>
                                <h6>Your Partner for Digital Growth Solutions</h6>
                                <h1>{banner?.title}</h1>
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
                                <button type='button'onClick={formOpenHandler} className={Style.btnStyle}>Request a free project</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {isOPen && 
                <div className={Style.formPop}>
                    <div className={Style.formElem}>
                        <button type='button' onClick={formCloseHandler} className={Style.closeBtn}><IoCloseSharp /></button>
                        <ContactUs />
                    </div>
                </div>
            }
        </div>
    )
}

export default HomeBanner;