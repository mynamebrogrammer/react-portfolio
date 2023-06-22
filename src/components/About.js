import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "./Contact";
import profilePicFront from "../../src/assets/IMG_0676.jpg";
import resumePDF from "../../src/assets/resume-web.pdf";
import "../about.css";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipProfilePic = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="py-5 section">
      <Container>
        <Row className="align-items-center">
          <Col xs={4}>
            <div
              className={`profile-pic ${isFlipped ? "flipped" : ""}`}
              onClick={flipProfilePic}
            >
              <div className="profile-pic-front">
                <img src={profilePicFront} alt="Profile" />
              </div>
              <div className="profile-pic-back">
                <div className="back-content">
                  <h3>BONUS!</h3>
                  <p>Birthday: January 30, 1999</p>
                  <p>Favorite Food: Margarita style Pizza</p>
                  <p>Favorite Car: 2016 BMW M5</p>
                  

                </div>
              </div>
            </div>
          </Col>
          <Col xs={8}>
            <h2 className="mb-4">About Me</h2>
            <p>
              Hi, I'm Habib Maksoud, a Full-stack MERN web developer with a
              passion for building user-friendly and responsive web
              applications. I have experience working with HTML, CSS,
              JavaScript, React, SQL, NoSql, MongoDB, IndexDB, Node, Express,
              and more.
            </p>
            <p>
              I have a good understanding of front-end development and enjoy
              creating intuitive user interfaces that provide a great user
              experience. I also have experience with back-end development,
              working with Node.js and Express to build RESTful APIs and
              integrate with databases.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              playing soccer, or geeking out around cool cars. I am a big
              cooking enthusiast and love to try new recipes. I also enjoy
              traveling and exploring new places.
            </p>
            <p>
              I am currently looking for a full-time position as a web
              developer. If you have any questions or would like to get in
              touch, please feel free to contact me using the button below.
            </p>
            <Contact />
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              View/Download Resume Here
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
