import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import technologiesBanner from '../../assets/images/techBanner.webp';
import { Link } from 'react-router-dom';
//logo icon
import HTML from '../../assets/images/icon/html_logo.webp';
import css from '../../assets/images/icon/css_logo.webp';
import js from '../../assets/images/icon/js_logo.webp';
import bootstrap from '../../assets/images/icon/bootstrap_logo.webp';
import vue from '../../assets/images/icon/vue_logo.webp';
import express from '../../assets/images/icon/express_logo.webp';
import reactVite from '../../assets/images/icon/reactVite_logo.webp';
import reactNative from '../../assets/images/icon/react_logo.webp';

import php from '../../assets/images/icon/php_logo.webp';
import laravel from '../../assets/images/icon/laravel_logo.webp';
import wordpress from '../../assets/images/icon/wordpress_logo.webp';
import drupal from '../../assets/images/icon/drupal_icon.webp';
import node from '../../assets/images/icon/node_logo.webp';
import paython from '../../assets/images/icon/paython_logo.webp';
import strapi from '../../assets/images/icon/strapi_logo.webp';
import zframe from '../../assets/images/icon/zframe_logo.webp';

import mysql from '../../assets/images/icon/mysql_logo.webp';
import sql from '../../assets/images/icon/sql_logo.webp';
import monogoDB from '../../assets/images/icon/monogodb_logo.webp';
import cloudSql from '../../assets/images/icon/cloud-sql_logo.webp';

import figma from '../../assets/images/icon/figma_logo.webp';
import adobeXD from '../../assets/images/icon/Adobe-XD_logo.webp';
import photoshop from '../../assets/images/icon/ps_logo.webp';
import Illustrator from '../../assets/images/icon/Illustrator_logo.webp';
import corelDraw from '../../assets/images/icon/CorelDRAW_logo.webp';
import canva from '../../assets/images/icon/canva_logo.webp';

//Animation logo
import gsap from '../../assets/images/icon/gsap_logo.webp';
import three from '../../assets/images/icon/three_logo.webp';
import anime from '../../assets/images/icon/anime_logo.webp';
import lottie from '../../assets/images/icon/lottie_logo.webp';
import aos_logo from '../../assets/images/icon/aos_logo.webp';

