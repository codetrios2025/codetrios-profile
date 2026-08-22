import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/e-Commerce_img.webp';
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { FaStore, FaWordpress } from "react-icons/fa";
import { MdPhoneIphone, MdSpeed  } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
//services Icon
import { FaPaintBrush, FaGlobeAmericas, FaBoxOpen } from "react-icons/fa";
import { FaShopify, FaCartShopping } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdDesignServices, MdPayment, MdInventory2  } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
//Components
import EcommerceDevelopment from './DeploymentProsess/EcommerceDevelopment.jsx';
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
const EcommerceSolutions = () =>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
        mobile: {breakpoint: { max: 580, min: 0 },items: 1}
    };
    const faqs = [
        {
            question: "What does an ecommerce development company do?",
            answer: "An ecommerce development company designs and develops online stores, including storefronts, product catalogs, shopping carts, checkout, payment integrations, and supporting business functionality."
        },
        {
            question: "Does CodeTrios provide ecommerce development in India?",
            answer: "Yes. CodeTrios provides ecommerce development services in India for businesses that need custom or platform-based online stores."
        },
        {
            question: "Does CodeTrios develop Shopify stores?",
            answer: "Yes, when required by the project, CodeTrios can provide Shopify store development and customization."
        },
        {
            question: "Does CodeTrios provide WooCommerce development?",
            answer: "Yes. CodeTrios can build and customize WooCommerce stores with products, checkout, payments, integrations, and other ecommerce functionality."
        },
        {
            question: "Can CodeTrios build a custom ecommerce website?",
            answer: "Yes. Custom ecommerce development can be used when a business requires specialized workflows, integrations, or functionality that standard ecommerce platforms cannot provide."
        },
        {
            question: "Can an existing ecommerce website be redesigned?",
            answer: "Yes. An existing ecommerce website can be redesigned to improve its user experience, responsive behavior, visual design, performance, and conversion journey."
        },
    ]    
    const benefits = [
        "Business-focused ecommerce strategy",
        "Conversion-focused user experience",
        "Responsive and mobile-first development",
        "Secure payment integration",
        "SEO-friendly website architecture",
        "Fast and performance-focused stores",
        "Scalable ecommerce solutions",
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
    //AutoPlay
    const relatedAutoPlay = getCarouselPlay(relatedLength, breakpoint, 3, 2);
    //Carousel center class
    const carouselClass = relatedLength === 1 ? "centerCarousel" : relatedLength === 2 ? "centerCarousel" : "";
    return(
        <>
            <SEO page="ecommerce-development-services" />
            <SchemaGraph
                pageType="service"
                pageName="Ecommerce Development Services"
                pageDescription="CodeTrios provides ecommerce development services in India to help businesses build scalable, responsive and conversion-focused online stores."
                pageUrl="https://www.codetrios.com/ecommerce-development-services"
                serviceName="Ecommerce Development Services"
                serviceDescription="Professional ecommerce development services in India for businesses looking to build scalable online stores."
                serviceType="Ecommerce Development"
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
                        name: "Ecommerce Development Services",
                        url: "https://www.codetrios.com/ecommerce-development-services"
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
                                    <h1>Ecommerce Development Company in India</h1>
                                    <p>CodeTrios is an ecommerce development company in India helping businesses build secure, scalable, and conversion-focused online stores. We design and develop ecommerce websites around your products, customers, business model, and growth objectives, with a focus on usability, performance, mobile responsiveness, and reliable ecommerce functionality.</p>
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
                                    <img src={webImage} className='imgFull' alt='Ecommerce website development' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Professional Ecommerce Development Services in India</h2>
                                    <p>
                                        CodeTrios provides end-to-end ecommerce development services for businesses
                                        launching new online stores, migrating existing ecommerce platforms, or
                                        improving established stores. We create responsive and user-friendly
                                        shopping experiences with structured product catalogs, secure checkout
                                        flows, payment integrations, customer accounts, and scalable ecommerce
                                        architecture. Our ecommerce projects can also include
                                        <Link to="/website-design-services" title="Website Design Services">
                                            {" "}website design
                                        </Link>
                                        {" "}to create a consistent and conversion-focused storefront.
                                    </p>
                                    <p>
                                        Our ecommerce development services can include custom ecommerce
                                        development, responsive ecommerce website design, shopping cart and
                                        checkout development, payment gateway integration, inventory and order
                                        management, third-party API integrations, and technical performance
                                        optimization. Our
                                        <Link to="/web-development-services" title="Web Development Services">
                                            {" "}web development services
                                        </Link>
                                        {" "}support the frontend, backend, API, and technical architecture
                                        required for ecommerce platforms, while
                                        <Link
                                            to="/web-application-development"
                                            title="Web Application Development Services"
                                        >
                                            {" "}web application development
                                        </Link>
                                        {" "}can support custom dashboards, customer portals, business workflows,
                                        and other advanced ecommerce functionality. We also work with platforms
                                        such as WooCommerce, Shopify, and Magento based on the requirements of
                                        each business.
                                    </p>
                                    <p>
                                        From planning and
                                        <Link to="/ui-ux-design-services" title="UI/UX Design Services">
                                            {" "}UI/UX design
                                        </Link>
                                        {" "}through development, testing, deployment, and ongoing maintenance,
                                        CodeTrios builds ecommerce solutions designed to provide a reliable
                                        shopping experience and support long-term business growth.
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
                                <h2 className={Style.title}> Ecommerce Development Services</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaShopify /></span>
                                    <h3>Shopify Ecommerce Development</h3>
                                    <p>We create and customize Shopify stores with responsive storefronts, product structures, payment integrations, custom functionality, and conversion-focused shopping experiences.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaWordpress /></span>
                                    <h3>WooCommerce Development</h3>
                                    <p>We develop WooCommerce stores with customized product pages, shopping carts, checkout flows, payment gateways, shipping options, and integrations tailored to business requirements.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaStore  /></span>
                                    <h3>Custom Store Setup</h3>
                                    <p>End-to-end ecommerce development with personalized layouts, product structures, and branded interfaces tailored to your industry and audience.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdPayment  /></span>
                                    <h3>Payment Gateway Integration </h3>
                                    <p>Secure checkout experiences powered by trusted gateways like Razorpay, Stripe, PayPal, and more — offering multiple currencies and payment modes.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdInventory2  /></span>
                                    <h3>Inventory & Order Management</h3>
                                    <p>Powerful back-office dashboards to manage products, categories, stock levels, orders, returns, and shipping workflows. </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdPhoneIphone  /></span>
                                    <h3>Mobile-Responsive Design</h3>
                                    <p>Optimized layouts that ensure your store loads fast and performs exceptionally on all screen sizes.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaBoxOpen   /></span>
                                    <h3>Product Optimization</h3>
                                    <p>Well-structured product pages with optimized images, descriptions, variants, and SEO-friendly metadata for better visibility and conversions.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdSpeed /></span>
                                    <h3>Performance Optimization</h3>
                                    <p>Fast-loading pages for better user retention and search ranking.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>     
                <section className={`${Style.commonPading} ${Style.weBuild} ${Style.secBgView}`}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.centerHead}>
                                    <h2>Ecommerce Platforms We Work With</h2>
                                    <p>CodeTrios works with popular ecommerce platforms as well as custom ecommerce technologies to build solutions according to your business requirements.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}>
                                        <FaWordpress />
                                    </span>

                                    <h3>WooCommerce</h3>

                                    <p>
                                        Flexible WordPress-based ecommerce stores with
                                        customized products, checkout, payments, and
                                        integrations.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}>
                                        <FaStore />
                                    </span>

                                    <h3>Shopify</h3>

                                    <p>
                                        Scalable Shopify storefronts designed for
                                        usability, performance, product management,
                                        and online sales.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}>
                                        <FaCartShopping />
                                    </span>

                                    <h3>Custom Ecommerce</h3>

                                    <p>
                                        Custom ecommerce solutions for businesses requiring specialized workflows,
                                        integrations, or functionality beyond standard platforms. For more
                                        complex business systems, our
                                        <Link
                                            to="/custom-software-solutions"
                                            title="Custom Software Development Services"
                                        >
                                            {" "}custom software development
                                        </Link>
                                        {" "}services can support specialized business logic, automation, and
                                        integrations.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section> 
                <EcommerceDevelopment title="Our Ecommerce Development" subTitle="Process" /> 
                <section className={`${Style.whyChooseSection}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Why Choose CodeTrios for Ecommerce Development?</h2>
                                    <p>CodeTrios combines ecommerce strategy, UI/UX design, development, integrations, performance optimization, and ongoing support to create online stores that are designed around real business requirements and customer needs.</p>
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
                <div className={`${Style.faqSec} ${Style.commonPading}`}>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Frequently Asked Questions About Ecommerce Development</h2>
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

export default EcommerceSolutions;