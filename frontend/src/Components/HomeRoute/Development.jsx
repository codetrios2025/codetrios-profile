import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../CSS/Style.module.css";
import {
  FiSearch,
  FiClipboard,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiHeadphones,
} from "react-icons/fi";

import {
  HiOutlineMagnifyingGlass,
  HiOutlineClipboardDocumentList,
  HiOutlinePaintBrush,
  HiOutlineCodeBracketSquare,
  HiOutlineClipboardDocumentCheck,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import { BiSupport } from "react-icons/bi";
const Development = ()=>{
  return(
    <div className={Style.processSection}>
      <Container>
        <Row>
          <Col>
            <div className={Style.Heading}>
              <h2 data-aos="fade-up">Development <span>Process</span></h2>
              <div className={Style.line}><span className={Style.lineDote}></span></div>
            </div>
            <div className={Style.processWrap}>
              <div className={Style.processList}>
                {/* 01 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="100">
                  <div className={Style.processNumber}>01</div>
                  <div className={Style.processIcon}>
                    <span><HiOutlineMagnifyingGlass /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Discovery</h3>
                </div>
                {/* 02 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="200">
                  <div className={Style.processNumber}>02</div>
                  <div className={Style.processIcon}>
                    <span><HiOutlineClipboardDocumentList /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Planning</h3>
                </div>
                {/* 03 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="300">
                  <div className={Style.processNumber}>03</div>
                  <div className={Style.processIcon}>
                    <span><HiOutlinePaintBrush /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>UI / UX Design</h3>
                </div>
                {/* 04 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="400">
                  <div className={Style.processNumber}>04</div>
                  <div className={Style.processIcon}>
                    <span><HiOutlineCodeBracketSquare /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Development</h3>
                </div>
                {/* 05 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="500">
                  <div className={Style.processNumber}>05</div>
                  <div className={Style.processIcon}>
                    <span><HiOutlineClipboardDocumentCheck /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Testing</h3>
                </div>
                {/* 06 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="600">
                  <div className={Style.processNumber}>06</div>
                  <div className={Style.processIcon}>
                    <span><HiOutlineRocketLaunch /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Deployment</h3>
                </div>
                {/* 07 */}
                <div className={Style.processItem} data-aos="fade-up" data-aos-delay="700">
                  <div className={Style.processNumber}>07</div>
                  <div className={Style.processIcon}>
                    <span><BiSupport /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Support</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Development;