import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/codetrios_logo.webp";
import Style from "../CSS/Header.module.css";
import { Link, Outlet } from "react-router-dom";
import { IoMailOpenSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <div className={Style.info} data-aos="fade-up">
              <img src={Logo} alt="CodeTrios Software Development Company" loading="lazy" decoding="async" width="180" height="30"  />
              {/* <p>Website Development & Ongoing Maintenance Services.</p> */}
              <p>Custom Web Development, Mobile App Development, MERN Stack, SaaS Products, AI Automation, and Ongoing Maintenance Services.</p>
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61581161434863" target="_blank" rel="noopener noreferrer"aria-label="CodeTrios Facebook" >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/codetrios/" target="_blank" rel="noopener noreferrer"aria-label="CodeTrios Instagram">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/code-trio-90ba31385/" target="_blank" rel="noopener noreferrer"aria-label="CodeTrios LinkedinIn">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={8}>
            <div className={Style.footerBox}>
              <div className={Style.box}>
                <h4>Quick Link</h4>
                <nav aria-label="Footer Navigation">
                  <ul>
                    <li><Link to="/" title="Home">Home</Link></li>
                    <li><Link to="/about-us" title="About">About</Link></li>
                    <li><Link to="/services" title="Services">Services</Link></li>
                    <li><Link to="/technologies" title="Technologies">Technologies</Link></li>
                    <li><Link to="/portfolio" title="Portfolio">Portfolio</Link></li>
                    <li><Link to="/contact-us" title="Contact Us">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
              <div className={Style.box}>
                <h4>Our Services</h4>
                <ul>
                  <li><Link to="/website-design-services">Website Design</Link></li>
                  <li><Link to="/web-development-services">Web Development</Link></li>
                  <li><Link to="/web-application-development">Web Applications</Link></li>
                  <li><Link to="/ui-ux-design-services">Design Services</Link></li>
                  <li><Link to="/ecommerce-development-services">eCommerce Solutions</Link></li>
                  <li><Link to="/custom-software-solutions">Technology Solutions</Link></li>
                  <li><Link to="/digital-strategy-consulting">Digital Strategy</Link></li>
                  <li><Link to="/web-hosting-services">Web Hosting Service</Link></li>
                  <li><Link to="/geo-seo-services">Geo & SEO Services</Link></li>
                </ul>
              </div>
              <div className={Style.box}>
                <h4>Contact Info</h4>
                <address className={Style.address}>
                  <p>
                    <IoMailOpenSharp className={Style.icon} />
                    <a href="mailto:info@codetrios.com">info@codetrios.com</a>
                  </p>
                  <p>
                    <IoCall className={Style.icon} />{" "}
                    <a href="tel:8882309150">+91 8882309150</a>
                  </p>
                  <p>
                    <FaLocationDot className={Style.icon} />{" "}
                    <span>
                      Codetrios 711 Sector -31, Faridabad,
                      <br /> Haryana, India - 121003
                    </span>
                  </p>
                </address>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={Style.copyRight}>
        <small>© 2025 Codetrios. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
