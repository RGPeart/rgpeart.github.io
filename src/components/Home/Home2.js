import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with data engineering, and I believe my passion has blossomed into a successful profession!
              <br />
              <br />
              I am fluent in classics like
              <b className="blue"> SQL and Python</b>
              .
              <br />
              <br />
              My main field of interests include developing new &nbsp;
              <i>
                <b className="blue">Pipelines and Data Products </b> 
                in areas related to{" "}
                <b className="blue">Finance, Life Sciences, and Public Transportation</b>
                .
              </i>
              <br />
              <br />
              Whenever possible, I try to apply my expertise for developing products with 
              <b className="blue"> Gen AI </b> 
              and
              <b className="blue">{" "} Data Science Libraries</b>
              &nbsp; like
              <i>
                <b className="blue"> TensorFlow and PyTorch</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://github.com/RGPeart"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ryan-peart/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rgpeart"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>

            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
