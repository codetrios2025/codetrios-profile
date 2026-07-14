import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
//Icon
import { GoRocket } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";

//Components
import ContactUs from '../HomeRoute/Contact';

const ProjectMind = ()=>{
    const [isOPen, setIsopen] = useState(false);
    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }

    return(
        <>
        <div className={Style.proMind}>
            <Container>
                <Row>
                    <Col>
                        <div className={Style.projectCta}>
                            <div className={Style.mindTitle}>
                              <div className={Style.icon}><GoRocket /></div>
                              <h2>Have a Project in Mind? <span>Let's Build Something Amazing Together!</span>                              </h2>
                            </div>
                            <p>Partner with Codetrios to build innovative web applications, <span>mobile apps, AI solutions, and enterprise software that accelerate your business growth.</span></p>
                            <button type='button'onClick={formOpenHandler} data-aos="fade-up" data-aos-delay="200" className={Style.btnStyle}>Book a Free Discovery Call</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        {isOPen && 
            <div className={Style.formPop}>
                <div className={'popStyle ' + Style.formElem}>
                    <button type='button' onClick={formCloseHandler} className={Style.closeBtn}><IoCloseSharp /></button>
                    <ContactUs />
                </div>
            </div>
        }
        </>
    )
}

export default ProjectMind;