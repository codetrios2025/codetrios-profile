import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/technology_solutions.webp';
import { FiCheck } from "react-icons/fi";
import CATButton from './CATButtons.jsx';
import CATComponent from '../Pages/CATComponent.jsx';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//icon
import { MdSystemUpdateAlt , MdExtension , MdSpeed  } from "react-icons/md";
import { FaRobot, FaLaptopCode } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
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
import Development from '../HomeRoute/Development.jsx';
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
const TechnologySolutions = () =>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 767 },items: 2},
        mobile: {breakpoint: { max: 767, min: 0 },items: 1}
    };
    const faqs = [
        {
            question: "What is custom software development?",
            answer: "Custom software development involves designing and building software specifically around a business's workflows, users, requirements, integrations, and operational goals instead of relying entirely on off-the-shelf software."
        },
        {
            question: "What types of custom software does CodeTrios develop?",
            answer: "CodeTrios develops business applications, enterprise software, customer portals, dashboards, workflow systems, SaaS applications, API integrations, and other purpose-built digital solutions."
        },
        {
            question: "Can CodeTrios integrate custom software with existing systems?",
            answer: "Yes. Custom applications can be integrated with existing business systems, APIs, payment platforms, CRM systems, ERP platforms, databases, and other third-party services where required."
        },
        {
            question: "Can CodeTrios modernize legacy software?",
            answer: "Yes. Software modernization can include technology upgrades, architecture improvements, database modernization, performance improvements, and security enhancements."
        },
        {
            question: "How does CodeTrios approach custom software development?",
            answer: "Our process covers requirements discovery, architecture and planning, UI/UX, development, integrations, testing, deployment, and ongoing support."
        },
        {
            question: "What makes CodeTrios different from a software development company?",
            answer: "CodeTrios combines custom software development with web development, UI/UX design, ecommerce development, digital strategy, API integration, hosting, and SEO and GEO services. This allows businesses to work with one digital technology partner across multiple stages of their digital projects."
        },
        {
            question: "Where does CodeTrios provide custom software development services?",
            answer: "CodeTrios is a custom software development company in India serving businesses and organizations that need purpose-built applications, automation systems, integrations, enterprise software, and other digital solutions."
        }
    ]
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
            <SEO page="custom-software-solutions" />
            <SchemaGraph
                pageType="service"
                pageName="Custom Software Solutions"
                pageDescription="CodeTrios provides custom software development services in India, building business applications, automation systems, API integrations, enterprise software, and scalable digital solutions."
                pageUrl="https://www.codetrios.com/custom-software-solutions"
                serviceName="Custom Software Solutions"
                serviceDescription="Custom software development services for business applications, automation, API integrations, enterprise systems, software modernization, and scalable digital solutions."
                serviceType="Custom Software Development"
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
                        name: "Custom Software Solutions",
                        url: "https://www.codetrios.com/custom-software-solutions"
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
                                    <h1>Custom Software Development Company in India</h1>
                                    <p>CodeTrios is a custom software development company in India that builds secure, scalable, and high-performance software for businesses with specific operational and technology requirements. We develop business applications, enterprise software, workflow automation systems, API integrations, and modern digital solutions designed around your processes, users, and long-term business goals.</p>
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
                                    <img src={webImage} className='imgFull' alt='Custom software development solutions' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}>Custom Software Development Services for Business Growth</h2>
                                    <p>
                                        Our technology consulting and digital transformation services help businesses
                                        identify opportunities to improve efficiency, reduce operational complexity,
                                        and build scalable digital infrastructure. For businesses that need
                                        browser-based systems, our <Link to="/web-application-development"
                                        title="Web Application Development Services">web application development</Link> approach helps create secure platforms, dashboards, portals, and workflow
                                        applications. We combine modern technologies, robust development practices,
                                        automation software services, and strategic planning to create secure and
                                        high-performance systems designed for evolving business needs.
                                    </p>
                                    <p>
                                        Whether you need a business application, enterprise software, workflow
                                        automation, API integration, cloud-connected systems, or modernization of an
                                        existing application, our team works closely with your business and technical
                                        stakeholders to understand the requirements and design the right solution.
                                        Where user experience is critical, our <Link to="/ui-ux-design-services"
                                        title="UI/UX Design Services">UI/UX design services</Link> help define
                                        intuitive interfaces, user flows, dashboards, and reusable design systems
                                        before development.
                                    </p>
                                    <p>We also design modular software architectures that make applications easier to maintain, extend, integrate, and scale as business requirements evolve.</p>
                                    <h4>Our Approach to Custom Software Development</h4>
                                    <ul>
                                        <li><FiCheck className={Style.icon} /> <strong>Business-Focused Development – </strong> We build around your actual workflows, users, processes, and business objectives.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Secure Architecture – </strong> We consider application security, data protection, authentication, authorization, and reliable system design.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Scalable Technology – </strong> We design systems that can grow with your users, data, integrations, and operational requirements.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Process Automation – </strong> We identify repetitive processes that can be streamlined through software and workflow automation.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Software Modernization – </strong> We improve legacy applications and technology architectures to support better performance, security, and maintainability.</li>
                                        <li><FiCheck className={Style.icon} /> <strong>Long-Term Maintainability – </strong> We build software that can be maintained, extended, and improved as your business evolves.</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " + Style.weBuild + " " + Style.techStyle}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our Custom Software Development Services</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdSystemUpdateAlt  /></span>
                                            <h3>Business Software Development</h3>
                                            <p>We build custom business applications that simplify operations, organize information, and help teams manage their day-to-day workflows more efficiently.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdSystemUpdateAlt  /></span>
                                            <h3>What We Build</h3>
                                            <ul>
                                                <li>Internal business applications</li>
                                                <li>Customer portals</li>
                                                <li>Management systems</li>
                                                <li>Workflow applications</li>
                                                <li>Custom dashboards</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaRobot  /></span>
                                            <h3>Business Automation & AI Integration</h3>
                                            <p>Automate repetitive processes and connect intelligent technologies with your existing business systems to improve productivity and reduce manual work.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaRobot  /></span>
                                            <h3>Automation Solutions</h3>
                                            <ul>
                                                <li>Workflow automation</li>
                                                <li>AI-powered business tools</li>
                                                <li>Automated notifications</li>
                                                <li>Document and data processing</li>
                                                <li>Business process automation</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaLaptopCode /></span>
                                            <h3>Enterprise Software Development</h3>
                                            <p>Build scalable enterprise applications that support complex workflows, teams, integrations, data, and business operations.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}>
                                                <FaLaptopCode />
                                            </span>
                                            <h3>Enterprise Solutions</h3>
                                            <ul>
                                                <li>Enterprise applications</li>
                                                <li>Business management systems</li>
                                                <li>Internal platforms</li>
                                                <li>Data-driven dashboards</li>
                                                <li>System integrations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><TbApi  /></span>
                                            <h3>API Development & Integration</h3>
                                            <p>
                                                Connect your applications and third-party platforms through secure and
                                                reliable APIs designed for efficient data exchange and system integration.
                                                Our <Link to="/web-development-services"
                                                title="Web Development Services">web development services</Link> can also
                                                support the frontend and backend systems that consume these APIs, creating
                                                connected digital platforms for business operations.
                                            </p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><TbApi  /></span>
                                            <h3>API Services</h3>
                                            <ul>
                                                <li>REST API development</li>
                                                <li>GraphQL API development</li>
                                                <li>Third-party API integration</li>
                                                <li>Payment gateway integration</li>
                                                <li>CRM and ERP integrations</li>
                                            </ul>
                                            <p>
                                                For businesses connecting custom software with online stores, our <Link to="/ecommerce-development-services" title="Ecommerce Development Services">ecommerce development services</Link> can integrate storefronts, payments, products, orders, and business systems into a connected digital workflow. </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdExtension  /></span>
                                            <h3>Software Modernization</h3>
                                            <p>Modernize outdated software and legacy applications to improve performance, security, maintainability, and scalability.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdExtension  /></span>
                                            <h3>Modernization Services</h3>
                                            <ul>
                                                <li>Legacy application modernization</li>
                                                <li>Technology upgrades</li>
                                                <li>Database modernization</li>
                                                <li>Architecture improvements</li>
                                                <li>Security and performance improvements</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaLaptopCode  /></span>
                                            <h3>Custom Application Development</h3>
                                            <p>Develop purpose-built applications around your specific business requirements, workflows, users, and operational needs.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaLaptopCode  /></span>
                                            <h3>Application Solutions</h3>
                                            <ul>
                                                <li>Customer portals</li>
                                                <li>Business dashboards</li>
                                                <li>SaaS applications</li>
                                                <li>Workflow management systems</li>
                                                <li>Enterprise applications</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>  
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdSpeed  /></span>
                                            <h3>Performance & Scalability</h3>
                                            <p>Optimize software systems to handle growing traffic, users, data, and business operations while maintaining reliable performance.</p>                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdSpeed  /></span>
                                            <h3>Performance Services</h3>
                                            <ul>
                                                <li>Code optimization</li>
                                                <li>Database optimization</li>
                                                <li>Caching strategies</li>
                                                <li>Server optimization</li>
                                                <li>Application monitoring</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>       
                        </Row>
                    </Container>
                </div>
                <Industries title="Custom Software Development for Different Industries" subText="CodeTrios develops custom software solutions for businesses across industries including healthcare, education, real estate, ecommerce, hospitality, manufacturing, corporate services, and startups." />
                <Development title="Our Custom Software Development" subTitle="Process" />
                <section className={`${Style.commonPading} ${Style.weBuild} `}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={`${Style.centerHead} ${Style.bottomNoSpace}`}>
                                    <h2>Deployment, Hosting & Ongoing Support</h2>
                                    <p>
                                        After development and testing, applications need reliable infrastructure to remain available and performant. CodeTrios also provides <Link to="/web-hosting-services" title="Web Hosting Services">web hosting services</Link> for businesses that need secure, scalable, and performance-focused hosting for their websites and applications.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={`${Style.commonPading} ${Style.weBuild} ${Style.secBgView}`}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.centerHead}>
                                    <h2>What Does CodeTrios Build?</h2>
                                    <p>
                                        CodeTrios builds custom digital systems for businesses
                                        that require functionality beyond standard software
                                        products.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Business Applications</h3>
                                    <p>
                                        Custom applications for internal operations,
                                        management, workflows, and business processes.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Customer Portals</h3>
                                    <p>
                                        Secure portals for customers, partners, employees,
                                        and other users.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>SaaS Platforms</h3>
                                    <p>
                                        Scalable browser-based software platforms with
                                        accounts, dashboards, workflows, and integrations.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Enterprise Applications</h3>
                                    <p>
                                        Software systems supporting complex organizational
                                        workflows, data, permissions, and integrations.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>Workflow Automation</h3>
                                    <p>
                                        Software that reduces repetitive manual processes
                                        and improves operational efficiency.
                                    </p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className={Style.box}>
                                    <h3>API-Connected Systems</h3>
                                    <p>
                                        Applications that connect CRMs, ERPs, payment systems,
                                        databases, ecommerce platforms, and other services.
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
                                    <h2 className={Style.title}>Why Businesses Choose CodeTrios for Custom Software Development</h2>
                                    <p>CodeTrios works with businesses that need software tailored to their workflows, users, integrations, and operational requirements. Our development approach combines business analysis, UI/UX design, software development, API integration, testing, deployment, and ongoing support.</p>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Business-Focused Development</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Scalable Architecture</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Security First</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Performance Optimization</span>
                                    </div>
                                    <div className={Style.benefitItem}>
                                        <BsCheckCircle className={Style.icon}/>
                                        <span>Long-Term Support</span>
                                    </div>
                                    <Link to="/about-us" className={Style.btnStyle} title="Learn more about CodeTrios">Learn More</Link>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <figure data-aos="fade-up" data-aos-delay="100">
                                    <img src={WhyChooseImg} className='imgFull' alt='Why Choose CodeTrios for custom software development?' width="1747" height="1334" />
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
                                <h2>Frequently Asked Questions About Custom Software Development</h2>
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

export default TechnologySolutions;