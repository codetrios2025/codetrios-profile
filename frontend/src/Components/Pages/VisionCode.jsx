import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
//Icon

import { IoCloseSharp } from "react-icons/io5";

//Components
import ContactUs from '../HomeRoute/Contact';

const VisionComponent = ()=>{
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
                            <h4>Your vision deserves more than just code — it deserves commitment.</h4>
                            <p>At Code Trios, we combine creativity, technical excellence, and strategic clarity to <br />craft solutions that drive real business growth.</p>
                            <button type='button'onClick={formOpenHandler} className={Style.btnStyle}>Request a free project</button>
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

export default VisionComponent;