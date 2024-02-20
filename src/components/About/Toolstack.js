import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMicrosoftteams,
  SiWindows,
  SiSnowflake,
  SiInformatica,
  SiJupyter,
  SiAzuredevops,
  SiAzurepipelines,
  SiPowerbi 
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiInformatica />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAzurepipelines />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
            
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
