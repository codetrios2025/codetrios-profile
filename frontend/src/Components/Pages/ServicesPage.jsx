import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web-design.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
//Icon
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

const ServicesPage = ()=>{
    const [isOPen, setIsopen] = useState(false);

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

            </div>
            <OurServices />
        </div>
        </>
    )
}

export default ServicesPage;