import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Header.module.css';
import { Link, Outlet  } from "react-router-dom";
import Logo from '../../assets/images/logo01.png';
import { CiMenuFries } from "react-icons/ci";

import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import { fetchAllData } from "../../services/routes.services";

const Header=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false); 
    const [menuData, setMenuData] = useState([])
    const closeMenu = () => {
    setMenuOpen(false);
    setSubOpen(false);
  };

  useEffect(()=>{
    fetchAllData("header").then(res =>{
        setMenuData(res?.data?.headers || []);
    })
  }, []);
  const mainMenu = menuData.slice(0, 5);
  const subMenu  = menuData.slice(5, 14);

console.log(menuData)
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
                                        {menuData && menuData.length > 0 &&
                                            menuData.map((item, index)=>{
                                                const hasSubmenu = item.children && item.children.length > 0;
                                                return(
                                                    <li key={index}>
                                                        <Link onClick={closeMenu} to={item.linkUrl}>
                                                            <span>{item.linkText}</span> {hasSubmenu  &&<IoIosArrowDown className="icon"/>}
                                                        </Link>
                                                        {hasSubmenu && (
                                                            <button type="button" className="subToggle" onClick={() => setSubOpen(subOpen === index ? null : index)}>
                                                                <IoIosArrowDown className={subOpen === index ? "rotate" : ""}/>
                                                            </button>
                                                        )}
                                                        {hasSubmenu  &&(
                                                        <ul className={`subMenuMob ${Style.subMenu} ${subOpen ? "open" : ""}`}>
                                                           {item.children.map(sub => (
                                                                <li key={sub._id}>
                                                                <Link onClick={closeMenu} to={sub.linkUrl}>
                                                                    <span>{sub.linkText}</span>
                                                                </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        )}

                                                    </li>
                                                )
                                            })
                                        }
                                        {/* {mainMenu.map((item, index) =>(
                                            index === 2 ? (
                                                <li key={item._id}>
                                                    <Link onClick={closeMenu} to={item.linkUrl}>
                                                    <span>{item.linkText} <IoIosArrowDown className="icon"/></span>
                                                    </Link>
                                                    <button type="button" className="subToggle" onClick={() => setSubOpen(!subOpen)}>
                                                        <IoIosArrowDown className={subOpen ? "rotate" : ""} />
                                                    </button>
                                                    <ul className={`subMenuMob ${Style.subMenu} ${subOpen ? "open" : ""}`}>
                                                    {subMenu.map(sub => (
                                                        <li key={sub._id}>
                                                        <Link onClick={closeMenu} to={sub.linkUrl}>
                                                            <span>{sub.linkText}</span>
                                                        </Link>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                </li>
                                            ) : (
                                            <li key={item._id}>
                                                <Link onClick={closeMenu} to={item.linkUrl}><span>{item.linkText}</span></Link>
                                            </li>
                                            )
                                        ))} */}
                                        {/* <li><Link onClick={closeMenu} to="" title="Home"><span>Home</span></Link></li>
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
                                                <li><Link onClick={closeMenu} to="" title="Digital Strategy">Digital Strategy</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="Search Engine Optimization">Search Engine Optimization</Link></li>
                                                <li><Link onClick={closeMenu} to="" title="Content Writing">Content Writing</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={closeMenu} to="/technologies" title="About"><span>Technologies</span></Link></li>
                                        <li><Link onClick={closeMenu} to="/portfolio" title="Portfolio"><span>Portfolio</span></Link></li>
                                        <li><Link onClick={closeMenu} to="/contact-us" title="Contact Us"><span>Contact Us</span></Link></li>  */}
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