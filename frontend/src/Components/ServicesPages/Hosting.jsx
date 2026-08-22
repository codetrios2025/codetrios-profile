import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/hosting.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { FaServer, FaCloud, FaWordpress   } from "react-icons/fa";
import { MdDns, MdSecurity, MdSpeed, MdSupportAgent  } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
//services Icon
import { FaPaintBrush, FaGlobeAmericas } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdInsights, MdDesignServices  } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
//Components
import HostingProcess from './DeploymentProsess/HostingDeployment.jsx';
import Industries from '../Pages/Industries.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
const Carousel = CarouselImport.default ?? CarouselImport;

const useCarouselBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState("desktop");
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 767) {
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

const WebHosting = () =>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 767 },items: 2},
        mobile: {breakpoint: { max: 767, min: 0 },items: 1}
    };
    const faqs = [
        {
            question: "What type of web hosting does CodeTrios provide?",
            answer: "CodeTrios provides shared, VPS, cloud, WordPress, managed and business web hosting solutions based on website traffic, application requirements, performance needs and scalability."
        },
        {
            question: "Does CodeTrios provide WordPress hosting?",
            answer: "Yes. CodeTrios provides WordPress hosting with installation, SSL configuration, security, performance optimization, backups and migration support."
        },
        {
            question: "Can CodeTrios migrate my existing website?",
            answer: "Yes. Website migration can include transferring website files, databases, domains, SSL configuration and hosting settings while minimizing downtime."
        },
        {
            question: "Does CodeTrios provide managed hosting?",
            answer: "Yes. Managed hosting can include server setup, configuration, updates, security, performance tuning, monitoring and technical support."
        },
        {
            question: "Can CodeTrios host ecommerce websites?",
            answer: "Yes. CodeTrios can provide hosting support for ecommerce websites and combines hosting expertise with its ecommerce development services."
        },
        {
            question: "Can CodeTrios host web applications?",
            answer: "Yes. Hosting infrastructure can be configured for web applications according to their technology stack, traffic, resource requirements and scalability needs."
        }
    ];
    const servicesData = [
        {
            icon: <IoCodeSlash />,
            title: "Web Development",
            description:
                "Build fast, secure and scalable websites and web applications.",
            link: "/web-development-services",
            linkTitle: "Explore Web Development Services",
        },
        {
            icon: <FaPaintBrush />,
            title: "Website Design",
            description:
                "Create responsive and conversion-focused website experiences.",
            link: "/website-design-services",
            linkTitle: "Explore Website Design Services",
        },
        {
            icon: <BsCart3 />,
            title: "Ecommerce Development",
            description:
                "Build scalable online stores with secure payments and integrations.",
            link: "/ecommerce-development-services",
            linkTitle: "Explore Ecommerce Development Services",
        },
        {
            icon: <FaGlobeAmericas />,
            title: "Web Application Development",
            description:
                "Develop secure and scalable business web applications.",
            link: "/web-application-development",
            linkTitle: "Explore Web Application Development",
        },
        {
            icon: <LuSearchCheck />,
            title: "SEO & GEO Services",
            description:
                "Improve search visibility and AI search discoverability.",
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
            <SEO page="web-hosting-services" />
            <SchemaGraph
                pageType="service"
                pageName="Web Hosting Services"
                pageDescription="CodeTrios provides web hosting services to help businesses deploy and maintain reliable websites and web applications."
                pageUrl="https://www.codetrios.com/web-hosting-services"
                serviceName="Web Hosting Services"
                serviceDescription="Web hosting services for websites and web applications."
                serviceType="Web Hosting"
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
                        name: "Web Hosting Services",
                        url: "https://www.codetrios.com/web-hosting-services"
                    }
                ]}
                faqs={faqs}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail + " " + Style.hostingStyle}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>Web Hosting Services in India</h1>
                                    <p>Your website’s performance, security, and reliability depend heavily on
                                        the quality of its hosting infrastructure. At CodeTrios, we provide secure,
                                        high-performance, and scalable web hosting services in India designed to
                                        keep websites and web applications fast, stable, and accessible around
                                        the clock. Our hosting solutions complement our <Link to="/web-development-services" title="Web Development Services">web development services</Link>
                                        , helping businesses maintain a reliable digital infrastructure.
                                    </p>
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
                                    <img src={webImage} className='imgFull' alt='Secure and scalable web hosting services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Fast, Secure & Scalable Hosting Solutions for Your Digital Growth</h2>
                                    <p>We offer a wide range of hosting solutions including Linux, cloud, WordPress, business, VPS, and shared hosting. Whether you are hosting a corporate website, an <Link to="/website-design-services" title="Website Design Services">professionally designed website</Link>, <Link to="/ecommerce-development-services" title="Ecommerce Development Services">ecommerce store</Link>, or <Link to="/web-application-development" title="Web Application Development">web application</Link>, our infrastructure is optimized for speed, reliability, security, and scalability.</p>
                                    <h3>Why Choose CodeTrios Web Hosting?</h3>
                                    <ul>
                                      <li><FiCheck className={Style.icon} /> <strong>99.9% Uptime Assurance –</strong> Keep your website accessible and minimize unexpected downtime.</li>
                                      <li><FiCheck className={Style.icon} /> <strong>Optimized Server Performance –</strong> Fast, reliable infrastructure designed for improved website loading speeds and responsiveness.</li>
                                      <li><FiCheck className={Style.icon} /> <strong>Enterprise-Grade Security –</strong> Robust security measures help protect your website, applications, and data from common online threats.</li>
                                      <li><FiCheck className={Style.icon} /> <strong>Scalable Hosting Plans –</strong> Flexible hosting infrastructure that can scale with your traffic, resources, and business requirements.</li>
                                      <li><FiCheck className={Style.icon} /> <strong>Expert Technical Support –</strong> Get professional assistance with hosting configuration, performance, troubleshooting, and technical requirements.</li>
                                    </ul>
                                    <p>From website hosting and server management to performance optimization, security, and ongoing technical support, CodeTrios provides reliable web hosting services in India that give your business a strong and dependable digital foundation.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our Web Hosting Solutions</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaServer  /></span>
                                    <h3>Shared Hosting</h3>
                                    <p>Affordable Hosting for Small Websites & Startups<br/> Perfect for personal websites, blogs, and small businesses looking for a cost-effective hosting solution without compromising reliability.</p>
                                    <strong>Features:</strong>
                                    <ul>
                                      <li>Budget-friendly plans</li>
                                      <li>cPanel-based management</li>
                                      <li>Email hosting included</li>
                                      <li>Basic security protection</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdDns /></span>
                                    <h3>VPS Hosting</h3>
                                    <p>Greater Power, Control & Performance <br/>Designed for growing businesses that require dedicated resources, improved speed, and higher flexibility.</p>
                                    <strong>Features:</strong>
                                    <ul>
                                      <li>Dedicated CPU & RAM</li>
                                      <li>Faster load times</li>
                                      <li>Root access & customization</li>
                                      <li>Enhanced security</li>
                                      <li>Scalable resources</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaCloud /></span>
                                    <h3>Cloud Hosting</h3>
                                    <p>Flexible & Scalable Hosting for Modern Applications <br />Cloud hosting ensures high availability and performance even during traffic spikes.</p>
                                    <strong>Features:</strong>
                                    <ul>
                                      <li>Auto-scaling resources</li>
                                      <li>High availability architecture</li>
                                      <li>Pay-as-you-grow pricing</li>
                                      <li>Cloud-based backups</li>
                                      <li>Disaster recovery support</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdSecurity /></span>
                                    <h3>Security & Reliability</h3>
                                    <p>Protecting Your Website & Data at Every Layer <br />We follow industry best practices to keep your website safe from threats and data loss.</p>
                                    <strong>Features:</strong>
                                    <ul>
                                      <li>Free SSL certificate setup</li>
                                      <li>Firewall & malware protection</li>
                                      <li>Regular security updates</li>
                                      <li>Automated daily backups</li>
                                      <li>DDoS mitigation</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdSpeed /></span>
                                    <h3>Performance & Optimization</h3>
                                    <p>
                                        We fine-tune hosting environments to improve loading times, server
                                        response, caching, and overall website performance. For businesses that
                                        need broader technical improvements, our <Link to="/web-development-services" title="Web Development Services">web development services</Link> can address website architecture, frontend performance, backend optimization, APIs, and technical scalability.</p>
                                    <strong>Performance Enhancements:</strong>
                                    <ul>
                                      <li>SSD-powered servers</li>
                                      <li>Server-side caching</li>
                                      <li>CDN integration</li>
                                      <li>Optimized PHP & database configuration</li>
                                      <li>Continuous speed monitoring</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdSupportAgent   /></span>
                                    <h3>Managed Hosting Support</h3>
                                    <p>We Manage the Server, You Manage Your Business <br />With CodeTrios Managed Hosting, our experts take care of all technical operations so you can stay focused on growth.</p>
                                    <strong>Managed Services Include:</strong>
                                    <ul>
                                      <li>Server setup & configuration</li>
                                      <li>Website migration</li>
                                      <li>Regular updates & patches</li>
                                      <li>Performance tuning</li>
                                      <li>24/7 monitoring & support </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaWordpress /></span>
                                    <h3>WordPress Hosting</h3>
                                    <p>
                                        Fast and secure WordPress hosting optimized for business websites, blogs,
                                        portfolios, and content-driven websites. Businesses that need a complete
                                        WordPress website can also explore our <Link to="/web-development-services" title="Web Development Services">website development services
                                        </Link> for custom functionality, integrations, performance optimization, and ongoing maintenance.
                                    </p>
                                    <ul>
                                        <li>WordPress installation</li>
                                        <li>SSL configuration</li>
                                        <li>Performance optimization</li>
                                        <li>Security configuration</li>
                                        <li>Website migration</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaServer /></span>
                                    <h3>Business Web Hosting</h3>
                                    <p>Reliable hosting for company websites, professional services, portals, and growing businesses that need better performance, security, and technical support.</p>
                                    <ul>
                                        <li>Business email support</li>
                                        <li>SSL & security setup</li>
                                        <li>Performance optimization</li>
                                        <li>Regular backups</li>
                                        <li>Technical assistance</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className={`${Style.commonPading} ${Style.weBuild} ${Style.secBgView} `}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={`${Style.centerHead} ${Style.bottomNoSpace}`}>
                                    <h2>Ecommerce Hosting for Online Stores</h2>
                                    <p>
                                        Ecommerce websites require reliable infrastructure, fast page
                                        delivery, secure transactions, and scalable resources to handle
                                        growing traffic and orders. CodeTrios provides hosting support for
                                        businesses running online stores alongside our <Link to="/ecommerce-development-services" title="Ecommerce Development Services"> ecommerce development services</Link>.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Industries title="Our Web Hosting for Different Industries" />
                <HostingProcess title="Our Web Hosting" subTitle="process"/>
                <section className={`${Style.commonPading} ${Style.weBuild} ${Style.secBgView} `}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={`${Style.centerHead} ${Style.bottomNoSpace}`}>
                                    <h2>Hosting Technologies & Infrastructure</h2>
                                    <ul className={Style.ourTech}>
                                        <li>Linux Hosting</li>
                                        <li>PHP Applications</li>
                                        <li>MySQL / MariaDB</li>
                                        <li>WordPress</li>
                                        <li>cPanel</li>
                                        <li>SSL</li>
                                        <li>CDN</li>
                                        <li>Caching</li>
                                        <li>Cloud Infrastructure</li>
                                        <li>DNS Management</li>
                                        <li>Backups</li>
                                        <li>Server Monitoring</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={`${Style.whyChooseSection} ${Style.hostingSec}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Why Choose CodeTrios for Web Hosting?</h2>
                                    <p>CodeTrios combines hosting infrastructure with website development, application support, performance optimization, security configuration, and ongoing technical assistance. Businesses can also work with our <Link to="/custom-software-solutions" title="Custom Software Development Services">custom software development team </Link> when they require business applications, workflow automation, API integrations, or scalable software systems.</p>
                                    <p>Web Hosting is one part of the broader <Link to="/services" title="CodeTrios Services">digital solutions and technology services offered by CodeTrios</Link>.</p>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Website + Hosting Expertis</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Performance Optimization</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Website Migration</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>SSL & Security Configuration</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Regular Backups</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Scalable Infrastructure</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Technical Support</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Developer-Friendly Hosting</span>
                                    </div>
                                    <Link to="/about-us" className={`${Style.btnStyle} ${Style.servicesBtn}`} title="Learn about CodeTrios">Learn More</Link>
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
                 <div className={`${Style.faqSec} ${Style.commonPading}`}>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Frequently Asked Questions About Web Hosting Services</h2>
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

export default WebHosting;