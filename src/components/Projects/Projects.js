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
import unicore from "../../Assets/Projects/UnicoreDash.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unicore}
              isBlog={false}
              title="Unicore"
              description="Unicore is an innovative project aimed at transforming IT and DevOps operations within organizations by leveraging advanced language models to streamline processes and enhance efficiency. At its core, Unicore serves as a powerful tool that studies an organization's environment and existing integrations comprehensively, enabling IT and DevOps professionals to execute actions seamlessly across various systems and automations."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
