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
import { FaComputerMouse } from "react-icons/fa6";
import { FaPenRuler } from "react-icons/fa6";
import { MdDashboardCustomize  } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const DesignDevelopment = ({title, subTitle})=>{
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
                  <h3>Research & Discovery</h3>
                </div>
                {/* 02 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>02</div>
                  <div className={Style.processIcon}>
                    <span><HiOutlineClipboardDocumentList /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>User Flows & Information Architecture</h3>
                </div>
                {/* 03 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>03</div>
                  <div className={Style.processIcon}>
                    <span><FaPenRuler /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Wireframing</h3>
                </div>
                {/* 04 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>04</div>
                  <div className={Style.processIcon}>
                    <span><MdDashboardCustomize /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>UI Design & Design System</h3>
                </div>
                {/* 05 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>05</div>
                  <div className={Style.processIcon}>
                    <span><FaComputerMouse /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Interactive Prototype</h3>
                </div>
                {/* 06 */}
                <div className={Style.processItem}>
                  <div className={Style.processNumber}>06</div>
                  <div className={Style.processIcon}>
                    <span><BiSupport /></span>
                  </div>
                  <div className={Style.processDot}></div>
                  <h3>Handoff & Design Support</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default DesignDevelopment;