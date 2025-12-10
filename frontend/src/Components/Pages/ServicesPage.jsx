import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import ServicesBanner from '../../assets/images/services-banner.webp';
import webImage from '../../assets/images/web-design.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
import constants from '../../services/constants';
import parse from 'html-react-parser';
//Icon
import { BsArrowRight } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt } from "react-icons/tb";
import { FaServer, FaWordpress } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

//Components
import OurServices from '../HomeRoute/Services';
import ContactUs from '../HomeRoute/Contact';
import { fetchAllData } from '../../services/routes.services';

const ServicesPage = ()=>{
    const [isOPen, setIsopen] = useState(false);
    const [servicesData, setServiceData] = useState([]);
    
    useEffect(() => {
        fetchAllData("homeservices").then(res => setServiceData(res?.data?.homeservice));
    }, []);
    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }

    return(
        <>
        <div className={Style.innerPage + " " + Style.servicesPage}>
            <div className={Style.innerBanner}>
                <img src={ServicesBanner} />
            </div>
            <div className={'servicesView ' + Style.commonPading + " " + Style.servicesSec}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>Our Services</h2>
                            <p className={Style.subContent}>At CodeTrio, we deliver end-to-end digital solutions designed to help your business thrive online. From full-stack development and API integrations to responsive design and performance optimization — we handle everything from concept to deployment, ensuring your digital presence is modern, scalable, and future-ready. </p>
                        </Col>
                    </Row>
                    <Row>
                        {servicesData && servicesData.length > 0 ?
                            servicesData.map((item, index) =>{
                                return(
                                    <Col md={4} key={index}>
                                        <div className={Style.servicesBox}>
                                            <figure>
                                                <img src={`${constants.Image_BASE_URL}/${item.image}`} alt="" />
                                            </figure>
                                            <div className={Style.content}>
                                                <span className={Style.spanICon}><FaPaintBrush className={Style.icon} /></span>
                                                <h3>{item?.title}</h3>
                                                {item?.description && parse(item?.description)}
                                                {/* <p>Looking to take your business online? We build powerful, secure, and easy-to-manage e-commerce platforms that deliver seamless shopping experiences and drive conversions. Our goal is to help you sell more with smarter, faster, and mobile-friendly online stores. </p> */}
                                                <Link to={item?.link}>Read More <BsArrowRight className={Style.icon} /></Link>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                            : null
                        }
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default ServicesPage;