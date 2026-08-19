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
                                <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
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
                                <p>CodeTrios is a web development company in India helping businesses, startups, organizations, and growing brands build fast, secure, and scalable websites and web applications. We combine modern frontend and backend technologies, responsive development, performance optimization, and maintainable architecture to create digital platforms designed around real business requirements.</p>
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
                                <p>CodeTrios is an ecommerce development company in India helping businesses build secure, scalable, and conversion-focused online stores. We design and develop ecommerce websites around your products, customers, business model, and growth objectives, with a focus on usability, performance, mobile responsiveness, and reliable ecommerce functionality.</p>
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
                                <p>CodeTrios is a web application development company in India helping businesses and organizations build secure, scalable, and user-friendly web applications. We develop custom digital platforms that simplify business processes, connect systems, improve productivity, and provide reliable experiences for users across modern devices.</p>
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
                                <p>CodeTrios is a UI/UX design company in India creating intuitive, responsive, and user-focused experiences for websites, web applications, SaaS platforms, and digital products. Our design process combines user research, information architecture, wireframing, prototyping, visual design, and usability to create digital experiences that are easy to understand and use.</p>
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
                                <p>CodeTrios is a custom software development company in India helping businesses build secure, scalable, and high-performance software solutions tailored to their specific workflows and business goals. From business automation and enterprise applications to API integrations and software modernization, we create technology solutions designed for long-term growth.</p>
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