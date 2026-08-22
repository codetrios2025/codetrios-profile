import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import ServicesBanner from '../../assets/images/innerpage_banner.webp';
import webDesignImg from '../../assets/images/website-design.webp';
import webDevelopimg from '../../assets/images/web_development.webp';
import eCommerceImg from '../../assets/images/e-Commerce_img.webp';
import webAppImg from '../../assets/images/web_application.webp';
import designServicesImg from '../../assets/images/design_services.webp';
import technologyImg  from '../../assets/images/technology_solutions.webp';
import designStrategyImg  from '../../assets/images/digital_strategy.webp';
import hostingImg  from '../../assets/images/hosting.webp';
import geoImg  from '../../assets/images/geo-img.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
//Icon
import { BsArrowRight } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { FaPaintBrush, FaHandshake  } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdDesignServices, MdInsights  } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";
import { LuSearchCheck } from "react-icons/lu";
//Components
import Industries from './Industries.jsx';
import CATComponent from './CATComponent.jsx';
import Development from '../HomeRoute/Development.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
import CATButton from '../ServicesPages/CATButtons.jsx';

const ServicesPage = ()=>{
    const services = [
        {
            image: webDesignImg,
            imageAlt: "Professional website design services",
            icon: <FaPaintBrush />,
            title: "Website Design",
            description:
                "CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.",
            link: "/website-design-services",
            linkTitle: "Explore Website Design Services",
        },
        {
            image: webDevelopimg,
            imageAlt: "Custom web development services",
            icon: <IoCodeSlash />,
            title: "Web Development",
            description: "CodeTrios is a web development company in India helping businesses, startups, organizations, and growing brands build fast, secure, and scalable websites and web applications. We combine modern frontend and backend technologies, responsive development, performance optimization, and maintainable architecture to create digital platforms designed around real business requirements.",
            link: "/web-development-services",
            linkTitle: "Explore Web Development Services",
        },
        {
            image: eCommerceImg,
            imageAlt: "Ecommerce website development",
            icon: <BsCart3 />,
            title: "Ecommerce Development",
            description:
                "CodeTrios is an ecommerce development company in India helping businesses build secure, scalable, and conversion-focused online stores. We design and develop ecommerce websites around your products, customers, business model, and growth objectives, with a focus on usability, performance, mobile responsiveness, and reliable ecommerce functionality.",
            link: "/ecommerce-development-services",
            linkTitle: "Explore Ecommerce Development",
        },
        {
            image: webAppImg,
            imageAlt: "Custom web application development",
            icon: <FaGlobeAmericas />,
            title: "Web Application Development",
            description:
                "CodeTrios is a web application development company in India helping businesses and organizations build secure, scalable, and user-friendly web applications. We develop custom digital platforms that simplify business processes, connect systems, improve productivity, and provide reliable experiences for users across modern devices.",
            link: "/web-application-development",
            linkTitle: "Explore Web Application Development",
        },
        {
            image: designServicesImg,
            imageAlt: "UI UX design services",
            icon: <MdDesignServices />,
            title: "UI/UX Design",
            description:
                "CodeTrios is a UI/UX design company in India creating intuitive, responsive, and user-focused experiences for websites, web applications, SaaS platforms, and digital products. Our design process combines user research, information architecture, wireframing, prototyping, visual design, and usability to create digital experiences that are easy to understand and use.",
            link: "/ui-ux-design-services",
            linkTitle: "Explore UI UX Design Services",
        },
        {
            image: technologyImg,
            imageAlt: "Custom software development solutions",
            icon: <PiPlugsConnectedBold />,
            title: "Custom Software Development",
            description:
                "CodeTrios is a custom software development company in India helping businesses build secure, scalable, and high-performance software solutions tailored to their specific workflows and business goals. From business automation and enterprise applications to API integrations and software modernization, we create technology solutions designed for long-term growth.",
            link: "/custom-software-solutions",
            linkTitle: "Explore Custom Software Solutions",
        },
        {
            image: designStrategyImg,
            imageAlt: "Digital strategy consulting services",
            icon: <MdInsights />,
            title: "Digital Strategy Consulting",
            description:
                "CodeTrios provides digital strategy consulting to help businesses align their digital channels, customer journeys, technology, and growth goals. We use audience research, competitor analysis, channel planning, conversion strategy, and performance measurement to create practical digital roadmaps.",
            link: "/digital-strategy-consulting",
            linkTitle: "Explore Digital Strategy Consulting",
        },
        {
            image: hostingImg,
            imageAlt: "Reliable web hosting services",
            icon: <FaGlobeAmericas />,
            title: "Web Hosting",
            description:
                "CodeTrios provides secure and scalable web hosting services for business websites, ecommerce stores, web applications, and digital platforms. Our hosting services include server configuration, migration, security, performance optimization, backups, monitoring, and technical support.",
            link: "/web-hosting-services",
            linkTitle: "Explore Web Hosting Services",
        },
        {
            image: geoImg,
            imageAlt: "SEO and GEO search optimization services",
            icon: <LuSearchCheck />,
            title: "SEO & GEO Services",
            description:
                "CodeTrios provides SEO and GEO services that improve website discoverability across traditional search and AI-powered search experiences. Our work includes technical SEO, content optimization, structured data, entity signals, internal linking, and Generative Engine Optimization (GEO) for AI search experiences.",
            link: "/geo-seo-services",
            linkTitle: "Explore SEO & GEO Services",
        },
    ];
    const benefits = [
        "Solutions designed around your business goals",
        "Responsive and user-friendly digital experiences",
        "Modern and scalable development practices",
        "SEO-friendly website structure",
        "Performance-focused implementation",
        "Clear communication throughout the project",
    ];
    return(
        <>

        <SEO page="services" />
        <SchemaGraph
            pageType="website"
            pageName="Web Design & Development Services"
            pageDescription="CodeTrios is a web development and digital solutions company in India offering website design, web development, ecommerce development, web application development, UI/UX design, custom software development, digital strategy consulting, web hosting, and SEO & GEO services."
            pageUrl="https://www.codetrios.com/services"
            breadcrumbs={[
                {
                    name: "Home",
                    url: "https://www.codetrios.com/"
                },
                {
                    name: "Services",
                    url: "https://www.codetrios.com/services"
                }
            ]}
        />
        <div className={Style.innerPage + " " + Style.servicesPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>Web Development & Digital Solutions Services</h1>
                                <p>CodeTrios provides website design, web development, ecommerce development, web application development, UI/UX design, custom software development, digital strategy consulting, web hosting, and SEO & GEO services for businesses and organizations in India.</p>
                                <CATButton />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <section className={'servicesView ' + Style.commonPading + " " + Style.servicesSec}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.pageHead}>
                                <span className={Style.smallTitle} data-aos="fade-up" data-aos-delay="100">WHAT WE DO</span>
                                <h1 className={Style.title} data-aos="fade-up" data-aos-delay="150">Web Design & Development Services</h1>
                                <p className={Style.subContent}  data-aos="fade-up" data-aos-delay="200">CodeTrios is a web development and digital solutions company in India specializing in website design, web development, ecommerce development, web applications, UI/UX design, custom software, digital strategy, web hosting, and SEO & GEO services.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {services.map((item, index) =>(
                            <Col md={6} lg={4} key={index}>
                                <article className={Style.servicesBox} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                                    <figure>
                                        <img src={item.image} alt={item.imageAlt} loading="lazy" />
                                    </figure>
                                    <div className={Style.content}>
                                        <span className={Style.spanICon}>
                                            <span className={Style.icon}>
                                                {item.icon}
                                            </span>
                                        </span>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <Link to={item.link} title={item.linkTitle}>{item.linkTitle} <BsArrowRight className={Style.icon} /></Link>
                                    </div>
                                </article>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Industries title="Industries We Serve" />
            <Development title="Our Development" subTitle="Process" />
            <section className={`${Style.commonPading} ${Style.secBgView}`}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.pageHead}>
                                <span className={Style.smallTitle}>
                                    TECHNOLOGY EXPERTISE
                                </span>

                                <h2 className={Style.title}>
                                    Technologies We Use
                                </h2>

                                <p className={Style.subContent}>
                                    CodeTrios uses modern frontend, backend, database,
                                    cloud, CMS, AI, and design technologies to build
                                    scalable digital solutions based on each project's
                                    requirements.
                                </p>

                                <Link
                                    to="/technologies"
                                    className={Style.btnStyle}
                                    title="Explore CodeTrios technologies and development expertise"
                                >
                                    Explore Our Technologies
                                </Link>
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
                                <span className={Style.smallTitle}>WHY CODETRIOS</span>
                                <h2 className={Style.title}>Digital Solutions Built Around Your Goals</h2>
                                <p>CodeTrios is a web development and digital solutions company in India providing end-to-end digital services from strategy and UI/UX design through development, deployment, hosting, optimization, and ongoing technical support.</p>
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
                        <Col lg={6} className="mt-4 mt-lg-0" data-aos="fade-up">
                            <figure data-aos="fade-up" data-aos-delay="100">
                                <img src={WhyChooseImg} className='imgFull' alt='Why Choose CodeTrios?' width="1747" height="1334" />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>  
        <CATComponent />
        </>
    )
}

export default ServicesPage;