import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import ServicesBanner from '../../assets/images/services-banner.webp';
import webImage from '../../assets/images/web-design.webp';
import WhyChooseImg from '../../assets/images/why_choose.webp';
import { Link } from 'react-router-dom';
//logo icon
import HTML from '../../assets/images/icon/html_logo.webp';
import css from '../../assets/images/icon/css_logo.webp';
import js from '../../assets/images/icon/js_logo.webp';
import bootstrap from '../../assets/images/icon/bootstrap_logo.webp';
import vue from '../../assets/images/icon/vue_logo.webp';
import gsap from '../../assets/images/icon/gsap_logo.webp';
import reactVite from '../../assets/images/icon/reactVite_logo.webp';
import reactNative from '../../assets/images/icon/react_logo.webp';

import php from '../../assets/images/icon/php_logo.webp';
import laravel from '../../assets/images/icon/laravel_logo.webp';
import wordpress from '../../assets/images/icon/wordpress_logo.webp';
import drupal from '../../assets/images/icon/drupal_icon.webp';
import node from '../../assets/images/icon/node_logo.webp';
import java from '../../assets/images/icon/java_logo.webp';
import fastApi from '../../assets/images/icon/fastapi_logo.webp';
import strapi from '../../assets/images/icon/strapi_logo.webp';

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


const TechnologiesPage = ()=>{

    return(
        <>
        <div className={Style.innerPage + " " + Style.techPage}>
            <div className={Style.innerBanner}>
                <img src={ServicesBanner} />
            </div>
            <div className={Style.ourPlatForm}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.boxContainer}>
                                <h4>FRONTEND</h4>
                                <p>We build state-of-the-art frontend solutions based on ultra-modern technologies and the latest javascript frameworks</p>
                                <div className={Style.boxElem}>
                                    <div className={Style.leftArea}>
                                        <h5>Leveraging The Latest Front-End Development Technologies</h5>
                                        <p>At Technogigz, we are committed to building websites with unrivalled UI and UX design. We make sure to cater to the needs of our clients and provide them with innovative suggestions to improve their judgement.</p>
                                    </div>
                                    <div className={Style.rightArea}>
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
                                                <img src={reactVite} alt='' />
                                            </figure>
                                            <h6>React + Vite</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={vue} alt='' />
                                            </figure>
                                            <h6>Vue</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={gsap} alt='' />
                                            </figure>
                                            <h6>GSAP</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={reactNative} alt='' />
                                            </figure>
                                            <h6>React Native</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.boxContainer}>
                                <h4>FRONTEND</h4>
                                <p>We build state-of-the-art frontend solutions based on ultra-modern technologies and the latest javascript frameworks</p>
                                <div className={Style.boxElem}>
                                    <div className={Style.leftArea}>
                                        <h5>Leveraging The Latest Front-End Development Technologies</h5>
                                        <p>At Technogigz, we are committed to building websites with unrivalled UI and UX design. We make sure to cater to the needs of our clients and provide them with innovative suggestions to improve their judgement.</p>
                                    </div>
                                    <div className={Style.rightArea}>
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
                                                <img src={reactVite} alt='' />
                                            </figure>
                                            <h6>React + Vite</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={vue} alt='' />
                                            </figure>
                                            <h6>Vue</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={gsap} alt='' />
                                            </figure>
                                            <h6>GSAP</h6>
                                        </div>
                                        <div className={Style.techLogo}>
                                            <figure>
                                                <img src={reactNative} alt='' />
                                            </figure>
                                            <h6>React Native</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default TechnologiesPage;