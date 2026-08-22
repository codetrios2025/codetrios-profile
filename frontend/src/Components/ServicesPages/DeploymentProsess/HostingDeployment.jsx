import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../../CSS/Style.module.css";
import {
  FaMagnifyingGlassChart,
  FaServer,
  FaCloudArrowUp,
  FaShieldHalved,
  FaGaugeHigh,
  FaHeadset
} from "react-icons/fa6";

const HostingProcess = ({title, subTitle})=>{
  return(
    <div className={Style.processSection}>
      <Container>
        <Row>
          <Col>
            <div className={Style.Heading}>
              <h2 data-aos="fade-up">{title} <span>{subTitle}</span></h2>
              <div className={Style.line}><span className={Style.lineDote}></span></div>
            </div>
            <div className={Style.processWrap}>
              <div className={Style.processList}>
                {/* 01 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="100">
                  <div className={Style.processNumber}>01</div>
                  <div className={Style.processIcon}>
                    <span><FaMagnifyingGlassChart /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Hosting Requirements Analysis</h3>
                </div>
                {/* 02 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="200">
                  <div className={Style.processNumber}>02</div>
                  <div className={Style.processIcon}>
                    <span><FaServer /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Hosting Environment Setup</h3>
                </div>
                {/* 03 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="300">
                  <div className={Style.processNumber}>03</div>
                  <div className={Style.processIcon}>
                    <span><FaCloudArrowUp /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Website Migration</h3>
                </div>
                {/* 04 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="400">
                  <div className={Style.processNumber}>04</div>
                  <div className={Style.processIcon}>
                    <span><FaShieldHalved /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Security Configuration</h3>
                </div>
                {/* 05 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="500">
                  <div className={Style.processNumber}>05</div>
                  <div className={Style.processIcon}>
                    <span><FaGaugeHigh /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Performance Optimization</h3>
                </div>
                {/* 06 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="700">
                  <div className={Style.processNumber}>06</div>
                  <div className={Style.processIcon}>
                    <span><FaHeadset /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Monitoring & Support</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default HostingProcess;