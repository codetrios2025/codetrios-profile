import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web_application.webp';
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
import { FaPaintBrush } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdDesignServices  } from "react-icons/md";
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
    const faqs = [
        {
            question: "What is web application development?",
            answer: "Web application development is the process of designing and building browser-based applications that provide interactive functionality for businesses, customers, employees, or other users."
        },
        {
            question: "Does CodeTrios provide custom web development?",
            answer: "Yes. CodeTrios develops custom web applications based on specific business workflows, functionality, user requirements, integrations, and technical objectives."
        },
        {
            question: "Can CodeTrios develop SaaS applications?",
            answer: "Yes. SaaS platforms can be developed as browser-based applications with user accounts, dashboards, permissions, workflows, APIs, and other required functionality."
        },
        {
            question: "Does CodeTrios develop APIs and integrations?",
            answer: "Yes. We develop and integrate APIs to connect web applications with databases, payment systems, CRM platforms, ERP systems, third-party services, and other applications."
        },
        {
            question: "Can web applications work on mobile devices?",
            answer: "Yes. Responsive web applications can be designed to provide usable experiences across desktop, tablet, and mobile devices. Progressive web applications can also provide additional app-like capabilities where appropriate."
        },
        {
            question: "Does CodeTrios provide application maintenance?",
            answer: "Yes. Ongoing support can include bug fixes, security updates, performance improvements, monitoring, new functionality, and technical maintenance."
        },
    ]
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
                "Create professional, responsive and conversion-focused websites with modern UI design and intuitive user experiences.",
            link: "/website-design-services",
            linkTitle: "Explore Website Design Services",
        },
        {
            icon: <IoCodeSlash />,
            title: "Web Development",
            description:
                "Build fast, secure and scalable websites with modern frontend, backend and API development.",
            link: "/web-development-services",
            linkTitle: "Explore Web Development Services",
        },
        {
            icon: <BsCart3 />,
            title: "Ecommerce Development",
            description:
                "Build high-performing online stores with responsive design, secure payments and ecommerce integrations.",
            link: "/ecommerce-development-services",
            linkTitle: "Explore Ecommerce Development Services",
        },
        {
            icon: <MdDesignServices />,
            title: "UI/UX Design",
            description:
                "Design intuitive, accessible and user-focused interfaces that improve usability, engagement and conversions.",
            link: "/ui-ux-design-services",
            linkTitle: "Explore UI/UX Design Services",
        },
        {
            icon: <PiPlugsConnectedBold />,
            title: "Custom Software Development",
            description:
                "Develop custom software solutions that automate workflows, solve business challenges and support long-term growth.",
            link: "/custom-software-solutions",
            linkTitle: "Explore Custom Software Solutions",
        },
        {
            icon: <LuSearchCheck />,
            title: "SEO & GEO Services",
            description:
                "Improve search engine visibility and AI search discoverability with technical SEO, content optimization and GEO strategies.",
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
                faqs={faqs}
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
                                    <p>Our web application development capabilities include custom business applications,
                                        customer portals, SaaS platforms, dashboards, workflow systems, API-driven 
                                        applications, enterprise applications, progressive web applications, and{" "} 
                                        <Link to="/ecommerce-development-services" title="Explore Ecommerce Development Services">ecommerce platforms</Link>. 
                                        We focus on clean architecture, responsive interfaces, security, performance, and maintainability.
                                    </p>
                                    <p>From planning and{" "} <Link to="/ui-ux-design-services" title="Explore UI/UX Design Services">UI/UX design</Link>{" "} 
                                        to frontend development, backend development, API integration, testing, 
                                        deployment, and ongoing support, CodeTrios provides an end-to-end approach 
                                        to building web applications that can evolve with your business. Our 
                                        development practices can also support technical foundations required for 
                                        <Link to="/geo-seo-services" title="Explore SEO & GEO Services"> SEO & GEO</Link>{" "} strategies.
                                    </p>
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
                                    <p>End-to-end development of bespoke web applications built around your business 
                                        processes. From internal CRMs and inventory systems to customer portals and advanced workflow apps, our{" "}
                                        <Link to="/custom-software-solutions" title="Explore Custom Software Solutions">custom software development</Link>{" "} 
                                        approach turns complex requirements into a seamless digital experience.</p>
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
                                    <p>We develop backend functionality using PHP and Node.js for custom web applications 
                                        as part of our{" "} <Link to="/web-development-services" title="Explore Web Development Services">web development services</Link>{" "} 
                                        that require business logic, authentication, database connectivity, APIs, integrations, and scalable server-side functionality.
                                    </p>
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
                                    autoPlay={false}
                                    infinite={false}
                                    arrows={false}
                                    showDots={true}
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
                <div className={`${Style.faqSec} ${Style.commonPading}`}>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Frequently Asked Questions About Web Application Development</h2>
                                <Accordion defaultActiveKey="0" className='faqStyle'>
                                    {faqs.map((item, index) =>{
                                        return(
                                            <Accordion.Item eventKey={index.toString()} key={index}>
                                                <Accordion.Header>{item.question}</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>{item.answer}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        )
                                    })}
                                </Accordion>
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