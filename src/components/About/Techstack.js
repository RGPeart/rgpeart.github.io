import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiDatabase,
  DiGit,
  DiJava,
  DiJavascript1,
  DiLinux,
  DiMongodb,
  DiPython,
  DiRasberryPi,
  DiReact,
  DiUbuntu
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiR
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiRasberryPi />
      </Col>
    
    </Row>
  );
}

export default Techstack;
