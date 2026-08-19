import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web_development.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { FaBuilding , FaReact } from "react-icons/fa";
import { MdSupportAgent, MdDashboardCustomize  } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import Industries from '../Pages/Industries.jsx';
import Development from '../HomeRoute/Development.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
//services Icon
import { FaMobileAlt, FaPaintBrush, FaHandshake, FaGlobeAmericas } from "react-icons/fa";
import { IoCodeSlash, IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdInsights, MdDesignServices  } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

const Carousel = CarouselImport.default ?? CarouselImport;

const useCarouselBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState("desktop");
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 580) {
                setBreakpoint("mobile");
            } else if (width < 1024) {
                setBreakpoint("tablet");
            } else {
                setBreakpoint("desktop");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return breakpoint;
};
const getCarouselPlay = (
    length,
    breakpoint,
    desktopItems = 3,
    tabletItems = 2
	) => {
    if (!length) {
        return false;
    }
    // Mobile shows only 1 item
    if (breakpoint === "mobile") {
        return length > 1;
    }
    // Tablet
    if (breakpoint === "tablet") {
        return length > tabletItems;
    }
    // Desktop
    return length > desktopItems;
};
const WebDevelopment = () =>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
        mobile: {breakpoint: { max: 580, min: 0 },items: 1}
    };
    const benefits = [
        "Business-focused development",
        "Responsive and mobile-first implementation",
        "SEO-friendly technical structure",
        "Fast and performance-focused websites",
        "Scalable architecture",
        "Clean and maintainable code",
        "API and third-party integrations",
        "Ongoing maintenance and support",
    ];
    const servicesData = [
        {
            icon: <FaPaintBrush />,
            title: "Website Design",
            description:
                "We are a leading web design company in India, providing professional, creative, and result-driven website design services in India for businesses, startups, brands, and organizations. As a best website design company in India, we combine innovative design, intuitive user experience, high performance, and conversion-focused strategies to create websites that help businesses grow online.",
            link: "/website-design-services",
            linkTitle: "Explore Website Design Services",
        },
        {
            icon: <BsCart3 />,
            title: "Ecommerce Development",
            description:
                "Taking your business online requires more than just a website—it requires a strategic, high-performance eCommerce ecosystem designed to enhance user experience, streamline operations, and drive sales. At CodeTrios, we provide comprehensive eCommerce development services and are recognized for delivering the best ecommerce development services tailored to modern business needs. As the best ecommerce development company in India, we specialize in building robust, secure, scalable, and conversion-focused online stores designed around your business model, products, and customer behavior.",
            link: "/ecommerce-development-services",
            linkTitle: "Explore Ecommerce Development",
        },
        {
            icon: <FaGlobeAmericas />,
            title: "Web Application Development",
            description:
                "At CodeTrios, we build powerful, scalable, and secure web applications designed to streamline business operations, improve productivity, and deliver exceptional user experiences. Our web application development solutions are tailored to your specific business requirements, helping you transform complex processes into fast, intuitive, and easy-to-use digital platforms.",
            link: "/web-application-development",
            linkTitle: "Explore Web Application Development",
        },
        {
            icon: <MdDesignServices />,
            title: "UI/UX Design",
            description:
                "At CodeTrios, we believe design is the foundation of a strong digital presence. As a user experience design company, our creative team combines strategy, aesthetics, usability, and technology to create digital experiences that reflect your brand identity while delivering meaningful results. Every visual element is designed with a clear purpose—to engage users, communicate your message, guide user behavior, and strengthen your brand.",
            link: "/ui-ux-design-services",
            linkTitle: "Explore UI UX Design Services",
        },
        {
            icon: <PiPlugsConnectedBold />,
            title: "Custom Software Development",
            description:
                "Technology is evolving faster than ever, and businesses that adapt early can gain a significant competitive advantage. As a Top Custom software development services company, CodeTrios helps organizations modernize, automate, and scale their operations through powerful, future-ready technology solutions. From system upgrades and Custom software modernization development services to custom software applications, intelligent automation, and technology architecture planning, we deliver solutions tailored to your workflows, business objectives, and long-term growth goals.",
            link: "/custom-software-solutions",
            linkTitle: "Explore Custom Software Solutions",
        },
        {
            icon: <LuSearchCheck />,
            title: "AI SEO & GEO Services",
            description:
                "Improve your online visibility across traditional search and emerging AI-powered search experiences. Our SEO and GEO strategies focus on technical optimization, useful content and building your digital authority.",
            link: "/geo-seo-services",
            linkTitle: "Explore SEO & GEO Services",
        },
    ];
    //Data length
    const relatedLength = servicesData?.length || 0;
    //AutoPlay
    const relatedAutoPlay = getCarouselPlay(relatedLength, breakpoint, 3, 2);
    //Carousel center class
    const carouselClass = relatedLength === 1 ? "centerCarousel" : relatedLength === 2 ? "centerCarousel" : "";
    return(
        <>
            <SEO page="web-development-services" />
            <SchemaGraph
                pageType="service"
                pageName="Web Development Services"
                pageDescription="CodeTrios provides professional web development services in India, building scalable, responsive and high-performance websites and web solutions for businesses."
                pageUrl="https://www.codetrios.com/web-development-services"
                serviceName="Web Development Services"
                serviceDescription="Professional web development services in India for businesses and organizations."
                serviceType="Web Development"
                breadcrumbs={[
                    {
                        name: "Home",
                        url: "https://www.codetrios.com/"
                    },
                    {
                        name: "Services",
                        url: "https://www.codetrios.com/services"
                    },
                    {
                        name: "Web Development Services",
                        url: "https://www.codetrios.com/web-development-services"
                    }
                ]}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Web Development Company in India</h1>
                                    <p>CodeTrios is a web development company in India helping businesses, startups, organizations, and growing brands build fast, secure, and scalable websites and web applications. We combine modern frontend and backend technologies, responsive development, performance optimization, and maintainable architecture to create digital platforms designed around real business requirements.</p>
                                    <CATButton />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={'servicesCol ' + Style.commonPading + " " + Style.aboutSec}>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <figure>
                                    <img src={webImage} className='imgFull' alt='Custom web development services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Custom Web Development Services for Growing Businesses</h2>
                                    <p>Our web development services cover frontend development, backend development, CMS development, custom functionality, API integrations, database development, performance optimization, security, testing, and deployment.</p>
                                    <p>We develop websites and web platforms based on the technical and business requirements of each project. Depending on the project, our team can work with technologies such as React.js, Node.js, PHP, WordPress, Drupal, Strapi, APIs, and modern database systems.</p>
                                    <p>From corporate websites and content-managed websites to custom web applications and ecommerce platforms, our development approach focuses on responsive experiences, maintainable code, security, performance, and long-term scalability.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " + Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our Web Development Services</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaBuilding  /></span>
                                            <h3>Corporate & Business Website Development</h3>
                                            <p>We develop professional business websites that communicate your services clearly, establish credibility, and support lead generation. Each website is built around your brand, audience, content structure, and business objectives.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaBuilding  /></span>
                                            <h3>What You Get:</h3>
                                            <ul>
                                                <li>High-end corporate UI/UX</li>
                                                <li>Clear information architecture</li>
                                                <li>Speed-optimized & secure code</li>
                                                <li>Lead generation elements (forms, CTAs, funnels)</li>
                                                <li>Multi-page company profiles & service sections</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdDashboardCustomize  /></span>
                                            <h3>CMS Development</h3>
                                            <p>We build manageable content-driven websites using platforms such as WordPress, Drupal, Strapi, and custom content management systems. These solutions allow teams to manage pages, blogs, media, forms, and other website content efficiently.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdDashboardCustomize  /></span>
                                            <h3>What You Get:</h3>
                                            <ul>
                                                <li>Customizable dashboards</li>
                                                <li>Role-based user access</li>
                                                <li>SEO-friendly structures</li>
                                                <li>Plugin/module integration</li>
                                                <li>Secure & scalable architecture</li>
                                            </ul>
                                            <p>Perfect for businesses wanting flexibility and long-term content management independence.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><BiCodeCurly  /></span>
                                            <h3>Custom PHP & Node.js Development</h3>
                                            <p>We develop secure backend systems and APIs using PHP and Node.js for websites and web applications that require custom business logic, integrations, automation, authentication, and scalable server-side functionality.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><BiCodeCurly  /></span>
                                            <h3>What You Get:</h3>
                                            <ul>
                                                <li>Custom APIs & microservices</li>
                                                <li>High-load performance optimization</li>
                                                <li>Database design & integration</li>
                                                <li>Secure authentication & role management</li>
                                                <li>Flexible, upgrade-ready architecture</li>
                                            </ul>
                                            <p>Your backend becomes reliable, efficient, and tailored to your exact workflow.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaReact  /></span>
                                            <h3>React.js Frontend Development</h3>
                                            <p>We build responsive and interactive frontend applications with React.js using reusable components, API integrations, responsive interfaces, and maintainable frontend architecture.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaReact  /></span>
                                            <h3>What You Get:</h3>
                                            <ul>
                                                <li>Component-based architecture</li>
                                                <li>Pixel-perfect UI components</li>
                                                <li>Optimized rendering & state management</li>
                                                <li>API-driven dynamic pages</li>
                                                <li>Extremely fast load & response times</li>
                                            </ul>
                                            <p>Your application feels modern, polished, and engineered for user engagement.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdSupportAgent  /></span>
                                            <h3>Website Maintenance & Support</h3>
                                            <p>We provide ongoing website maintenance to help keep websites secure, updated, performant, and reliable. Support can include updates, backups, bug fixes, performance improvements, monitoring, and feature enhancements.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdSupportAgent  /></span>
                                            <h3>What You Get:</h3>
                                            <ul>
                                                <li>Regular security patches & updates</li>
                                                <li>Performance tuning & speed optimization</li>
                                                <li>Daily/weekly backups</li>
                                                <li>Uptime monitoring & issue resolution</li>
                                                <li>New features, content updates & enhancements</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>  
                <Development title="Our Web Development" subTitle="Process" />
                <section className={`${Style.whyChooseSection}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Why Choose CodeTrios for Web Development?</h2>
                                    <p>CodeTrios approaches web development with a focus on performance, maintainability, security, responsive experiences, and long-term scalability. We build solutions around the technical requirements and business objectives of each project rather than using a one-size-fits-all approach.</p>
                                    {benefits.map((benefit, index) => (
                                        <div className={Style.benefitItem}>
                                            <BsCheckCircle
                                                className={Style.icon}
                                            />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                    <Link to="/about-us" className={Style.btnStyle} title="Learn more about CodeTrios">Learn More</Link>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <figure data-aos="fade-up" data-aos-delay="100">
                                    <img src={WhyChooseImg} className='imgFull' alt='Why Choose CodeTrios?' width="1747" height="1334" />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className={`${Style.relatedSec} ${Style.commonPading}`}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Related Services</h2>
                                <Carousel
                                    autoPlaySpeed={3000}
                                    transitionDuration={500}
                                    responsive={RelatedServicesSlide}
                                    autoPlay={relatedAutoPlay}
                                    infinite={relatedAutoPlay}
                                    arrows={false}
                                    containerClass={carouselClass}
                                >
                                    {servicesData?.map((item, index) =>{
                                        return(
                                            <div className={Style.item} key={index}>
                                                <div className={Style.box}>
                                                    <div className={Style.icon}>{item.icon}</div>
                                                    <div>
                                                        <h3>{item.title}</h3>
                                                        <Link to={item.link} title={item.linkTitle}><GoArrowUpRight /></Link>
                                                    </div>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </div>             
                <CATComponent />
            </div>
        </>
    )
}

export default WebDevelopment;