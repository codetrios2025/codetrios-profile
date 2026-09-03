import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
//Icon
//icon
import {LuBuilding2} from "react-icons/lu";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsHeartPulse } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";

const Industries = ({title, subText})=>{
  return(
    <div className={`${Style.industriesSection}`}>
        <Container>
            <Row>
                <Col className="text-center">
                    <div className={Style.industriesHead}>
                        <span className={Style.smallTitle}>WHO WE WORK WITH</span>
                        <h2 className={Style.title}>{title}</h2>
                        <p>{subText}</p>
                    </div>
                    <ul>
                        <li>
                            <div className={Style.icon}><IoSchoolOutline /></div>
                            <p>School & College</p>
                        </li>
                        <li>
                            <div className={Style.icon}><LuBuilding2 /></div>
                            <p>Corporate & B2B</p>
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