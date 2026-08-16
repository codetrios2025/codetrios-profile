import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import { Link } from 'react-router-dom';
//Icon

import { IoCloseSharp } from "react-icons/io5";

//Components
import ContactUs from '../HomeRoute/Contact';

const CATComponent = ()=>{
    const [isOPen, setIsopen] = useState(false);
    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }

    return(
        <>
        <div className={Style.visionSec}>
            <Container>
                <Row>
                    <Col>
                        <div className={Style.visionElem}>
                            <span className={Style.smallTitle} data-aos="fade-up" data-aos-delay="100">HAVE A PROJECT IN MIND?</span>
                            <h2 data-aos="fade-up" data-aos-delay="100">Let's Build Something That Helps Your Business Grow</h2>
                            <p data-aos="fade-up" data-aos-delay="200">Tell us about your project, goals and requirements. Our team can help you choose the right digital solution and technology approach.</p>
                            <div className={Style.catButton} data-aos="fade-up" data-aos-delay="300">
                                <button type='button'onClick={formOpenHandler} className={Style.btnStyle}>Get a Free Consultation</button>
                                <Link to="/portfolio" className={Style.secondaryButton} title="View CodeTrios portfolio">View Our Portfolio</Link>
                            </div>
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

export default CATComponent;