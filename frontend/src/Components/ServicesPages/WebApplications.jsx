import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web_application.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { MdDeveloperMode , MdWeb } from "react-icons/md";
import { BiGitMerge } from "react-icons/bi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsCloudCheck } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
//services Icon
import { FaMobileAlt, FaPaintBrush, FaHandshake, FaGlobeAmericas } from "react-icons/fa";
import { IoCodeSlash, IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdInsights, MdDesignServices  } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import Development from '../HomeRoute/Development.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
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

const WebApplications = () =>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
        mobile: {breakpoint: { max: 580, min: 0 },items: 1}
    };
    const benefits = [
        "Business-focused application architecture",
        "Responsive and user-friendly interfaces",
        "Secure authentication and authorization",
        "Scalable application architecture",
        "API and third-party integrations",
        "Performance-focused development",
        "Maintainable and structured code",
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
            icon: <IoCodeSlash />,
            title: "Web Development",
            description: "At CodeTrios, we are a professional website development company delivering high-performance, scalable, secure, and SEO-friendly digital solutions for businesses of all sizes. Our website development services are designed to create fast, reliable, and user-focused websites that accurately represent your brand and provide an exceptional experience across all devices.",
            link: "/web-development-services",
            linkTitle: "Explore Web Development Services",
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
            <SEO  page="web-application-development" />
            <SchemaGraph
                pageType="service"
                pageName="Web Application Development Services"
                pageDescription="CodeTrios provides custom web application development services in India for businesses that need scalable, secure and high-performance web applications."
                pageUrl="https://www.codetrios.com/web-application-development"
                serviceName="Web Application Development"
                serviceDescription="Custom web application development services for businesses and organizations."
                serviceType="Web Application Development"
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
                        name: "Web Application Development",
                        url: "https://www.codetrios.com/web-application-development"
                    }
                ]}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Web Application Development Company in India</h1>
                                    <p>CodeTrios is a web application development company in India helping businesses and organizations build secure, scalable, and user-friendly web applications. We develop custom digital platforms that simplify business processes, connect systems, improve productivity, and provide reliable experiences for users across modern devices.</p>
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
                                    <img src={webImage} className='imgFull' alt='Custom web application development' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Custom Web Application Development for Businesses</h2>
                                    <p>CodeTrios provides custom web application development services for businesses and organizations that need applications built around specific workflows, users, and business requirements. We develop secure, responsive, and scalable web applications that can be accessed through modern web browsers across desktop, tablet, and mobile devices.</p>
                                    <p>Our web application development capabilities include custom business applications, customer portals, SaaS platforms, dashboards, workflow systems, API-driven applications, enterprise applications, and progressive web applications. We focus on clean architecture, responsive interfaces, security, performance, and maintainability.</p>
                                    <p>From planning and UI/UX design to frontend development, backend development, API integration, testing, deployment, and ongoing support, CodeTrios provides an end-to-end approach to building web applications that can evolve with your business.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Web Application Development Services</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdDeveloperMode  /></span>
                                    <h3>Custom Application Development</h3>
                                    <p>End-to-end development of bespoke web applications built around your business processes. From internal CRMs and inventory systems to customer portals and advanced workflow apps — we turn complex requirements into a seamless digital experience.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdWeb  /></span>
                                    <h3>Progressive Web Apps (PWAs)</h3>
                                    <p>We build progressive web applications that provide app-like experiences through modern web browsers. PWAs can support responsive interfaces, installable experiences, offline capabilities, and reliable performance across supported devices.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdWeb  /></span>
                                    <h3>PHP & Node.js Development</h3>
                                    <p>We develop backend functionality using PHP and Node.js for custom web applications that require business logic, authentication, database connectivity, APIs, integrations, and scalable server-side functionality.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><BiGitMerge  /></span>
                                    <h3>API Development & Integration</h3>
                                    <p>We design clean, secure, and well-documented APIs that allow systems to communicate effortlessly. From third-party integrations (payment gateways, CRMs, ERPs) to custom internal APIs — we ensure reliable data flow across all platforms.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><HiBuildingOffice2  /></span>
                                    <h3>Enterprise Applications</h3>
                                    <p>We develop enterprise web applications with role-based access, dashboards, workflows, reporting, data management, and integrations designed to support complex organizational processes.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><BsCloudCheck  /></span>
                                    <h3>Cloud Integration</h3>
                                    <p>We integrate web applications with cloud infrastructure and services to support deployment, scalability, storage, APIs, monitoring, and reliable application operations.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Development title="Our Web Application" subTitle="Development Process" />
                <section className={`${Style.commonPading} ${Style.weBuild} `}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.centerHead}>
                                    <h2>
                                        Web Applications for Different Business Needs
                                    </h2>
                                    <p>
                                        CodeTrios develops web applications for businesses and
                                        organizations with different operational and customer
                                        requirements. Applications can be designed for
                                        internal teams, customers, partners, administrators,
                                        or public users.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Business Management Systems</h3>
                                    <p>
                                        Custom systems for managing business processes,
                                        records, workflows, and internal operations.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Customer Portals</h3>
                                    <p>
                                        Secure portals that allow customers to access
                                        information, services, documents, accounts, and
                                        other digital functionality.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>SaaS Applications</h3>
                                    <p>
                                        Browser-based software platforms designed for
                                        recurring users, subscription models, and scalable
                                        digital services.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Dashboards & Reporting</h3>
                                    <p>
                                        Interactive dashboards for monitoring business
                                        data, activities, performance, and operational
                                        metrics.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Workflow Applications</h3>
                                    <p>
                                        Digital workflows that help organizations automate
                                        repetitive processes and improve operational
                                        efficiency.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>API-Driven Applications</h3>
                                    <p>
                                        Applications that connect internal systems,
                                        third-party platforms, databases, and external
                                        services through APIs.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={`${Style.whyChooseSection}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Why Choose CodeTrios for Web Application Development?</h2>
                                    <p>Our web applications are built to work seamlessly across devices and platforms, providing users with a consistent experience whether they access your application from a desktop, tablet, or smartphone. From intuitive interfaces and responsive frontend development to powerful backend systems, databases, APIs, and third-party integrations, we deliver complete solutions engineered for performance and long-term reliability.</p>
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

export default WebApplications;