import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import webImage from '../../assets/images/web-design.webp';

import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const ContactUs = () =>{
    return(
        <div className={Style.commonPading}>
            <Container>
                <Row>
                    <Col>
                        <div className={Style.contactFomr}>
                            <h2 className={Style.title}>Get in touch</h2>
                            <div className={Style.fomrStyle}>
                                <div className={Style.inputFlex}>
                                    <div className={Style.group}>
                                        <label>First Name</label>
                                        <input type='text' />
                                    </div>
                                    <div className={Style.group}>
                                        <label>Last Name</label>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className={Style.inputFlex}>
                                    <div className={Style.group}>
                                        <label>Company</label>
                                        <input type='text' />
                                    </div>
                                    <div className={Style.group}>
                                        <label>Mobile</label>
                                        <input type='number' />
                                    </div>
                                </div>
                                <div className={Style.inputFlex}>
                                    <div className={Style.group}>
                                        <label>Email</label>
                                        <input type='email' />
                                    </div>
                                </div>
                                <div className={Style.inputFlex}>
                                    <div className={Style.group}>
                                        <label>Your Requirement?</label>
                                        <textarea type="text" ></textarea>
                                    </div>
                                </div>
                                <div className={Style.buttonFlex}>
                                    <button type='button' className={Style.btnStyle}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs;