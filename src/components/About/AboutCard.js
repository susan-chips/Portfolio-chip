import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Susan </span> 
            from <span className="purple">Winnipeg, Canada.</span>
            <br /> Whether I'm working on a simple script or a complex application,
             I'm always looking for ways to push the boundaries of what's possible and make a real impact.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am a nerd among nerds.!"{" "}
          </p>
          <footer className="blockquote-footer">Susan Adesoji</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
