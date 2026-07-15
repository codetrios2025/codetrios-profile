import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../../assets/images/heroBanner.webp';
import Style from '../CSS/Style.module.css';
import { FaUser } from "react-icons/fa";
import { IoMail, IoCall  } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import ContactUs from "./Contact";
import { FiCheck } from "react-icons/fi";
//  const words = ["maintain", "secure", "optimize"];
 const words = ["Reimagine", "Automate", "Optimize"];

const HomeBanner = ({data}) =>{
    const [isOPen, setIsopen] = useState(false);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false); // fade out
  
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
          setFade(true); // fade in
        }, 500); // match CSS duration
      }, 2500);
  
      return () => clearInterval(interval);
    }, []);

    //console.log(banner)
        const formOpenHandler=()=>{
            setIsopen(true);
        }
        const formCloseHandler=()=>{
            setIsopen(false);
        }
    return(
        <div className={Style.heroBanner}>
            <img src={HeroImage} fetchPriority="high" loading="eager" decoding="async" alt="We Build Modern Web Experiences That Scale" width="1920" height="898" className={Style.imgResponsive} />
            <div className={Style.content}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.detail}>
                                <h6 data-aos="fade-up">Your Partner for Digital Growth Solutions</h6>
                                <h1 data-aos="fade-up" data-aos-delay="200">
                                    <span>We don’t just build<br/> websites <span className={`fade-text ${fade ? "fade-in" : "fade-out"} ${Style.highLight}`}>we {words[index]}.</span></span>
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="350">Helping startups and enterprises grow with AI, <span>custom software, automation, modern web technologies,</span> and data-driven digital experiences.</p>
                                <button data-aos="fade-up" data-aos-delay="500" type='button'onClick={formOpenHandler} className={Style.btnStyle}>Book Free Consultation</button>
                                {/* <ul data-aos="fade-up" data-aos-delay="600">
                                    <li><FiCheck className={Style.icon} /> 8+ Years Experience</li>
                                    <li><FiCheck className={Style.icon} /> 100+ Projects Delivered</li>
                                    <li><FiCheck className={Style.icon} /> Long-Term Support</li>
                                </ul> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
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

export default HomeBanner;