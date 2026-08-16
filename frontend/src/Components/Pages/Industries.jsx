import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
//Icon
//icon
import { FaPencilRuler, FaShoppingCart, FaRegIdBadge, FaBullhorn,  FaUniversalAccess   } from "react-icons/fa";
import { MdWeb, MdDesignServices, MdAutorenew,      } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import {LuBuilding2} from "react-icons/lu";
import { PiBuildingApartmentFill, PiBuildingOfficeLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsHeartPulse } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";

const Industries = ()=>{
  return(
    <div className={`${Style.industriesSection}`}>
        <Container>
            <Row>
                <Col className="text-center">
                    <span className={Style.smallTitle} data-aos="fade-up" data-aos-delay="50">WHO WE WORK WITH</span>
                    {/* <h2 className={Style.title}>Website Design for Different Business Needs</h2> */}
                    <h2 className={Style.title} data-aos="fade-up" data-aos-delay="100">Industries We Serve</h2>
                    {/* <p className={Style.subContent}>We design websites for businesses and organizations across different industries, <br />adapting the structure and user experience to their audience and goals.</p> */}
                    <ul data-aos="fade-up" data-aos-delay="200">
                        <li>
                            <div className={Style.icon}><IoSchoolOutline /></div>
                            <p>School & College</p>
                        </li>
                        <li>
                            <div className={Style.icon}><LuBuilding2 /></div>
                            <p>Corporate</p>
                        </li>
                        <li>
                            <div className={Style.icon}><PiBuildingOfficeLight /></div>
                            <p>Real Estate</p>
                        </li>
                        <li>
                            <div className={Style.icon}><HiOutlineShoppingBag /></div>
                            <p>Ecommerce</p>
                        </li>
                        <li>
                            <div className={Style.icon}><BsHeartPulse /></div>
                            <p>Healthcare</p>
                        </li>
                        <li>
                            <div className={Style.icon}><PiBuildingOfficeLight /></div>
                            <p>Hospitality</p>
                        </li>
                        <li>
                            <div className={Style.icon}><IoSettingsOutline /></div>
                            <p>Manufacturing</p>
                        </li>
                        <li>
                            <div className={Style.icon}><GoRocket /></div>
                            <p>Startups</p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Industries;