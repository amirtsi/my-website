import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.JPG"; 
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME INTRODUCING MY <span className="purple">TECHNICAL EXPERTISE</span>
            </h1>
            <p className="home-about-body">
              My professional journey is defined by a strong commitment to excellence in software development. With a solid foundation in <i><b className="purple">Python, React, and Docker,</b></i> my approach is pragmatic and results-oriented.
              <br /><br />
              I have proven experience with database management and development, specifically with <i><b className="purple">Elasticsearch and MongoDB,</b></i> enabling me to efficiently handle data-driven projects.
              <br /><br />
              My portfolio showcases a blend of technical skills, a dedication to high-quality work, and a proactive stance on facing new challenges. My aim is to contribute to projects where I can apply my skills to solve complex problems and drive innovation.
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
            <p>
              Let's <span className="purple">connect!</span> I'm always open to discussing tech, projects, or opportunities.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amirtsi" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amir-tzibulevski-304991210/" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
