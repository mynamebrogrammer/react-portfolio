import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Contact from "./Contact";
import profilePic from "../../src/assets/IMG_0676.jpg";
import "../about.css";

export default function About() {
  return (
    <section id="about" className="py-5 section">
      <Container>
        <Row className="align-items-center">
          <Col xs={4}>
            <Image className="profile-pic" src={profilePic} alt="Profile Picture" fluid />
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
              playing soccer, or geeking out around cool cars. I am a big cooking enthusiast and love to try new recipes. I also enjoy traveling and exploring new places.
            </p>
            <p>
              I am currently looking for a full-time position as a web developer. If you have any questions or would like to get in touch, please feel free to contact me using the button below.
            </p>
            <Contact />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
