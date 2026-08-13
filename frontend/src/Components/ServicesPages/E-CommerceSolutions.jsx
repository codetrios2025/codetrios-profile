import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/e-Commerce_img.webp';
import { TbDeviceDesktopCode, TbSeo, TbWorldBolt } from "react-icons/tb";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import VisionComponent from '../Pages/VisionCode';

//icon
import { FaStore, FaBoxes , FaServer, FaWordpress, FaTags } from "react-icons/fa";
import { MdPhoneIphone, MdSpeed  } from "react-icons/md";
import SEO from '../Common/webSiteMeta.jsx';

const EcommerceSolutions = () =>{

    return(
        <>
            <SEO page="ecommerce-development-services" />
            <div className={Style.innerPage + " " + Style.servicesDetail}>
                <div className={Style.innerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.content}>
                                    <h1>E-Commerce Solutions</h1>
                                    <p>Taking your business online requires more than just a website—it requires a strategic, high-performance eCommerce ecosystem designed to enhance user experience, streamline operations, and drive sales. At CodeTrios, we provide comprehensive eCommerce development services and are recognized for delivering the best ecommerce development services tailored to modern business needs. As the best ecommerce development company in India, we specialize in building robust, secure, scalable, and conversion-focused online stores designed around your business model, products, and customer behavior.</p>
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
                                    <img src={webImage} className='imgFull' alt='' width="1747" height="1334" />
                                </figure>
                            </Col>
                            <Col md={7}>
                                <div className={Style.aboutContent}>
                                    <h2 className={Style.title}> E-Commerce Development Services – Complete Online Store Setup & Growth</h2>
                                    <p>Whether you are launching a new online store, migrating from an existing platform, or upgrading your current eCommerce website, our team creates seamless digital shopping experiences through responsive ecommerce website design that is fast, intuitive, mobile-friendly, and optimized for conversions. From custom storefront designs and product catalogs to secure payment gateways and advanced integrations, we build every component with performance and usability in mind.</p>
                                    <p>Our eCommerce website development services include custom eCommerce development, responsive storefront design, shopping cart and checkout solutions, payment gateway integration, inventory management, order management, customer accounts, third-party API integrations, and performance optimization. We also provide best ecommerce design and development services that ensure your store is visually appealing, highly functional, and conversion-driven. We work with modern technologies and popular eCommerce platforms to deliver flexible solutions, including WooCommerce ecommerce development, Shopify ecommerce development, and Magento ecommerce development, supporting a wide range of business requirements.</p>
                                    <p>As an experienced eCommerce development company, CodeTrios focuses on creating online stores that are easy to manage, secure for customers, and scalable as your business grows. Our development approach ensures your eCommerce platform performs reliably across desktops, tablets, and smartphones while providing a consistent shopping experience across every customer touchpoint. We also deliver complete online ecommerce business solutions that help businesses establish, manage, and scale their digital presence effectively.</p>
                                    <p>From strategy and UI/UX design to development, testing, deployment, SEO readiness, and ongoing optimization, CodeTrios delivers end-to-end eCommerce solutions built to improve customer engagement, streamline operations, increase conversions, and support long-term online business growth.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"boxHeight " + Style.commonPading + " " +Style.weBuild}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>Our E-Commerce Expertise Includes</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaStore  /></span>
                                    <h3>Custom Store Setup</h3>
                                    <p>End-to-end ecommerce development with personalized layouts, product structures, and branded interfaces tailored to your industry and audience.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaServer  /></span>
                                    <h3>Payment Gateway Integration </h3>
                                    <p>Secure checkout experiences powered by trusted gateways like Razorpay, Stripe, PayPal, and more — offering multiple currencies and payment modes.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.box}>
                                    <span className={Style.icon}><FaBoxes  /></span>
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
                                    <span className={Style.icon}><FaTags   /></span>
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
                {/* <div className={"boxHeight " + Style.commonPading + " " + Style.buildStyle}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className={Style.title}>What We Offer</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaStore  /></span>
                                            <h3>Custom Store Design & Setup</h3>
                                            <p>We build fully customized e-commerce stores designed around your brand identity and business needs.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaStore  /></span>
                                            <h3>Our services include:</h3>
                                            <ul>
                                                <li>Platform selection (Shopify, WooCommerce, Magento, Headless Commerce, Custom Build)</li>
                                                <li>Custom homepage, category, and product page layouts</li>
                                                <li>Conversion-driven structure and user-friendly navigation</li>
                                                <li>Branded UI elements for a cohesive shopping experience</li>
                                                <li>Customer account setup, wishlist, and search functionality</li>
                                            </ul>
                                            <p>Your store not only looks impressive but is also built to convert.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaServer  /></span>
                                            <h3>Payment Gateway Integration</h3>
                                            <p>We ensure your customers enjoy a smooth, secure, and trustworthy checkout process.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaServer  /></span>
                                            <h3>Features include:</h3>
                                            <ul>
                                                <li>Multiple payment modes (UPI, Cards, Wallets, COD, Net Banking)</li>
                                                <li>Multi-currency support for global stores</li>
                                                <li>PCI-DSS compliance and encrypted transactions</li>
                                                <li>One-click checkout options</li>
                                                <li>Refunds and transaction tracking setup</li>
                                            </ul>
                                            <p>This makes your store safe, reliable, and customer-friendly.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaBoxes  /></span>
                                            <h3>Inventory & Order Management</h3>
                                            <p>Managing stock and orders becomes effortless with our integrated dashboards.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaBoxes  /></span>
                                            <h3>You get:</h3>
                                            <ul>
                                                <li>Product and category management</li>
                                                <li>Stock level tracking with alerts</li>
                                                <li>Order status workflows (processing, shipped, delivered, return)</li>
                                                <li>Bulk import/export of product data</li>
                                                <li>Automated email notifications for customers</li>
                                            </ul>
                                            <p>Designed for smooth operations whether you have 50 products or 50,000.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdPhoneIphone  /></span>
                                            <h3>Mobile-Optimized Experience</h3>
                                            <p>Since most online shopping happens on mobile.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdPhoneIphone  /></span>
                                            <h3>We build stores that are:</h3>
                                            <ul>
                                                <li>Lightning fast on smartphones</li>
                                                <li>Fully responsive with adaptive layouts</li>
                                                <li>Touch-friendly and easy to navigate</li>
                                                <li>Optimized with compressed images and minimized scripts</li>
                                                <li>Enhanced with mobile-specific UI patterns (sticky cart, quick add, swipe galleries)</li>
                                            </ul>
                                            <p>A mobile-friendly store directly increases conversions and revenue.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><FaTags  /></span>
                                            <h3>Third-Party API Integration</h3>
                                            <p>We connect your store with essential tools to automate and scale. </p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><FaTags  /></span>
                                            <h3>Integrations include:</h3>
                                            <ul>
                                                <li>Logistics & shipping APIs (Shiprocket, Delhivery, DHL, Blue Dart)</li>
                                                <li>CRM and ERP systems</li>
                                                <li>Marketing tools (Mailchimp, HubSpot, Klaviyo)</li>
                                                <li>Analytics platforms (Google Analytics 4, Tag Manager, Meta Pixels)</li>
                                                <li>POS and billing systems</li>
                                            </ul>
                                            <p>These integrations enhance workflows, reporting, and customer experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={Style.buildElem}>
                                    <div className={Style.content}>
                                        <div className={Style.flipFront}>
                                            <span className={Style.icon}><MdSpeed  /></span>
                                            <h3>Performance Optimization</h3>
                                            <p>A fast store leads to higher sales and better rankings — we ensure peak performance.</p>
                                        </div>
                                        <div className={Style.flipBack}>
                                            <span className={Style.icon}><MdSpeed  /></span>
                                            <h3>Optimizations include:</h3>
                                            <ul>
                                                <li>Faster load times with caching and minification</li>
                                                <li>Image compression and responsive formats</li>
                                                <li>CDN setup for global delivery</li>
                                                <li>Database and query optimization</li>
                                                <li>Core Web Vitals improvements</li>
                                                <li>SEO enhancement for product visibility</li>
                                            </ul>
                                            <p>Your store becomes faster, smoother, and more search-engine friendly.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div> */}
                {/* <div className={Style.whoAreSec}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={Style.box}>
                                    <h2 className={Style.title}>Why Choose Our E-Commerce Development? </h2>
                                    <p>We understand that every brand is unique — and so is its e-commerce journey. Our solutions combine elegant design, powerful functionality, and scalability to help your store grow with your business. </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div> */}
                
                <VisionComponent />
            </div>
        </>
    )
}

export default EcommerceSolutions;