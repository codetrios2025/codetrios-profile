import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Header.module.css';
import { Link, Outlet  } from "react-router-dom";
import Logo from '../../assets/images/logo.webp';
import { CiMenuFries } from "react-icons/ci";

import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Header=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false); 
    const closeMenu = () => {
    setMenuOpen(false);
    setSubOpen(false);
  };
    return(
        <>
            <header>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.head}>
                                <div className={Style.logo}>
                                    <Link to='' alt='codetrios'><img src={Logo} alt="codetrios" width="" height="" /></Link>
                                </div>
                                <button type="button" className="menuToggle"  onClick={() => setMenuOpen(true)}><CiMenuFries /></button>
                                <div className={`mainMenu ${menuOpen ? "activeMenu" : ""}`}>
                                    <button type='button' className="closeBtn"  onClick={() => setMenuOpen(false)}><IoCloseSharp /></button>
                                    <ul>
                                        <li><Link onClick={closeMenu} to="" title="Home"><span>Home</span></Link></li>
                                        <li><Link onClick={closeMenu} to="/about-us" title="About"><span>About</span></Link></li>
                                        <li>
                                            <Link onClick={closeMenu} to="/services" title="Services"><span>Services <IoIosArrowDown className="icon" /></span></Link>
                                            <button type="button" className="subToggle" onClick={() => setSubOpen(!subOpen)}>
                                                <IoIosArrowDown className={subOpen ? "rotate" : ""} />
                                            </button>
                                             <ul className={`subMenuMob ${Style.subMenu} ${subOpen ? "open" : ""}`}>
                                                <li><Link onClick={closeMenu} to="" title="Website Design">Website Design</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="Web Development">Web Development</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="Mobile App Development">Mobile App Development</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="Design Services">Design Services</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="eCommerce Solutions">eCommerce Solutions</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="Technology Solutions">Technology Solutions</Link></li>
                                                {/* <li><Link to="" title="Business Consultancy">Business Consultancy</Link></li> */}
                                                <li><Link onClick={closeMenu} to="" title="Digital Strategy">Digital Strategy</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="Search Engine Optimization">Search Engine Optimization</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="Content Writing">Content Writing</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={closeMenu} to="/technologies" title="About"><span>Technologies</span></Link></li>
                                        <li><Link onClick={closeMenu} to="" title="Portfolio"><span>Portfolio</span></Link></li>
                                        <li><Link onClick={closeMenu} to="/contact-us" title="Contact Us"><span>Contact Us</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header >
        </>
    )
}

export default Header