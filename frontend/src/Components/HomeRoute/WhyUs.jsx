import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import {FaRobot,FaUsers,FaHandshake,FaShieldAlt,FaGlobe,FaChartLine,} from "react-icons/fa";
import {MdOutlineDeveloperMode,  MdOutlinePriceCheck,} from "react-icons/md";
import {RiFlowChart,} from "react-icons/ri";
import { HiMiniSparkles } from "react-icons/hi2";
const Carousel =
  CarouselImport.default ??
  CarouselImport;
const WhyCodetrios = ()=>{
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 580 },items: 2
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },items: 1
    }
  };
  const whyChooseData = [
  {
    title: "AI-First Approach",
    icon: HiMiniSparkles,
    content: "Leverage the power of Artificial Intelligence to automate processes, improve efficiency, and build smarter applications that drive business growth.",
  },
  {
    title: "Experienced Developers",
    icon: MdOutlineDeveloperMode,
    content: "Our team of skilled developers, designers, and AI engineers delivers high-quality solutions using the latest technologies and industry best practices.",
  },
  {
    title: "Agile Development",
    icon: RiFlowChart,
    content: "We follow an agile methodology with transparent communication, regular updates, and rapid iterations to ensure faster project delivery.",
  },
  {
    title: "Transparent Pricing",
    icon: MdOutlinePriceCheck,
    content: "No hidden costs or surprises. We provide clear project estimates and flexible engagement models tailored to your business needs.",
  },
  {
    title: "End-to-End Solutions",
    icon: FaHandshake,
    content: "From strategy and UI/UX design to development, deployment, and maintenance—we handle every stage of your digital transformation.",
  },
  {
    title: "NDA & IP Protection",
    icon: FaShieldAlt,
    content: "Your ideas remain secure with strict Non-Disclosure Agreements (NDA) and complete intellectual property ownership.",
  },
  {
    title: "Global Client Support",
    icon: FaGlobe,
    content: "Serving startups, SMEs, and enterprises worldwide with seamless communication and dedicated support across different time zones.",
  },
  {
    title: "Results-Driven Development",
    icon: FaChartLine,
    content: "We build scalable, high-performance software focused on delivering measurable business outcomes, user satisfaction, and long-term success.",
  },
];
  return(
    <div className={`${Style.commonPading} ${Style.codeTriosSec}`}>
      <Container>
        <Row>
          <Col>
          <div className={Style.Heading}>
              <h2 data-aos="fade-up">Why Choose <span>Codetrios?</span></h2>
              <div className={Style.line}><span className={Style.lineDote}></span></div>
              <p className={Style.subContent} data-aos="fade-up" data-aos-delay="200">We combine innovation, expertise, and cutting-edge technology to deliver scalable <br/>digital solutions that help businesses grow faster. </p>
          </div>
            <div className={Style.head}>
              <h2 className={Style.title}></h2>
              <p></p>
            </div>
            <div className={Style.codeTriosElem} data-aos="fade-up" data-aos-delay="3s00">
              <Carousel
                  autoPlaySpeed={3000}
                  transitionDuration={500}
                  responsive={responsive}
                  autoPlay={true}
                  infinite={true}
                  arrows={false}
              >
                {whyChooseData.map((item, index) =>{
                  const IconComponent = item.icon;
                  return(
                    <div className={Style.item} key={index}>
                      <div className={Style.box} key={index}>
                        <div className={Style.icon}><IconComponent /></div>
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  )
                })}
              </Carousel>
              {/* <div className={Style.box}>
                <div className={Style.icon}><aaa /></div>
                <h4>Experienced Developers</h4>
                <p>Our team of skilled developers, designers, and AI engineers delivers high-quality solutions using the latest technologies and industry best practices.</p>
              </div>
              <div className={Style.box}>
                <div className={Style.icon}><aaa /></div>
                <h4>Agile Development</h4>
                <p>We follow an agile methodology with transparent communication, regular updates, and rapid iterations to ensure faster project delivery.</p>
              </div>
              <div className={Style.box}>
                <div className={Style.icon}><aaa /></div>
                <h4>Transparent Pricing</h4>
                <p>No hidden costs or surprises. We provide clear project estimates and flexible engagement models tailored to your business needs.</p>
              </div>
              <div className={Style.box}>
                <div className={Style.icon}><aaa /></div>
                <h4>End-to-End Solutions</h4>
                <p>From strategy and UI/UX design to development, deployment, and maintenance—we handle every stage of your digital transformation.</p>
              </div>
              <div className={Style.box}>
                <div className={Style.icon}><aaa /></div>
                <h4>NDA & IP Protection</h4>
                <p>Your ideas remain secure with strict Non-Disclosure Agreements (NDA) and complete intellectual property ownership.</p>
              </div>
              <div className={Style.box}>
                <div className={Style.icon}><aaa /></div>
                <h4>Global Client Support</h4>
                <p>Serving startups, SMEs, and enterprises worldwide with seamless communication and dedicated support across different time zones.</p>
              </div>
              <div className={Style.box}>
                <div className={Style.icon}><aaa /></div>
                <h4>Results-Driven Development</h4>
                <p>We build scalable, high-performance software focused on delivering measurable business outcomes, user satisfaction, and long-term success.</p>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhyCodetrios;