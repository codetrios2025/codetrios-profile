import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterStyle from "../../Style/Footer.module.css";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { getFooterAddress } from "../../../services/routes.services";
import { useSelector } from "react-redux";
import { GoMail } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
const Footer = () => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getFooterAddress().then((res) => {
      setAddress(res.data.addresses[0]);
    });
  }, []);
  const { menu } = useSelector((state) => state.header);
  if (!menu || menu.length === 0) {
    return null;
  }
  const sortedMenu = [...menu].sort((a, b) => a.orderNumber - b.orderNumber);
  const AssuranceLink = sortedMenu[1].children[0].children;
  const ProjectLink1 = sortedMenu[1].children[1].children;
  const ProjectLink = [...ProjectLink1].sort(
    (a, b) => a.orderNumber - b.orderNumber
  );
  const CertificationLink = sortedMenu[1].children[2].children;
  const AboutLink = sortedMenu[0].children;
  return (
    <footer className={FooterStyle.FooterMain}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={FooterStyle.boc}>
              <h6>Services</h6>
            </div>
            <Row>
              <Col md={4} className={FooterStyle.mobWid}>
                <h5>Assurance Services</h5>
                <ul>
                  {AssuranceLink.map((item) => {
                    return (
                      <li key={item.orderNumber}>
                        <Link to={item.linkUrl} title={item.linkText}>
                          {item.linkText}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col md={4} className={FooterStyle.mobWid}>
                <h5>Project Services</h5>
                <ul>
                  {ProjectLink.map((item) => {
                    return (
                      <li key={item.orderNumber}>
                        <Link to={item.linkUrl} title={item.linkText}>
                          {item.linkText}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col md={4} className={FooterStyle.mobWid}>
                <h5 className={FooterStyle.CTFSpace}>Certification Services</h5>
                <ul>
                  {CertificationLink.map((item) => {
                    return (
                      <>
                        {item.linkText !== "Wearhousing" && (
                          <li key={item.orderNumber}>
                            <Link to={item.linkUrl} title={item.linkText}>
                              {item.linkText}
                            </Link>
                          </li>
                        )}
                      </>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={3} xs={6} className={FooterStyle.colmSpace +" " + FooterStyle.mobFlex}>
          <div>
            <div className={FooterStyle.boc}>
              <h6>About</h6>
            </div>
            <ul>
              {AboutLink.map((item) => {
                return (
                  <li key={item.orderNumber}>
                    <Link to={item.linkUrl} title={item.linkText}>
                      {item.linkText}
                    </Link>
                  </li>
                );
              })}
            </ul>
            </div>
            <div>
            <div className={FooterStyle.topSpace}>
              <h6>More Info</h6>
            </div>
            <ul>
              {sortedMenu.map((item) => {
                return (
                  <li key={item.orderNumber}>
                    <Link to={item.linkUrl} title={item.linkText}>
                      {item.linkText}
                    </Link>
                  </li>
                );
              })}
            </ul>
            </div>
          </Col>
          <Col md={3} xs={6} className={FooterStyle.mobWidth}>
            <div className={FooterStyle.boc}>
            <div className={FooterStyle.newAddress}>
                  <h5>Registered Address</h5>
                  <ul>
                    <li>
                        <span className={FooterStyle.iconBg}><IoLocationOutline /></span>
                        <p>Room No 3, Fourth Floor, Mithona Towers-1 1-7-80 to 87, Prender Ghast Road, Hyderabad, Secunderabad, Telangana, India, 500003</p>
                    </li>
                    <li><span className={FooterStyle.iconBg}><GoMail size="12px" /></span><Link to="mailto:cstpl@tataprojects.com">cstpl@tataprojects.com</Link></li>
                    <li><span className={FooterStyle.iconBg}><LiaPhoneVolumeSolid /></span> <Link to="tel:+914066238801">+91-40-66238801</Link></li>
                    <li><strong>CIN </strong> <p>U74220TG2003PTC040523</p></li>
                  </ul>
                  <h5>Corporate Address</h5>
                  <ul>
                    <li>
                        <span className={FooterStyle.iconBg}><IoLocationOutline /></span>
                        <p>Splendid Towers, 6th Floor, H. No. 1-8-364,437,438 & 445, S.P. Road, Begumpet, Hyderabad- 500003</p>
                    </li>
                    <li><span className={FooterStyle.iconBg}><GoMail size="12px" /></span><Link to="mailto:tqcert@tataprojects.com">tqcert@tataprojects.com</Link></li>
                    <li><span className={FooterStyle.iconBg}><LiaPhoneVolumeSolid /></span> <Link to="tel:+914067258800">+91-40-67258800</Link> &nbsp;,&nbsp; <Link to="tel:+914067258849">+91-40-67258849</Link></li>
                  </ul>
              </div>
              {/* <form>
                                <input type="text" placeholder="Let`s Talk" />
                                <button type="button"><img src={require('../../../assest/images/Black-Arrow.png')} /></button>
                            </form> */} 
            
              {/* {address && (
                <p>
                  <img src={require("../../../assest/images/call-icon.png")} />
                  <Link to="tel:+914067258800">(040)-67258800</Link>
                </p>
              )}
              {address && (
                <p>
                  <img src={require("../../../assest/images/mail-icon.png")} />
                  <Link to={`mailto:${address.email}`}>{address.email}</Link>
                </p>
              )} */}
                <p className={FooterStyle.socialLink}>
                  {/* <li><Link to='/'><FaFacebookF /> </Link></li> */}

                  {/* <li><Link to='/'><FaInstagram /> </Link></li>
                  <li><Link to='/'><FaYoutube /> </Link></li>
                  <li><Link to='/'><IoMdMail /></Link></li> */}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={FooterStyle.copyRight}>  
        <Container>
          <Row>
            <Col>
              <div className={FooterStyle.copyFlex}>
                <p>© Copyright 2024. TQ Cert. All Rights Reserved.&nbsp;
                  <Link to='/privacy-policy'>Privacy Policy</Link> |&nbsp;
                  <Link to='/cookie-policy'>Cookie Policy</Link> |&nbsp;
                  <Link to='/disclaimer'>Disclaimer</Link>
                </p>
                <p className={FooterStyle.socialLink}><p className={FooterStyle.insta}><span style={{fontSize:"14px"}}>Follow Us :  </span><Link to='https://in.linkedin.com/company/tqcertservices'  target="_blank"><FaLinkedinIn /> </Link></p></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
