import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Amir Tzibulevski</span>
            <br />
            I'm currently embracing the flexibility and diversity of projects that come with being a freelancer in the software development industry.
            <br />
            I hold a Bachelor's degree in Computer Science, which has provided me with a solid foundation in technology and its applications.
            <br />
            <br />
            Beyond my professional endeavors, I am passionate about a variety of activities:
          </p>
          <ul>
            <li className="about-activity">
              Engaging in software development projects
            </li>
            <li className="about-activity">
               Exploring new technologies and tools
            </li>
            <li className="about-activity">
               Continuous learning and self-improvement
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Striving for excellence as a way of life."
          </p>
          <footer className="blockquote-footer">Amir Tzibulevski</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