import VisionComponent from './VisionCode';
const TechnologiesPage = ()=>{

    return(
        <>
        <div className={Style.innerPage + " " + Style.techPage}>
            <div className={Style.innerBanner}>
                <img src={technologiesBanner} />
            </div>
            <div className={Style.ourPlatForm}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.boxContainer}>
                                <h4 data-aos="fade-up">FRONTEND</h4>
                                <div className={Style.boxElem} data-aos="fade-up" data-aos-delay="200">
                                    <div className={Style.leftArea}>
                                        <h5>Front-End Development</h5>
                                        <p>We craft high-performance, interactive, and visually stunning front-end experiences using modern JavaScript frameworks and UI technologies. Our focus is on building interfaces that are fast, responsive, accessible, and aligned with your brand identity. With pixel-perfect precision and smooth user flows, we ensure your customers enjoy an intuitive and seamless digital experience across all devices.</p>
                                    </div>
                                    <div className={Style.rightArea}>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={reactVite} alt='' />
                                            </figure>
                                            <h6>React + Vite</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={HTML} alt='' />
                                            </figure>
                                            <h6>HTML</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={css} alt='' />
                                            </figure>
                                            <h6>CSS</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={js} alt='' />
                                            </figure>
                                            <h6>JavaScript</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={bootstrap} alt='' />
                                            </figure>
                                            <h6>Bootstrap</h6>
                                        </div>
                                        
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={vue} alt='' />
                                            </figure>
                                            <h6>Vue</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={reactNative} alt='' />
                                            </figure>
                                            <h6>React</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={express} alt='' />
                                            </figure>
                                            <h6>Express.js</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.boxContainer}>
                                <h4 data-aos="fade-up">BACKEND</h4>
                                <div className={Style.boxElem} data-aos="fade-up" data-aos-delay="200">
                                    <div className={Style.leftArea}>
                                        <h5>Back-End Development</h5>
                                        <p>We deliver secure, scalable, and high-performance backend systems designed to handle complex business logic, heavy loads, and real-time interactions. Our backend architecture ensures speed, reliability, and seamless data processing to support your web and mobile applications.</p>
                                    </div>
                                    <div className={Style.rightArea}>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={php} alt='' />
                                            </figure>
                                            <h6>PHP</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={laravel} alt='' />
                                            </figure>
                                            <h6>Laravel</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={drupal} alt='' />
                                            </figure>
                                            <h6>Drupal</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={node} alt='' />
                                            </figure>
                                            <h6>Node.js</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={wordpress} alt='' />
                                            </figure>
                                            <h6>Wordpress</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={strapi} alt='' />
                                            </figure>
                                            <h6>Strapi</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={paython} alt='' />
                                            </figure>
                                            <h6>Paython</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={zframe} alt='' />
                                            </figure>
                                            <h6>Zend Framework</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.boxContainer}>
                                <h4 data-aos="fade-up">Designing</h4>
                                <div className={Style.boxElem} data-aos="fade-up" data-aos-delay="200">
                                    <div className={Style.leftArea}>
                                        <h5>Designing Development</h5>
                                        <p>We combine creativity, strategy, and UX principles to craft modern, user-friendly design systems. Our design approach ensures your brand stands out visually while offering a seamless and engaging experience across all platforms.</p>
                                    </div>
                                    <div className={Style.rightArea}>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={figma} alt='' />
                                            </figure>
                                            <h6>Figma</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={adobeXD} alt='' />
                                            </figure>
                                            <h6>AdobeXD</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={Illustrator} alt='' />
                                            </figure>
                                            <h6>Illustrator</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={photoshop} alt='' />
                                            </figure>
                                            <h6>Photoshop</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={corelDraw} alt='' />
                                            </figure>
                                            <h6>CorelDraw</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={canva} alt='' />
                                            </figure>
                                            <h6>Canva</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.boxContainer}>
                                <h4 data-aos="fade-up">Animation & Motion</h4>
                                <div className={Style.boxElem} data-aos="fade-up" data-aos-delay="200">
                                    <div className={Style.leftArea}>
                                        <h5>Animation & Motion Development</h5>
                                        <p>We enhance digital experiences with smooth, engaging, and visually appealing animations. From micro-interactions to full-scale motion graphics, our team uses advanced animation frameworks to bring interfaces and brand stories to life.</p>
                                    </div>
                                    <div className={Style.rightArea}>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={gsap} alt='' />
                                            </figure>
                                            <h6>GSAP</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={three} alt='' />
                                            </figure>
                                            <h6>Three.js</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={lottie} alt='' />
                                            </figure>
                                            <h6>LottieFiles</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={anime} alt='' />
                                            </figure>
                                            <h6>Anime.js</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={aos_logo} alt='' />
                                            </figure>
                                            <h6>AOS Animation</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.boxContainer}>
                                <h4 data-aos="fade-up">DATABASES</h4>
                                <div className={Style.boxElem} data-aos="fade-up" data-aos-delay="200">
                                    <div className={Style.leftArea}>
                                        <h5>Database Development</h5>
                                        <p>Our database solutions ensure your applications run smoothly, securely, and efficiently. We architect data structures that scale with your business and support high-speed queries, analytics, and transaction-heavy workloads.</p>
                                    </div>
                                    <div className={Style.rightArea}>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={monogoDB} alt='' />
                                            </figure>
                                            <h6>MonogoDB</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={mysql} alt='' />
                                            </figure>
                                            <h6>mySQL</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={sql} alt='' />
                                            </figure>
                                            <h6>SQL Server</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={cloudSql} alt='' />
                                            </figure>
                                            <h6>CloudSQL</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        <VisionComponent />
        </>
    )
}

export default TechnologiesPage;