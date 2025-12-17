import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/logo01.png";
import Style from "../CSS/Header.module.css";
import { Link, Outlet } from "react-router-dom";
import { IoMailOpenSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3}>
            <div className={Style.info} data-aos="fade-up">
              <img src={Logo} alt="codetrios" />
              <p>Website design & development company - Codetrios</p>
            </div>
          </Col>
          <Col md={9}>
            <div
              className={Style.footerLink}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ul>
                <li>
                  <Link to="/">
                    <span>Home</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="about-us">
                    <span>About</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="services">
                    <span>Services</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="technologies">
                    <span>Technologies</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="portfolio">
                    <span>Portfolio</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="contact-us">
                    <span>Contact Us</span>{" "}
                  </Link>
                </li>
              </ul>
              <div className={Style.address}>
                <p>
                  <IoMailOpenSharp className={Style.icon} />
                  <Link to="mailto:codetrio2025@gmail.com">
                    codetrio2025@gmail.com
                  </Link>
                </p>
                <p>
                  <IoCall className={Style.icon} />{" "}
                  <Link to="tel:+91 8882309150">+91 8882309150</Link>
                </p>
                <p>
                  <FaLocationDot className={Style.icon} />{" "}
                  <span>
                    Codetrios 711 Sector -31, Faridabad, Haryana, India - 121003
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={Style.copyRight}>
        <p>© 2025 Codetrios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
