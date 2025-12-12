import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from '../../assets/images/logo01.png';
import Style from '../CSS/Header.module.css';
import { Link, Outlet  } from "react-router-dom";
import { IoMailOpenSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { fetchAllData } from "../../services/routes.services";
const Footer = () =>{
    const [menuData, setMenuData] = useState([])
    useEffect(()=>{
        fetchAllData("header").then(res =>{
            setMenuData(res?.data?.headers || []);
        })
      }, []);
    return(
        <footer>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className={Style.info}>
                            <img src={Logo} alt="codetrios" />
                            <p>Website design & development company - Codetrios</p>

                        </div>
                    </Col>
                    <Col md={9}>
                        <div className={Style.footerLink}>
                            <ul>
                                    {menuData && menuData.length > 0 &&
                                        menuData.map((item, index)=>{
                                            return(
                                                <li key={index}>
                                                    <Link to={item.linkUrl}><span>{item.linkText}</span> </Link>
                                                </li>
                                            )
                                        })
                                    }
                            </ul>
                            <div className={Style.address}>
                                <p>
                                    <IoMailOpenSharp className={Style.icon} /><Link to="mailto:codetrio2025@gmail.com">codetrio2025@gmail.com</Link>
                                </p>
                                <p>
                                    <IoCall className={Style.icon} /> <Link to="tel:+91 93 1144 4685">+91 93 1144 4685</Link>
                                </p>
                                <p><FaLocationDot className={Style.icon} /> <span>We are a trio of passionate developers creating cutting-edge web solutions for startups</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={Style.copyRight}>
                <p>© 2025 Codetrios. All rights reserved.</p>
            </div>
        </footer>
    )
}


export default Footer;