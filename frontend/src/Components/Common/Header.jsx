import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Header.module.css';
import { Link, Outlet  } from "react-router-dom";
import Logo from '../../assets/images/logo.webp';

import { IoIosArrowDown } from "react-icons/io";


const Header=()=>{
    return(
        <>
            <header >
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.head}>
                                <div className={Style.logo}>
                                    <Link to='' alt='codetrios'><img src={Logo} alt="codetrios" width="" height="" /></Link>
                                </div>
                                <ul>
                                    <li><Link to="" title="Home"><span>Home</span></Link></li>
                                    <li><Link to="/about-us" title="About"><span>About</span></Link></li>
                                    <li><Link to="/services" title="Services"><span>Services <IoIosArrowDown /></span></Link>
                                        <ul className={Style.subMenu}>
                                            <li><Link to="" title="Website Design">Website Design</Link></li>
                                            <li><Link to="" title="Web Development">Web Development</Link></li>
                                            <li><Link to="" title="Mobile App Development">Mobile App Development</Link></li>
                                            <li><Link to="" title="Design Services">Design Services</Link></li>
                                            <li><Link to="" title="eCommerce Solutions">eCommerce Solutions</Link></li>
                                            <li><Link to="" title="Technology Solutions">Technology Solutions</Link></li>
                                            {/* <li><Link to="" title="Business Consultancy">Business Consultancy</Link></li> */}
                                            <li><Link to="" title="Digital Strategy">Digital Strategy</Link></li>
                                            <li><Link to="" title="Search Engine Optimization">Search Engine Optimization</Link></li>
                                            <li><Link to="" title="Content Writing">Content Writing</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="" title="Portfolio"><span>Portfolio</span></Link></li>
                                    <li><Link to="" title="Contact Us"><span>Contact Us</span></Link></li>
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header >
        </>
    )
}

export default Header