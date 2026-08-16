import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webDesignImg from '../../assets/images/website-design.webp';
import webDevelopimg from '../../assets/images/web_development.webp';
import eCommerceImg from '../../assets/images/e-Commerce_img.webp';
import webAppImg from '../../assets/images/web_application.webp';
import designServicesImg from '../../assets/images/design_services.webp';
import technologyImg  from '../../assets/images/technology_solutions.webp';

import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { FaPaintBrush, FaHandshake  } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";

const OurServices = () =>{
    return(
        <div className={'servicesView ' + Style.commonPading + " " + Style.servicesSec}>
            <Container>
                <Row>
                    <Col>
                    <div className={Style.Heading}>
                        <h2 data-aos="fade-up">Our <span>Services</span></h2>
                        <p className={Style.subContent} data-aos="fade-up" data-aos-delay="200">At CodeTrios, we deliver end-to-end digital solutions designed to help your business thrive online. From full-stack development and API integrations to responsive design and performance optimization — we handle everything from concept to deployment, ensuring your digital presence is modern, scalable, and future-ready. </p>
                        <div className={Style.line}><span className={Style.lineDote}></span></div>
                    </div>
                       
                        
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="200">
                            <figure>
                                <img src={webDesignImg} alt="website design services" loading="lazy" />
                            </figure>
                            <div className={Style.content}>
                                <span className={Style.spanICon}><FaPaintBrush className={Style.icon} /></span>
                                <h3>Website Design</h3>
                                <p>We are a leading web design company in India, providing professional, creative, and result-driven website design services in India for businesses, startups, brands, and organizations. As a best website design company in India, we combine innovative design, intuitive user experience, high performance, and conversion-focused strategies to create websites that help businesses grow online.</p>
                                <Link to="website-design-services" title='website design services'>
                                    Read More <BsArrowRight className={Style.icon} />
                                    <span className={Style.srOnly}>Website Design Services</span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="300">
                            <figure>
                                <img src={webDevelopimg} alt="web development services" loading="lazy" />
                            </figure>
                            <div className={Style.content}>
                                <span className={Style.spanICon}><IoCodeSlash className={Style.icon} /></span>
                                <h3>Web Development</h3>
                                <p>At CodeTrios, we are a professional website development company delivering high-performance, scalable, secure, and SEO-friendly digital solutions for businesses of all sizes. Our website development services are designed to create fast, reliable, and user-focused websites that accurately represent your brand and provide an exceptional experience across all devices.</p>
                                <Link to="web-development-services" title='web development services'>
                                    Read More <BsArrowRight className={Style.icon} />
                                    <span className={Style.srOnly}>web development services</span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="400">
                            <figure>
                                <img src={eCommerceImg} alt="ecommerce development services" loading="lazy" />
                            </figure>
                            <div className={Style.content}>
                                <span className={Style.spanICon}><BsCart3 className={Style.icon} /></span>
                                <h3>E-Commerce Solutions</h3>
                                <p>Taking your business online requires more than just a website—it requires a strategic, high-performance eCommerce ecosystem designed to enhance user experience, streamline operations, and drive sales. At CodeTrios, we provide comprehensive eCommerce development services and are recognized for delivering the best ecommerce development services tailored to modern business needs. As the best ecommerce development company in India, we specialize in building robust, secure, scalable, and conversion-focused online stores designed around your business model, products, and customer behavior.</p>
                                <Link to="ecommerce-development-services" title='ecommerce development services'>
                                    Read More <BsArrowRight className={Style.icon} />
                                    <span className={Style.srOnly}>ecommerce development services</span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="500">
                            <figure>
                                <img src={webAppImg} alt="web application development" loading="lazy" />
                            </figure>
                            <div className={Style.content}>
                                <span className={Style.spanICon}><FaGlobeAmericas className={Style.icon} /></span>
                                <h3>Web Applications</h3>
                                <p>At CodeTrios, we build powerful, scalable, and secure web applications designed to streamline business operations, improve productivity, and deliver exceptional user experiences. Our web application development solutions are tailored to your specific business requirements, helping you transform complex processes into fast, intuitive, and easy-to-use digital platforms.</p>
                                <Link to="web-application-development" title='web application development'>
                                    Read More <BsArrowRight className={Style.icon} />
                                    <span className={Style.srOnly}>web application development</span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="600">
                            <figure>
                                <img src={designServicesImg} alt="ui ux design services" loading="lazy" />
                            </figure>
                            <div className={Style.content}>
                                <span className={Style.spanICon}><MdDesignServices className={Style.icon} /></span>
                                <h3>Design Services</h3>
                                <p>At CodeTrios, we believe design is the foundation of a strong digital presence. As a user experience design company, our creative team combines strategy, aesthetics, usability, and technology to create digital experiences that reflect your brand identity while delivering meaningful results. Every visual element is designed with a clear purpose—to engage users, communicate your message, guide user behavior, and strengthen your brand.</p>
                                <Link to="ui-ux-design-services" title='ui ux design services'>
                                    Read More <BsArrowRight className={Style.icon} />
                                    <span className={Style.srOnly}>ui ux design services</span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="700">
                            <figure>
                                <img src={technologyImg} alt="custom software solutions" loading="lazy" />
                            </figure>
                            <div className={Style.content}>
                                <span className={Style.spanICon}><PiPlugsConnectedBold className={Style.icon} /></span>
                                <h3>Technology Solutions</h3>
                                <p>Technology is evolving faster than ever, and businesses that adapt early can gain a significant competitive advantage. As a Top Custom software development services company, CodeTrios helps organizations modernize, automate, and scale their operations through powerful, future-ready technology solutions. From system upgrades and Custom software modernization development services to custom software applications, intelligent automation, and technology architecture planning, we deliver solutions tailored to your workflows, business objectives, and long-term growth goals.</p>
                                <Link to="custom-software-solutions" title='custom software solutions'>
                                    Read More <BsArrowRight className={Style.icon} />
                                    <span className={Style.srOnly}>custom software solutions</span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    
                  
               
                </Row>
                <Row>
                    <Col>
                        <div className={Style.buttonFlex} data-aos="fade-up">
                            <Link to="/services" className={Style.btnStyle} title='services'>See all Services <BsArrowRight className={Style.icon} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurServices;