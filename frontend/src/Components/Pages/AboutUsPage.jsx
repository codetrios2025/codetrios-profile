import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import AboutBanner from '../../assets/images/innerpage_banner.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//Icon
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt } from "react-icons/tb";
import { FaServer, FaWordpress } from "react-icons/fa";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
//services Icon
import { FaPaintBrush    } from "react-icons/fa";
import { FaGlobeAmericas, FaDesktop, FaLaptopCode, FaPalette } from "react-icons/fa";
import { FaWandMagicSparkles, FaPenRuler } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { MdDevices, MdDashboardCustomize  } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { MdInsights, MdDesignServices  } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
//Components
import AboutUs from '../HomeRoute/About';
import Industries from './Industries.jsx';
import CATComponent from './CATComponent.jsx';
import CATButton from '../ServicesPages/CATButtons.jsx';
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
const AboutUsPage = ()=>{
    const breakpoint = useCarouselBreakpoint();
    const RelatedServicesSlide = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 3,},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
        mobile: {breakpoint: { max: 580, min: 0 },items: 1}
    };
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
            title: "AI SEO & GEO Services",
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
        <SEO page="about" />
        <SchemaGraph
            pageType="about"
            pageName="About CodeTrios"
            pageDescription="CodeTrios is a web development and digital solutions company in India providing website design, web development, ecommerce development, web application development, UI/UX design, custom software development, digital strategy consulting, web hosting, and SEO & GEO services."
            pageUrl="https://www.codetrios.com/about-us"
            breadcrumbs={[
                {
                    name: "Home",
                    url: "https://www.codetrios.com/"
                },
                {
                    name: "About Us",
                    url: "https://www.codetrios.com/about-us"
                }
            ]}
        />
        <div className={Style.innerPage + " " + Style.aboutPage + " " + Style.servicesDetail}>
            <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>About CodeTrios</h1>
                                <p>CodeTrios is a web development and digital solutions company in India helping businesses build, improve, and scale their digital presence. We provide website design, web development, ecommerce development, web application development, custom software development, UI/UX design, digital strategy consulting, web hosting, and SEO &amp; GEO services.</p>
                                <CATButton />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <AboutUs />
            <div className={`${Style.relatedSec} ${Style.commonPading} ${Style.secBgView}`}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title}>What Does CodeTrios Do?</h2>
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
            <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className={Style.title} data-aos="fade-up">What We Build</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className={Style.box} data-aos="fade-up" data-aos-delay="200">
                                <span className={Style.icon}><TbDeviceDesktopCode /></span>
                                <h3>Frontend Development that Converts</h3>
                                <p>Architecting responsive, fast UI/UX with modern stacks like React.js, JavaScript, HTML5, CSS3, and Bootstrap to maximize user engagement.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box} data-aos="fade-up" data-aos-delay="300">
                                <span className={Style.icon}><FaServer /></span>
                                <h3>Scalable & Secure Backend Solutions</h3>
                                <p>Building robust, high-performance architecture powered by Node.js, PHP, and MySQL for stable growth and reliable data handling.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box} data-aos="fade-up" data-aos-delay="300">
                                <span className={Style.icon}><FaWordpress /></span>
                                <h3>Enterprise WordPress & CMS Customisation</h3>
                                <p>Delivering powerful, bespoke platforms via custom themes, plugins, API integrations, and advanced customisation for any content need.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={Style.box} data-aos="fade-up" data-aos-delay="400">
                                <span className={Style.icon}><TbSeo /></span>
                                <h3>SEO & Performance First</h3>
                                <p>Every platform is built from the ground up for speed, search-visibility, and high engagement scores to ensure you rank and convert.</p>
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
                                <h2>Technology Expertise</h2>
                                <p>
                                    CodeTrios uses modern web development and digital technologies to build
                                    scalable websites, web applications, ecommerce platforms, and custom
                                    software solutions.
                                </p>

                                <p>
                                    Our technology expertise includes React, JavaScript, HTML5, CSS3,
                                    Node.js, PHP, Laravel, WordPress, Drupal, Strapi, MySQL, MongoDB,
                                    AWS, Google Cloud, and other modern development tools and platforms.
                                </p>

                                <Link to="/technologies" className={Style.btnStyle}>Explore Our Technology Expertise</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Industries title="Industries We Serve" />
            <div className={Style.aboutSec + " " + Style.whyUs}>
                <Container>
                    <Row>
                        <Col md={5}>
                            <figure data-aos="fade-right" data-aos-delay="100">
                                <img src={WhyChooseImg} className='imgFull' alt='Why Choose CodeTrios?' width="1747" height="1334" />
                            </figure>
                        </Col>
                        <Col md={7}>
                            <div className={Style.aboutContent} data-aos="fade-left" data-aos-delay="200">
                                <h2 className={Style.title}>Why Choose CodeTrios?</h2>
                               <ul>
                                    <li>
                                        <h4><RiLoopLeftLine className={Style.icon} /> Full-Cycle Delivery</h4>
                                        <p>We manage the project from initial planning and architecture, through development, launch, and ongoing support.</p>
                                    </li>
                                    <li>
                                        <h4><RiTeamLine className={Style.icon} /> Single Team, Multiple Disciplines </h4>
                                        <p>No need to juggle different vendors for frontend, backend, SEO, and hosting. Get complete end-to-end service from one trusted partner. </p>
                                    </li>
                                    <li>
                                        <h4><BiTargetLock className={Style.icon} /> Client-Focused, Detail-Oriented </h4>
                                        <p>We listen, we adapt, and we guarantee delivery on time and on budget. Your vision is our priority. </p>
                                    </li>
                                    <li>
                                        <h4><TbWorldBolt className={Style.icon} /> Future-Proof Solutions</h4>
                                        <p>Our commitment to clean code, modular design, and maintainability ensures your platform scales effortlessly with your business.</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        <CATComponent />
        </>
    )
}

export default AboutUsPage;