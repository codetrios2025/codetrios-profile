import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Style from "../CSS/Style.module.css";

import portfolio1 from "../../assets/images/portfolio01.webp";
import portfolio2 from "../../assets/images/portfolio02.webp";
import portfolio3 from "../../assets/images/portfolio03.webp";
import portfolio4 from "../../assets/images/portfolio04.webp";
import cretecent from "../../assets/images/portfolio05.webp";

const portfolioData = [
  {
    id: 1,
    title: "Cretecent",
    tag:"Website Design & Development",
    content:"Wordpress",
    image: cretecent,
    link: "",
  },
  {
    id: 2,
    title: "Elite GYM",
    tag:"Website Design & Development",
    content:"React , Node",
    image: portfolio1,
    link: "",
  },
  {
    id: 3,
    title: "Prime Estate",
    tag:"Website Design & Development",
    content:"React , Node",
    image: portfolio2,
    link: "",
  },
  {
    id: 4,
    title: "XOPA",
    tag:"Website Design & Development",
    content:"PHP, HTML, CSS, JavaScript",
    image: portfolio3,
    link: "",
  },
  {
    id: 5,
    title: "Anjum Jewels",
    tag:"Website Design & Development",
    content:"PHP, HTML, CSS, JavaScript",
    image: portfolio4,
    link: "",
  },
];

const OurPortfolio = () => {
  return (
    <div className={`${Style.commonPading} ${Style.protfolioSec}`}>
      <Container>
        <Row>
          <Col>
            <h2 className={Style.title} data-aos="fade-up">
              Featured Projects
            </h2>
          </Col>
        </Row>

        <Row data-aos="fade-up">
          {portfolioData.map((item) => (
            <Col
              md={4}
              key={item.id}
            >
              <div className={Style.projectBox}>
                <Link to={item.link}>
                  <div className={Style.projectImg}>
                    <span
                      className={Style.scrollAnime}
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></span>
                  </div>
                    <div className={Style.content}>
                        <div className={Style.tags}>
                            <h6>{item.tag}</h6>
                            <h6>{item.content}</h6>
                        </div>
                      <h5>{item.title}</h5>
                    </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>

        <Row>
          <Col>
            <div className={Style.buttonFlex}>
              <Link to="" className={Style.btnStyle}>
                See all Projects
                <BsArrowRight className={Style.icon} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurPortfolio;