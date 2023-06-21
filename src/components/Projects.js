import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import simpliGame from "../assets/screenshot-1.png";
import tech from "../assets/tech.png";
import deli from "../assets/deli.png";
import "../projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SimpliGame",
      description:
        "Website using RESTful API to display games and their information in a minimalistic fashion.",
      image: simpliGame,
      demoLink: "https://mynamebrogrammer.github.io/SimpliGame/",
      githubLink: "https://github.com/mynamebrogrammer/SimpliGame",
    },
    {
      id: 2,
      title: "Habib's Tech Blog",
      description:
        "This is a CMS style blog site where developers(or anyone) can publish their blog posts and comment on other developers' posts as well.",
      image: tech,
      demoLink: "https://vast-sierra-53538.herokuapp.com/",
      githubLink: "https://github.com/mynamebrogrammer/Habibs-Tech-Blog",
    },
    {
      id: 3,
      title: "Burbank Deli & Market",
      description:
        "This is a website for a local deli and market in Burbank, CA. The website is built using React and Bootstrap.",
      image: deli,
      demoLink: "https://www.burbankdeli.com/",
      githubLink: "https://github.com/mynamebrogrammer/BurbankDeliMarket",
    },
    {
      id: 3,
      title: "Burbank Deli & Market",
      description:
        "This is a website for a local deli and market in Burbank, CA. The website is built using React and Bootstrap.",
      image: deli,
      demoLink: "https://www.burbankdeli.com/",
      githubLink: "https://github.com/mynamebrogrammer/BurbankDeliMarket",
    },
    {
      id: 3,
      title: "Burbank Deli & Market",
      description:
        "This is a website for a local deli and market in Burbank, CA. The website is built using React and Bootstrap.",
      image: deli,
      demoLink: "https://www.burbankdeli.com/",
      githubLink: "https://github.com/mynamebrogrammer/BurbankDeliMarket",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="secondary"
                    href={project.demoLink}
                    target="_blank"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="secondary"
                    href={project.githubLink}
                    target="_blank"
                  >
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
