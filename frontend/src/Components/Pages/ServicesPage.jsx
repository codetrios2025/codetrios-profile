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
import SEO from '../SEO/webSiteMeta.jsx';
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
                "Digital success doesn’t happen by accident—it comes from a clear, data-driven strategy built around your business goals. At CodeTrios, we provide strategic digital solutions as part of our digital strategy consulting services India, helping businesses navigate the evolving digital landscape with actionable insights, structured plans, and performance-focused frameworks. As one of the emerging business strategy consulting firms India, we analyze your audience, market, competitors, and customer journey to develop strategies that create meaningful and measurable business outcomes.",
            link: "/digital-strategy-consulting",
            linkTitle: "Explore Digital Strategy Consulting",
        },
        {
            image: hostingImg,
            imageAlt: "Reliable web hosting services",
            icon: <FaGlobeAmericas />,
            title: "Web Hosting",
            description:
                "Your website’s performance, security, and reliability depend heavily on the quality of its hosting infrastructure. At CodeTrios, we provide secure, high-performance, and scalable web hosting services in India designed to keep your website fast, stable, and accessible around the clock. Recognized as a best web hosting company India, our solutions are built to deliver a smooth user experience while supporting the performance and growth of your digital presence.",
            link: "/web-hosting-services",
            linkTitle: "Explore Web Hosting Services",
        },
        {
            image: geoImg,
            imageAlt: "SEO and GEO search optimization services",
            icon: <LuSearchCheck />,
            title: "SEO & GEO Services",
            description:
                "CodeTrios helps businesses increase their visibility across traditional search engines and AI-powered platforms through AI Search Engine Optimization, Generative Engine Optimization (GEO), and LLM Optimization Services. We optimize your website, content, and digital authority so your business becomes the trusted answer in Google Search, AI Overviews, ChatGPT, Gemini, Claude, Perplexity, and other AI-driven search experiences.",
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
        <div className={Style.innerPage + " " + Style.servicesPage}>
            <div className={Style.innerBanner}>
                <img src={ServicesBanner} alt='CodeTrios web design and development services' />
            </div>
            <section className={'servicesView ' + Style.commonPading + " " + Style.servicesSec}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.pageHead}>
                                <span className={Style.smallTitle} data-aos="fade-up" data-aos-delay="100">WHAT WE DO</span>
                                <h1 className={Style.title} data-aos="fade-up" data-aos-delay="150">Web Design & Development Services</h1>
                                <p className={Style.subContent}  data-aos="fade-up" data-aos-delay="200">CodeTrios provides web design, web development, ecommerce, web application, UI/UX, custom software, SEO and digital solutions designed to help businesses build a stronger digital presence and grow online.</p>
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
                                        <Link to={item.link} title={item.linkTitle}>Read More <BsArrowRight className={Style.icon} /></Link>
                                    </div>
                                </article>
                            </Col>
                        ))}
                        {/* <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="200">
                                <figure>
                                    <img src={webDesignImg} alt="Professional website design and development" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><FaPaintBrush className={Style.icon} /></span>
                                    <h2>Website Design</h2>
                                    <p>We are a leading web design company in India, providing professional, creative, and result-driven website design services in India for businesses, startups, brands, and organizations. As a best website design company in India, we combine innovative design, intuitive user experience, high performance, and conversion-focused strategies to create websites that help businesses grow online.</p>
                                    <Link to="/website-design-services" title='website design services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="300">
                                <figure>
                                    <img src={webDevelopimg} alt="Custom web development services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><IoCodeSlash className={Style.icon} /></span>
                                    <h2>Web Development</h2>
                                    <p>At CodeTrios, we are a professional website development company delivering high-performance, scalable, secure, and SEO-friendly digital solutions for businesses of all sizes. Our website development services are designed to create fast, reliable, and user-focused websites that accurately represent your brand and provide an exceptional experience across all devices.</p>
                                    <Link to="/web-development-services" title='web development services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="400">
                                <figure>
                                    <img src={eCommerceImg} alt="Ecommerce website development" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><BsCart3 className={Style.icon} /></span>
                                    <h2>Ecommerce Development</h2>
                                    <p>Taking your business online requires more than just a website—it requires a strategic, high-performance eCommerce ecosystem designed to enhance user experience, streamline operations, and drive sales. At CodeTrios, we provide comprehensive eCommerce development services and are recognized for delivering the best ecommerce development services tailored to modern business needs. As the best ecommerce development company in India, we specialize in building robust, secure, scalable, and conversion-focused online stores designed around your business model, products, and customer behavior.</p>
                                    <Link to="/ecommerce-development-services" title='ecommerce development services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="500">
                                <figure>
                                    <img src={webAppImg} alt="web application development" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><FaGlobeAmericas className={Style.icon} /></span>
                                    <h2>Web Application Development</h2>
                                    <p>At CodeTrios, we build powerful, scalable, and secure web applications designed to streamline business operations, improve productivity, and deliver exceptional user experiences. Our web application development solutions are tailored to your specific business requirements, helping you transform complex processes into fast, intuitive, and easy-to-use digital platforms.</p>
                                    <Link to="/web-application-development" title='web application development'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="600">
                                <figure>
                                    <img src={designServicesImg} alt="UI UX design services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><MdDesignServices className={Style.icon} /></span>
                                    <h2>UI/UX Design</h2>
                                    <p>At CodeTrios, we believe design is the foundation of a strong digital presence. As a user experience design company, our creative team combines strategy, aesthetics, usability, and technology to create digital experiences that reflect your brand identity while delivering meaningful results. Every visual element is designed with a clear purpose—to engage users, communicate your message, guide user behavior, and strengthen your brand.</p>
                                    <Link to="/ui-ux-design-services" title='ui ux design services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="700">
                                <figure>
                                    <img src={technologyImg} alt="custom software solutions" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><PiPlugsConnectedBold className={Style.icon} /></span>
                                    <h2>Custom Software Development</h2>
                                    <p>Technology is evolving faster than ever, and businesses that adapt early can gain a significant competitive advantage. As a Top Custom software development services company, CodeTrios helps organizations modernize, automate, and scale their operations through powerful, future-ready technology solutions. From system upgrades and Custom software modernization development services to custom software applications, intelligent automation, and technology architecture planning, we deliver solutions tailored to your workflows, business objectives, and long-term growth goals.</p>
                                    <Link to="/custom-software-solutions" title='custom software solutions'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="200">
                                <figure>
                                    <img src={designStrategyImg} alt="digital strategy consulting" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><MdInsights  className={Style.icon} /></span>
                                    <h2>Digital Strategy Consulting</h2>
                                    <p>Digital success doesn’t happen by accident—it comes from a clear, data-driven strategy built around your business goals. At CodeTrios, we provide strategic digital solutions as part of our digital strategy consulting services India, helping businesses navigate the evolving digital landscape with actionable insights, structured plans, and performance-focused frameworks. As one of the emerging business strategy consulting firms India, we analyze your audience, market, competitors, and customer journey to develop strategies that create meaningful and measurable business outcomes.</p>
                                    <Link to="/digital-strategy-consulting" title='digital strategy consulting'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="200">
                                <figure>
                                    <img src={hostingImg} alt="web hosting services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><MdInsights  className={Style.icon} /></span>
                                    <h2>Web Hosting</h2>
                                    <p>Your website’s performance, security, and reliability depend heavily on the quality of its hosting infrastructure. At CodeTrios, we provide secure, high-performance, and scalable web hosting services in India designed to keep your website fast, stable, and accessible around the clock. Recognized as a best web hosting company India, our solutions are built to deliver a smooth user experience while supporting the performance and growth of your digital presence.</p>
                                    <Link to="/web-hosting-services" title='web hosting services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.servicesBox} data-aos="fade-up" data-aos-delay="200">
                                <figure>
                                    <img src={geoImg} alt="geo seo services" />
                                </figure>
                                <div className={Style.content}>
                                    <span className={Style.spanICon}><MdInsights  className={Style.icon} /></span>
                                    <h2>GEO & SEO Services</h2>
                                    <p>CodeTrios helps businesses increase their visibility across traditional search engines and AI-powered platforms through AI Search Engine Optimization, Generative Engine Optimization (GEO), and LLM Optimization Services. We optimize your website, content, and digital authority so your business becomes the trusted answer in Google Search, AI Overviews, ChatGPT, Gemini, Claude, Perplexity, and other AI-driven search experiences.</p>
                                    <Link to="/geo-seo-services" title='geo seo services'>Read More <BsArrowRight className={Style.icon} /></Link>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
            <Industries />
            <section className={`${Style.whyChooseSection}`}>
                <Container>
                    <Row>
                        <Col lg={6} data-aos="fade-up">
                            <div className={Style.content}>
                                <span className={Style.smallTitle}>WHY CODETRIOS</span>
                                <h2 className={Style.title}>Digital Solutions Built Around Your Goals</h2>
                                <p>We don't believe in one-size-fits-all digital solutions. We understand your requirements, recommend the right approach and build experiences that are useful for your customers and practical for your business.</p>
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
                        <Col lg={6} className="mt-4 mt-lg-0" data-aos="fade-up">
                            <figure data-aos="fade-up" data-aos-delay="100">
                                <img src={WhyChooseImg} className='imgFull' alt='Why Choose CodeTrios?' width="1747" height="1334" />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Development />
        </div>  
        <CATComponent />
        </>
    )
}

export default ServicesPage;