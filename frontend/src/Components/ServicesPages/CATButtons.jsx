import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import { Link } from 'react-router-dom';
//Icon

import { IoCloseSharp } from "react-icons/io5";

//Components
import ContactUs from '../HomeRoute/Contact';

const CATButton = ()=>{
    const [isOPen, setIsopen] = useState(false);
    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }

    return(
        <>
        <div className={Style.catButton}>
            <button type='button'onClick={formOpenHandler} className={Style.btnStyle}>Get a Free Consultation</button>
            <Link to="/portfolio" className={Style.secondaryButton} title="View CodeTrios portfolio">View Our Portfolio</Link>
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

export default CATButton;