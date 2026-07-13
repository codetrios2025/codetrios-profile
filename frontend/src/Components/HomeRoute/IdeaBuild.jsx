import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import IdeaImg from '../../assets/images/idea-img.jpg'
import { RiMessage2Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import {FaShieldAlt} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import ContactUs from "./Contact";
const IdeaBuild = ()=>{
   const [isOPen, setIsopen] = useState(false);
   const formOpenHandler=()=>{
            setIsopen(true);
        }
        const formCloseHandler=()=>{
            setIsopen(false);
        }
  return(
    <div className={Style.ideaSec}>
      <Container>
        <Row>
          <Col>
            <div className={Style.ideaElem}>
              <div className={Style.content}>
                <h2 data-aos="fade-up">Have an Idea? <span>Let's Build Somethink Amazing Together!</span></h2>
                <p data-aos="fade-up" data-aos-delay="200">Share your idea with us and our experts will turn it into a powerfull <span>difital product that drives results.</span></p>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <div className={Style.icon}><RiMessage2Line /></div>
                    Free Consultation
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <div className={Style.icon}><FaShieldAlt /></div>
                    NDA Protected
                  </li>
                  <li data-aos="fade-up" data-aos-delay="400">
                    <div className={Style.icon}><GoRocket /></div>
                    Quick Kickstart
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500">
                    <div className={Style.icon}><BiSupport /></div>
                    Ongoing Support
                  </li>
                </ul>
                <button onClick={formOpenHandler} data-aos="fade-up" data-aos-delay="600" type='button' className={Style.btnStyle}>Book Free Consultation</button>
              </div>
              <div className={Style.ideaImg} data-aos="fade-in" data-aos-delay="500">
                <img src={IdeaImg} alt="Have an Idea? Let's Build Somethink Amazing Together!" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {isOPen && 
          <div className={Style.formPop}>
              <div className={Style.formElem}>
                  <button type='button' onClick={formCloseHandler} className={Style.closeBtn}><IoCloseSharp /></button>
                  <ContactUs />
              </div>
          </div>
      }
    </div>
  )
}

export default IdeaBuild;