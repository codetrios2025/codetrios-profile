import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../CSS/Style.module.css";
import ServicesBanner from "../../assets/images/services-banner.webp";
import webImage from "../../assets/images/web-design.webp";
import WhyChooseImg from "../../assets/images/why_choose.webp";
import { Link } from "react-router-dom";
//Icon
import { IoMailOpenSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import SEO from "../Common/webSiteMeta.jsx";
//Components
import ContactUs from "../HomeRoute/Contact";

const ContactUsPage = () => {
  return (
    <>
      <SEO page="contact" />
      <div className={Style.innerPage + " " + Style.contactPage}>
        <div className={Style.contactSec}>
          <Container>
            <Row>
              <Col md={7}>
                <div className={Style.leftArea}>
                  <ContactUs />
                </div>
              </Col>
              <Col md={5}>
                <div className={Style.areInfo}>
                  <h3 data-aos="fade-up" data-aos-delay="100">
                    CodeTrios
                  </h3>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <IoMailOpenSharp className={Style.icon} />
                    <Link to="mailto:info@codetrios.com">
                      info@codetrios.com
                    </Link>
                  </p>
                  <p data-aos="fade-up" data-aos-delay="300">
                    <IoCall className={Style.icon} />{" "}
                    <Link to="tel:+91 8882309150">+91 8882309150</Link>
                  </p>
                  <p data-aos="fade-up" data-aos-delay="400">
                    <FaLocationDot className={Style.icon} />{" "}
                    <span>
                      Codetrios 711 Sector -31, Faridabad, <br/>Haryana, India
                      -121003
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
