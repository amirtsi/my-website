import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import unicore from "../../Assets/Projects/UnicoreDash.png"
import monitor from "../../Assets/Projects/monitoring-png.png"

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monitor}
              isBlog={false}
              title="Git-Monitor"
              description="The GitHub Monitor is a dynamic tool designed to keep you informed about any updates or modifications in your GitHub repositories as they happen. Whether it's a new pull request, code review request, or any other action, our monitor ensures you're always in the loop."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
