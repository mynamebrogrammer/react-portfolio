import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import simpliGame from "../assets/screenshot-1.png";

export default function Projects() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "SimpliGame",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: simpliGame,
      demoLink: "https://mynamebrogrammer.github.io/SimpliGame/",
      githubLink: "https://github.com/mynamebrogrammer/SimpliGame",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "/path/to/project2.png",
      demoLink: "https://example.com/project2",
      githubLink: "https://github.com/example/project2",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        image: "/path/to/project3.png",
        demoLink: "",
        githubLink: "",
    }
    // Add more project objects as needed
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="secondary" href={project.demoLink} target="_blank">
                    Demo
                  </Button>
                  <Button variant="secondary" href={project.githubLink} target="_blank">
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
