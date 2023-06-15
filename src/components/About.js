import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import profilePic from  "../../src/assets/IMG_0676.jpg";

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              src={profilePic}
              alt="Profile Picture"
              roundedCircle
              fluid
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">About Me</h2>
            <p>
              Hi, I'm Habib Maksoud, a Full-stack MERN web developer with a passion for
              building user-friendly and responsive web applications. I have
              experience working with HTML, CSS, JavaScript, React, SQL, NoSql, MongoDB, IndexDB, Node, Express, and more.
            </p>
            <p>
              I have a good understanding of front-end development and enjoy
              creating intuitive user interfaces that provide a great user
              experience. I also have experience with back-end development,
              working with Node.js and Express to build RESTful APIs and
              integrate with databases. I am also familiar with relational and non-relational databases.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              playing soccer, or geeking out around cool cars.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
