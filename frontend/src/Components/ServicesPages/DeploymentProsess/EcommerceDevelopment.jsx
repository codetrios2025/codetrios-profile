import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../../CSS/Style.module.css";
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
import { FaPalette, FaCode, FaPlug, FaVial, FaRocket } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const EcommerceDevelopment = ({title, subTitle})=>{
  return(
    <div className={Style.processSection}>
      <Container>
        <Row>
          <Col>
            <div className={Style.Heading}>
              <h2>{title} <span>{subTitle}</span></h2>
              <div className={Style.line}><span className={Style.lineDote}></span></div>
            </div>
            <div className={Style.processWrap}>
              <div className={Style.processList}>
                {/* 01 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>01</div>
                  <div className={Style.processIcon}>
                    <span><HiOutlineMagnifyingGlass /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Ecommerce Strategy</h3>
                </div>
                {/* 02 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>02</div>
                  <div className={Style.processIcon}>
                    <span><FaPalette /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>UI/UX Design</h3>
                </div>
                {/* 03 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>03</div>
                  <div className={Style.processIcon}>
                    <span><FaCode /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Development</h3>
                </div>
                {/* 04 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>04</div>
                  <div className={Style.processIcon}>
                    <span><FaPlug /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Payment & Integration</h3>
                </div>
                {/* 05 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>05</div>
                  <div className={Style.processIcon}>
                    <span><FaVial /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Testing & Optimization</h3>
                </div>
                {/* 06 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>06</div>
                  <div className={Style.processIcon}>
                    <span><BiSupport /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Launch & Support</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default EcommerceDevelopment;