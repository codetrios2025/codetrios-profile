import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/website-design.webp';
import { FiCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { MdDesignServices} from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

import Development from '../HomeRoute/Development.jsx';
import Industries from '../Pages/Industries.jsx';
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
import { BsWordpress } from "react-icons/bs";

import {
  FiBriefcase,
  FiPenTool,
  FiGitBranch,
  FiShoppingCart,
  FiTag,
  FiTarget,
  FiRefreshCw,
  FiEye,
  FiCode
} from "react-icons/fi";
//services Icon
import { FaMobileAlt, FaPaintBrush, FaHandshake, FaGlobeAmericas } from "react-icons/fa";
import { IoCodeSlash, IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdInsights  } from "react-icons/md";
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
const WebDesign = () =>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
        mobile: {breakpoint: { max: 580, min: 0 },items: 1}
    };
    const faqs = [
        {
            question: "How much does website design cost in India?",
            answer:
                "Website design costs in India vary depending on the number of pages, design complexity, functionality, content requirements, integrations, and customization involved. A simple business website generally requires a smaller design scope than an ecommerce website or a complex digital platform. CodeTrios evaluates your requirements and recommends a website design approach based on your business goals and project scope."
        },
        {
            question: "How long does it take to design a website?",
            answer:
                "Website design timelines depend on the website's size, number of pages, design complexity, functionality, content requirements, and feedback cycles. A straightforward business website usually requires less design time than a large ecommerce website or custom digital product. CodeTrios determines the expected timeline during the project planning stage."
        },
        {
            question: "Does CodeTrios provide responsive website design?",
            answer:
                "Yes. CodeTrios designs responsive websites that work across desktops, tablets, and smartphones. Our design process considers mobile usability, navigation, content hierarchy, readability, and consistent user experiences across different screen sizes."
        },
        {
            question: "Can CodeTrios redesign an existing website?",
            answer:
                "Yes. CodeTrios provides website redesign and revamp services for businesses with outdated, difficult-to-use, or poorly performing websites. A redesign can improve visual design, information architecture, usability, responsive behavior, accessibility, performance, and conversion-focused layouts."
        },
        {
            question: "Does CodeTrios design WordPress websites?",
            answer:
                "Yes. CodeTrios provides WordPress website design for businesses, organizations, and projects that need a flexible content management system. WordPress websites can be designed with responsive layouts, user-friendly content management, SEO-friendly architecture, and requirements specific to the business."
        },
        {
            question: "Does CodeTrios provide ecommerce website design?",
            answer:
                "Yes. CodeTrios provides ecommerce website design for online stores, including Shopify, WooCommerce, and custom ecommerce requirements. The design focuses on product discovery, navigation, mobile usability, checkout experiences, customer trust, and conversion."
        }
    ];
    const benefits = [
        "Business-focused website strategy",
        "Modern and responsive UI/UX",
        "SEO-friendly website structure",
        "Fast and performance-focused design",
        "Mobile-first user experience",
        "Conversion-focused layouts",
        "Scalable website architecture",
        "Ongoing support and improvements",
    ];
    
