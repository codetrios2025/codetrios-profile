import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web_development.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { MdSupportAgent, MdDashboardCustomize, MdDesignServices  } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { BsCheckCircle, BsCart3 } from "react-icons/bs";
import Industries from '../Pages/Industries.jsx';
import Development from '../HomeRoute/Development.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
//services Icon
import { FaPaintBrush, FaGlobeAmericas, FaBuilding , FaReact } from "react-icons/fa";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { LuSearchCheck } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

const Carousel = CarouselImport.default ?? CarouselImport;

const WebDevelopment = () =>{
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
        mobile: {breakpoint: { max: 580, min: 0 },items: 1}
    };
    const faqs = [
        {
            question: "What does a web development company do?",
            answer: "A web development company builds and maintains websites and web applications, including frontend interfaces, backend systems, databases, APIs, integrations, testing, deployment, and ongoing technical support."
        },
        {
            question: "How much do web development services cost in India?",
            answer: "The cost of web development depends on factors such as project complexity, required features, technology, integrations, design requirements, content management needs, and ongoing support. CodeTrios provides project-specific estimates based on business and technical requirements."
        },
        {
            question: "How long does it take to develop a website?",
            answer: "Website development timelines depend on the size and complexity of the project. A simple business website may take a few weeks, while custom websites and web applications with advanced functionality, integrations, or workflows can take longer."
        },
        {
            question: "Do you develop SEO-friendly websites?",
            answer: "Yes. CodeTrios follows SEO-friendly development practices such as responsive design, clean site structure, performance optimization, crawlable content, proper technical implementation, and structured data where appropriate."
        },
        {
            question: "What is the difference between web design and web development?",
            answer: "Web design focuses on visual appearance, layout, branding, and user experience, while web development focuses on building the frontend and backend functionality that makes a website or web application work."
        },
        {
            question: "Does CodeTrios provide custom web development?",
            answer: "Yes. CodeTrios provides custom web development for businesses and organizations that require specific functionality, integrations, workflows, or application features."
        },
        {
            question: "Which technologies does CodeTrios use?",
            answer: "Depending on project requirements, CodeTrios works with technologies including React.js, Node.js, PHP, WordPress, Drupal, Strapi, APIs, databases, and modern web development tools."
        },
        {
            question: "Can CodeTrios develop an existing website further?",
            answer: "Yes. Existing websites can be extended with new features, integrations, performance improvements, redesigns, CMS functionality, and other technical enhancements."
        },
        {
            question: "Does CodeTrios provide website maintenance?",
            answer: "Yes. Website maintenance can include updates, security improvements, backups, bug fixes, performance optimization, monitoring, and feature enhancements."
        },
        {
            question: "Can CodeTrios build scalable web applications?",
            answer: "Yes. CodeTrios develops scalable web applications using appropriate frontend, backend, database, API, and hosting architecture based on project requirements."
        },
    ]
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
                "Create professional, responsive and conversion-focused websites with modern UI design and intuitive user experiences.",
            link: "/website-design-services",
            linkTitle: "Explore Website Design Services",
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
            icon: <FaGlobeAmericas />,
            title: "Web Application Development",
            description:
                "Develop secure and scalable web applications that streamline business processes and improve digital experiences.",
            link: "/web-application-development",
            linkTitle: "Explore Web Application Development",
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
    ];
    //Data length
    const relatedLength = servicesData?.length || 0;
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
                faqs={faqs}
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
                                    <p>From corporate websites and content-managed websites to{" "}
                                        <Link to="/website-design-services" title="Explore Website Design Services">professional website design</Link>,
                                        {" "}
                                        <Link to="/web-application-development" title="Explore Web Application Development">custom web applications</Link>{" "}
                                        and{" "}
                                        <Link to="/ecommerce-development-services" title="Explore Ecommerce Development Services">ecommerce platforms</Link>,
                                        our development approach focuses on responsive experiences,
                                        maintainable code, security, performance, and long-term scalability.
                                    </p>
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
                            <Col lg={6}>
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Why Choose CodeTrios for Web Development?</h2>
                                    <p>CodeTrios approaches web development with a focus on performance, maintainability, security, responsive experiences, and long-term scalability. We build solutions around the technical requirements and business objectives of each project rather than using a one-size-fits-all approach.</p>
                                    {benefits.map((benefit, index) => (
                                        <div className={Style.benefitItem} key={index}>
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
                                <figure>
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
                                <h2>Frequently Asked Questions About Web Development</h2>
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

export default WebDevelopment;