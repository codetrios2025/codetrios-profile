import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../CSS/Style.module.css";
import ServicesBanner from "../../assets/images/services-banner.webp";
import webImage from "../../assets/images/web-design.webp";
import WhyChooseImg from "../../assets/images/why_choose.webp";
import { Link } from "react-router-dom";
//Icon

//Components


const ThankyouPage = () => {
  return (
    <>
      <div className={Style.innerPage}>
        <div className={Style.thanksPage}>
          <h1>Thank You for your interest!</h1>
          <p>We have received your information and someone from our team will be in touch with you shortly.</p>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </>
  );
};

export default ThankyouPage;
