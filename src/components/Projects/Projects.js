import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personal Budgeting App"
              description="Python application that will connect to my credit cards and track my expenses. Providing insights and recommendations to help me stay on track and achieve my financial goals."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Magic Formula Stock Investing"
              description="Python Script that will recommend a list of potential stocks to invest in. Decisions and logic are following the investment practices of Joel Greenblatt in his book titled 'The Little Book That Beats The Market'."
              ghLink="https://github.com/RGPeart/jupyterNotebook/tree/master/Python_Projects/Magic-Formula"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Resy Booking Bot"
              description="Automated Resy booking bot, looking to 'snipe' reservations forhighly sought-after restaurants in your area."
              ghLink="https://github.com/RGPeart/resy-booking-bot"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Magic Mirror"
              description="Application running on Raspberry Pi to show me current events and real-time updates on Markets, Sports, and Entertainment."
              ghLink="https://github.com/RGPeart/MagicMirror"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="TooGoodToGo Notifier"
              description="Application running on Raspberry Pi to send email notifications when your favorite TooGoodToGo Bags are available."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