const servicesData = [
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
            <SEO page="website-design-services" />
            <SchemaGraph
                pageType="service"
                pageName="Website Design Services"
                pageDescription="CodeTrios provides professional website design services in India, creating responsive, user-friendly and conversion-focused websites for businesses and organizations."
                pageUrl="https://www.codetrios.com/website-design-services"
                serviceName="Website Design Services"
                serviceDescription="Professional website design services in India for businesses, organizations and growing brands."
                serviceType="Website Design"
                
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
                        name: "Website Design Services",
                        url: "https://www.codetrios.com/website-design-services"
                    }
                ]}
                
                faqs={faqs}
            />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content} data-aos="fade-up" data-aos-delay="100">
                                    <h1>Professional Website Design Company in India</h1>
                                    <p>CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.</p>
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
                                <figure data-aos="fade-up" data-aos-delay="100">
                                    <img src={webImage} className='imgFull' alt='CodeTrios website design services' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent} data-aos="fade-up" data-aos-delay="200">
                                    <h2 className={Style.title}>Website Design Services Built Around Your Business Goals</h2>
                                    <p>Our website design services cover the complete design journey, from understanding your business and audience to creating the visual interface and preparing a scalable design system for development. We design websites for companies, startups, institutions, professional organizations, and growing brands.</p>
                                    <p>Our approach focuses on responsive UI/UX, clear information architecture, mobile-first experiences, fast-loading pages, accessibility, SEO-friendly structure, and conversion-focused layouts. The result is a website that is easier for visitors to navigate and easier for businesses to manage and grow.</p>
                                    <p>Depending on your requirements, CodeTrios can design corporate websites, business websites, ecommerce stores, landing pages, WordPress websites, and redesigned digital experiences.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title} data-aos="fade-up" data-aos-delay="100">Our Offerings Include</h2>
                            </Col>
                        </Row>
                        <Row data-aos="fade-up" data-aos-delay="100">
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FiBriefcase  /></span>
                                    <h3>Corporate Website</h3>
                                    <p>Modern website experiences designed around your business objectives, brand identity, target audience, and conversion goals.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><MdDesignServices    /></span>
                                    <h3>UI/UX</h3>
                                    <p>Pixel-perfect, device-friendly interfaces crafted for an exceptional 
                                        user experience. Every page is optimized for seamless browsing 
                                        across mobiles, tablets, and desktops. For dedicated product and 
                                        interface experience work, explore our{" "} 
                                        <Link to="/ui-ux-design-services">UI/UX design services</Link>.
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FiGitBranch  /></span>
                                    <h3>Prototyping</h3>
                                    <p>High-fidelity design prototypes that give you a visual preview of your website before development begins. Structured, scalable, and built following modern design systems.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FiShoppingCart   /></span>
                                    <h3>E-commerce</h3>
                                    <p>Conversion-focused ecommerce website design in India for Shopify, 
                                        WooCommerce, Magento, and custom platforms. For complete store 
                                        development and functionality, explore our{" "} 
                                        <Link to="/ecommerce-development-services">ecommerce development services</Link>.</p>
                                    
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FiTag   /></span>
                                    <h3>Branding</h3>
                                    <p>Beautiful, cohesive visuals that reflect your brand’s personality. From color palettes and typography to iconography and imagery — we create a design identity that stands out.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FiTarget   /></span>
                                    <h3>Landing Pages</h3>
                                    <p>High-impact landing pages optimized for Google Ads, Meta Ads, and marketing campaigns. Designed with CTA-driven layouts to improve conversions and lead generation.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FiRefreshCw   /></span>
                                    <h3>Redesign</h3>
                                    <p>Transform outdated websites into fresh, modern, and user-friendly experiences. We improve structure, usability, aesthetics, and overall performance to match today’s design trends.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FiEye   /></span>
                                    <h3>Accessibility</h3>
                                    <p>clear information architecture, mobile-first experiences, fast-loading
                                        pages, accessibility, SEO-friendly structure, and conversion-focused
                                        layouts. For businesses looking to improve visibility across traditional
                                        search and AI-powered search experiences, CodeTrios also provides
                                        <Link
                                            to="/geo-seo-services"
                                            title="Explore SEO and GEO Services"
                                        >
                                            {" "}SEO and GEO services
                                        </Link>.
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><BsWordpress   /></span>
                                    <h3>Wordpress</h3>
                                    <p>
                                    We specialize in WordPress website design in India, delivering flexible, scalable, and SEO-ready websites for businesses of all sizes.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
                <Industries title="Website Design for Different Industries" subText="CodeTrios designs websites for businesses and
                    organizations across different industries. Our
                    approach adapts the website structure, user
                    experience, content presentation, and conversion
                    journey to the needs of each organization." />
                <Development title="Our Website Design" subTitle="Process" />
                <section className={`${Style.whyChooseSection}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Why Choose CodeTrios for Website Design?</h2>
                                    <p>Choose us for professional, affordable, and scalable website design and development services in India that combine modern technology, creative design, and business-focused results.</p>
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
                                <figure data-aos="fade-up" data-aos-delay="100">
                                    <img src={WhyChooseImg} className='imgFull' alt='Why choose CodeTrios for website design' width="1747" height="1334" />
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
                                <h2>Frequently Asked Questions About Website Design</h2>
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

export default WebDesign;