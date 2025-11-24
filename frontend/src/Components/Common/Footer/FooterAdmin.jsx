import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterStyle from '../../Style/Footer.module.css';


const Footer =()=>{
    return(
        <footer className={FooterStyle.FooterMain}>
            <div className={FooterStyle.copyRight}>
                <Container>
                    <Row>
                        <Col>
                            <div className={FooterStyle.copyFlex}>
                                <p>© Copyright 2024. TQcert. All Rights Reserved.</p>
                                <p>Design and Development by <img src={require('../../../assest/images/olive-logo.png')} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;