import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/design_services.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { FaRegIdBadge, FaPaintBrush, FaPlayCircle    } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
//services Icon
import { FaMobileAlt, FaHandshake, FaGlobeAmericas, FaDesktop, FaLaptopCode, FaPalette } from "react-icons/fa";
import { FaWandMagicSparkles, FaPenRuler } from "react-icons/fa6";
import { IoCodeSlash, IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdInsights, MdDesignServices, MdDevices, MdDashboardCustomize  } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
//Components
import DesignDevelopment from './DeploymentProsess/DesignDeployment.jsx';
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

const DesignServices = () =>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
        mobile: {breakpoint: { max: 580, min: 0 },items: 1}
    };
    const benefits = [
        "User-centered design approach",
        "Mobile-first and responsive layouts",
        "Conversion-focused user journeys",
        "Consistent design systems",
        "Wireframes and interactive prototypes",
        "Modern and scalable UI components",
        "Performance-aware design decisions",
        "Designs aligned with business goals",
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
            icon: <FaGlobeAmericas />,
            title: "Web Application Development",
            description:
                "At CodeTrios, we build powerful, scalable, and secure web applications designed to streamline business operations, improve productivity, and deliver exceptional user experiences. Our web application development solutions are tailored to your specific business requirements, helping you transform complex processes into fast, intuitive, and easy-to-use digital platforms.",
            link: "/web-application-development",
            linkTitle: "Explore Web Application Development",
        },
        {
            icon: <PiPlugsConnectedBold />,
            title: "Custom Software Development",
            description:
                "Technology is evolving faster than ever, and businesses that adapt early can gain a significant competitive advantage. As a Top Custom software development services company, CodeTrios helps organizations modernize, automate, and scale their operations through powerful, future-ready technology solutions. From system upgrades and Custom software modernization development services to custom software applications, intelligent automation, and technology architecture planning, we deliver solutions tailored to your workflows, business objectives, and long-term growth goals.",
            link: "/custom-software-solutions",
            linkTitle: "Explore Custom Software Solutions",
        }
    ];
    //Data length
    const relatedLength = servicesData?.length || 0;
    //AutoPlay
    const relatedAutoPlay = getCarouselPlay(relatedLength, breakpoint, 3, 2);
    //Carousel center class
    const carouselClass = relatedLength === 1 ? "centerCarousel" : relatedLength === 2 ? "centerCarousel" : "";

    return(
        <>
            <SEO page="ui-ux-design-services" />
            <SchemaGraph
                pageType="service"
                pageName="UI UX Design Services"
                pageDescription="CodeTrios provides UI UX design services focused on intuitive, responsive and user-friendly digital experiences for websites and web applications."
                pageUrl="https://www.codetrios.com/ui-ux-design-services"
                serviceName="UI UX Design Services"
                serviceDescription="Professional UI/UX design services in India for websites, web applications and digital products."
                serviceType="UI UX Design"
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
                        name: "UI UX Design Services",
                        url: "https://www.codetrios.com/ui-ux-design-services"
                    }
                ]}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>UI/UX Design Company in India</h1>
                                    <p>CodeTrios is a UI/UX design company in India creating intuitive, responsive, and user-focused experiences for websites, web applications, SaaS platforms, and digital products. Our design process combines user research, information architecture, wireframing, prototyping, visual design, and usability to create digital experiences that are easy to understand and use.</p>
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
                                    <img src={webImage} className='imgFull' alt='UI UX design services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Professional UI/UX Design Services in India</h2>
                                    <p>CodeTrios provides professional UI/UX design services in India for websites, web applications, SaaS platforms, dashboards, and digital products. We create interfaces that are visually consistent, responsive, accessible, and easy for users to navigate.</p>
                                    <p>Our UI/UX design process begins by understanding your users, business objectives, content structure, and functional requirements. We then develop user flows, wireframes, prototypes, visual designs, and reusable UI components that create a consistent experience across the product.</p>
                                    <p>Whether you are launching a new website, redesigning an existing interface, or developing a complex web application, CodeTrios combines user experience strategy with modern interface design to help businesses create digital products that are easier to use, communicate clearly, and support business goals.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our Design Capabilities</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaDesktop  /></span>
                                    <h3>Website UI/UX Design</h3>
                                    <p>We design clear and engaging website interfaces with intuitive navigation, visual hierarchy, responsive layouts, and conversion-focused user journeys. Each page is designed around your users, content, brand, and business objectives.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaLaptopCode /></span>
                                    <h3>Web Application UI/UX Design</h3>
                                    <p>We design interfaces for dashboards, SaaS platforms, customer portals, business applications, and enterprise systems with clear workflows and user-friendly interactions.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdDevices /></span>
                                    <h3>Responsive Web Layouts</h3>
                                    <p>We create responsive interfaces that adapt to desktop, tablet, and mobile screens while maintaining consistent navigation, visual hierarchy, usability, and interaction patterns.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaPenRuler /></span>
                                    <h3>Wireframing & Prototyping</h3>
                                    <p>We create wireframes and interactive prototypes to validate page structures, user flows, navigation, and functionality before the development stage begins.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdDashboardCustomize /></span>
                                    <h3>Design Systems & UI Components</h3>
                                    <p>We create reusable UI components, typography systems, spacing rules, colors, buttons, forms, and interaction patterns to maintain consistency across digital products.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaPalette  /></span>
                                    <h3>Branding & Identity Design</h3>
                                    <p>We create cohesive visual identities using typography, colors, imagery, iconography, and other visual elements that help businesses maintain a consistent brand experience across digital platforms.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaPaintBrush  /></span>
                                    <h3>Creative Graphics & Illustrations</h3>
                                    <p>We create custom graphics, illustrations, banners, and visual assets that complement your website or digital product and communicate information clearly. </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaWandMagicSparkles   /></span>
                                    <h3>Animation & Micro-interactions</h3>
                                    <p>We use purposeful animations, transitions, and micro-interactions to improve feedback, navigation, and user understanding without compromising usability or performance.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <DesignDevelopment title="Our UI/UX Design" subTitle="Process" />
                <section className={`${Style.commonPading} ${Style.weBuild} `}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.centerHead}>
                                    <h2>UI/UX Design for Different Digital Products</h2>
                                    <p>Our UI/UX design approach can be adapted to different types of websites, applications, and digital products.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Business Websites</h3>
                                    <p>
                                        Professional website interfaces designed to
                                        communicate services, build trust, and generate
                                        enquiries.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Web Applications</h3>
                                    <p>
                                        User-focused interfaces for business applications,
                                        portals, dashboards, and workflow systems.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>SaaS Products</h3>
                                    <p>
                                        Scalable UI systems for SaaS platforms with
                                        dashboards, user accounts, workflows, and
                                        subscription-based functionality.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Ecommerce Websites</h3>
                                    <p>
                                        User-friendly ecommerce experiences focused on
                                        product discovery, navigation, checkout, and
                                        conversion.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Enterprise Platforms</h3>
                                    <p>
                                        Structured interfaces for complex business
                                        processes, permissions, reporting, and data-heavy
                                        applications.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Digital Products</h3>
                                    <p>
                                        UI/UX design for new digital products from
                                        initial concept and wireframes through final
                                        interface design.
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
                                    <h2 className={Style.title}>Why Choose CodeTrios for UI/UX Design?</h2>
                                    <p>CodeTrios combines user experience strategy, interface design, responsive layouts, design systems, and business objectives to create digital experiences that are intuitive, consistent, accessible, and aligned with measurable business goals.</p>
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

export default DesignServices;