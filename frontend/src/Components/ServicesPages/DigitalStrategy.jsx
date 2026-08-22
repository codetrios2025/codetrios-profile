import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import digitalImg from '../../assets/images/digital_strategy.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { FaBullhorn , FaChartBar, FaChartLine  } from "react-icons/fa";
import { FaUsersViewfinder, FaDiagramProject, FaFilterCircleDollar } from "react-icons/fa6";
import { BsCheckCircle } from "react-icons/bs";
//services Icon
import { FaPaintBrush, FaGlobeAmericas } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdInsights, MdDesignServices  } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
//conmonents
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

const DigitalStrategy = () =>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 767 },items: 2},
        mobile: {breakpoint: { max: 767, min: 0 },items: 1}
    };
    const faqs = [
        {
            question: "What is digital strategy consulting?",
            answer: "Digital strategy consulting helps businesses plan and prioritize how digital channels, technology, content, customer experiences, and data should work together to achieve business goals."
        },
        {
            question: "What does CodeTrios include in its digital strategy consulting services?",
            answer: "CodeTrios provides audience research, competitor analysis, channel strategy, brand positioning, conversion planning, customer journey analysis, and performance measurement."
        },
        {
            question: "Who can benefit from digital strategy consulting?",
            answer: "Businesses launching new digital initiatives, improving an existing online presence, entering new markets, or looking to improve digital performance can benefit from strategic consulting."
        },
        {
            question: "Does CodeTrios provide digital strategy consulting in India?",
            answer: "Yes. CodeTrios provides digital strategy consulting services for businesses in India and can develop strategies around specific business, market, and customer requirements."
        },
        {
            question: "How can digital strategy consulting help a business?",
            answer: "Digital strategy consulting helps businesses identify the right digital channels, improve customer journeys, prioritize technology and marketing investments, increase conversion opportunities, and establish measurable goals for sustainable digital growth."
        },
        {
            question: "Can CodeTrios combine digital strategy with website and technology services?",
            answer: "Yes. CodeTrios can connect digital strategy with website design, UI/UX design, web development, ecommerce development, web application development, custom software development, SEO, GEO, and other digital services based on business requirements."
        }
    ]    
    const benefits = [
        "Strategy aligned with business objectives",
        "Data-informed decision making",
        "Clear digital growth roadmap",
        "Customer-focused digital experiences",
        "Integrated channel planning",
        "Measurable performance indicators",
        "Conversion-focused strategy",
        "Scalable long-term approach",
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
        {
            icon: <MdInsights />,
            title: "Digital Strategy Consulting",
            description:
                "Build data-driven digital strategies based on business goals, customer journeys, market research and performance insights.",
            link: "/digital-strategy-consulting",
            linkTitle: "Explore Digital Strategy Consulting",
        },
        {
            icon: <FaGlobeAmericas />,
            title: "Web Hosting",
            description:
                "Keep websites fast, secure and reliable with scalable web hosting infrastructure and performance-focused solutions.",
            link: "/web-hosting-services",
            linkTitle: "Explore Web Hosting Services",
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
            <SEO page="digital-strategy-consulting" />
            <SchemaGraph
                pageType="service"
                pageName="Digital Strategy Consulting Services"
                pageDescription="CodeTrios provides digital strategy consulting services in India, helping businesses develop customer-focused digital strategies, optimize channels, improve conversions, and measure digital performance."
                pageUrl="https://www.codetrios.com/digital-strategy-consulting"
                serviceName="Digital Strategy Consulting Services"
                serviceDescription="Digital strategy consulting services covering audience research, competitor analysis, channel strategy, brand positioning, customer journeys, conversion planning, and performance measurement."
                serviceType="Digital Strategy Consulting"
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
                        name: "Digital Strategy Consulting",
                        url: "https://www.codetrios.com/digital-strategy-consulting"
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
                                    <h1>Digital Strategy Consulting Services in India</h1>
                                    <p>CodeTrios is a digital strategy consulting company in India that helps businesses plan, prioritize, and improve their digital presence, customer journeys, marketing channels, conversion opportunities, and technology investments. Our strategy services combine audience research, competitor analysis, channel planning, customer experience, conversion strategy, analytics, and practical implementation roadmaps.</p>
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
                                    <img src={digitalImg} className='imgFull' alt='Digital strategy consulting services by CodeTrios' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Digital Strategy Consulting for Business Growth</h2>
                                    <p>Our digital strategy consulting process begins by understanding your business objectives, target audiences, market position, competitors, and existing digital channels. We then translate those insights into a practical strategy covering customer experience, content, search, marketing channels, conversion opportunities, and performance measurement.</p>
                                    <p>When strategy identifies website experience or conversion opportunities, our team can translate those recommendations into <Link to="/website-design-services" title="Website Design Services">website design services</Link> focused on usability, responsive experiences, clear messaging, and conversion-focused user journeys.</p>
                                    <p>For businesses that need to improve user journeys and digital experiences, our <Link to="/ui-ux-design-services" title="UI/UX Design Services">UI/UX design services</Link> turn customer research and journey insights into wireframes, prototypes, interfaces, and scalable design systems.</p>
                                    <p>Search visibility is another important part of a digital growth strategy. CodeTrios provides <Link to="/geo-seo-services" title="SEO and GEO Services">SEO and GEO services</Link> that help businesses improve traditional search visibility and increase their discoverability across AI-powered search experiences.</p>
                                    <p>Once the strategy and experience requirements are defined, businesses can implement them through our <Link to="/web-development-services" title="Web Development Services">web development services</Link> for scalable, secure, and performance-focused websites and digital platforms.</p>

                                    <p>Whether you are launching a new business, entering a new market, improving an existing digital presence, or looking for better marketing performance, CodeTrios develops strategies around your specific goals rather than applying a one-size-fits-all framework.</p>
                                    <p>Our recommendations are supported by audience research, competitor analysis, digital performance data, and customer journey insights. This allows businesses to prioritize the channels and improvements most likely to contribute to sustainable growth.</p>
                                    <h4>Our Digital Strategy Consulting Process</h4>
                                    <ul>
                                        <li><FiCheck className={Style.icon} /> <strong>Research & Discovery –</strong> We understand your business objectives, audience, market, competitors, existing digital presence, and growth opportunities.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Strategy & Planning –</strong> We develop a prioritized digital roadmap based on business goals, customer needs, available resources, and market opportunities. </li>
                                        <li><FiCheck className={Style.icon} /> <strong>Channel Strategy –</strong> We determine how search, content, social media, email, paid campaigns, websites, and other digital channels should work together.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Conversion Strategy –</strong> We identify opportunities to improve customer journeys, landing pages, calls to action, and conversion paths.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Measurement & Optimization –</strong> We define KPIs and use performance data to refine the strategy over time.</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild + " " + Style.buildStyle}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our Digital Strategy Expertise Includes</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaUsersViewfinder    /></span>
                                    <h3>Audience Research & Insights</h3>
                                    <p>We identify who your customers are, what they need, and where they spend their time online.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaChartBar    /></span>
                                    <h3>Competitor Analysis</h3>
                                    <p>Understand what top players in your industry are doing — and how to outperform them.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaChartBar    /></span>
                                    <h3>Digital Transformation Strategy</h3>
                                    <p>Businesses undergoing digital transformation can also combine strategy consulting with <Link to="/custom-software-solutions" title="Custom Software Development Services">custom software development services</Link> to automate workflows, integrate systems, and build technology around specific operational requirements.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaChartBar    /></span>
                                    <h3>Customer Journey Strategy</h3>
                                    <p>Map and optimize every customer touchpoint to create smoother experiences and increase engagement and conversions.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaDiagramProject    /></span>
                                    <h3>Channel Strategy & Optimization</h3>
                                    <p>A clear plan for where to invest your efforts — SEO, social media, paid ads, email, etc.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaBullhorn    /></span>
                                    <h3>Brand Positioning & Messaging</h3>
                                    <p>Define how your brand should speak, present itself, and differentiate in the market.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaFilterCircleDollar    /></span>
                                    <h3>Conversion Funnel Planning</h3>
                                    <p>Map user journeys from awareness to purchase to ensure more leads turn into customers.</p>
                                    <p>For online businesses, our <Link to="/ecommerce-development-services" title="Ecommerce Development Services">ecommerce development services</Link> can translate conversion strategy into optimized product discovery, checkout, payment, and customer experiences.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaChartLine    /></span>
                                    <h3>Performance Measurement & Analytics</h3>
                                    <p>Track KPIs, analyze performance dashboards, and refine campaigns for better ROI.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>   
                <Industries 
                    title="Digital Strategy Consulting for Different Industries"
                    subText="CodeTrios develops digital strategies around the specific customer journeys, market conditions, and business goals of different industries."
                />
                <section className={`${Style.whyChooseSection} ${Style.secBgView}`}>
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={Style.content}>
                                    <span className={Style.smallTitle}>WHY CHOOSE CODETRIOS</span>
                                    <h2 className={Style.title}>Strategy Focused on Business Outcomes</h2>
                                    <p>CodeTrios combines strategic thinking, digital experience, technology, analytics, and performance optimization to create practical strategies that businesses can execute and measure. Our approach focuses on clear priorities, meaningful customer experiences, and measurable business outcomes.</p>
                                    <p>Explore all <Link to="/services" title="CodeTrios Services">CodeTrios services</Link> to see how our strategy, design, development, software, ecommerce, hosting, and SEO/GEO capabilities work together.</p>
                                {benefits.map((benefit, index) => (
                                        <div className={Style.benefitItem} key={index}>
                                            <BsCheckCircle
                                                className={Style.icon}
                                            />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                    <Link to="/about-us" className={Style.btnStyle} title="Learn more about CodeTrios">About CodeTrios</Link>
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
                                <h2>Frequently Asked Questions About Digital Strategy Consulting</h2>
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

export default DigitalStrategy;