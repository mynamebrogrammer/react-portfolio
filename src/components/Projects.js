import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import simpliGame from "../assets/screenshot-1.png";
import tech from "../assets/tech.png";
import deli from "../assets/deli.png";
import book from "../assets/book.png";
import metal from "../assets/metal.png";
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
      id: 4,
      title: "Book Search Engine",
      description:
        "This is a MERN stack application that allows users to search for books using the Google Books API. Users can create an account, login, and save books to their profile. Users can also delete books from their profile.",
      image: book,
      demoLink: "https://peaceful-coast-53838.herokuapp.com/",
      githubLink: "https://github.com/mynamebrogrammer/book-search-engine",
    },
    {
      id: 5,
      title: "MetalMindz",
      description:
        "MetalMindz is a social app for FRC robot builders. Show off your creations, connect with others, and get inspired. Simply create a profile, upload photos of your robots, and join a community of like-minded enthusiasts.",
      image: metal,
      demoLink: "https://metal-mindz.herokuapp.com/",
      githubLink: "https://github.com/mynamebrogrammer/MetalMindz",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        <p className="project-title-desc">
          The following are some of the projects I have worked on. 
        </p>
        <Carousel>
          {projects.map((project) => (
            <Carousel.Item key={project.id}>
              <img
                className="d-block w-100"
                src={project.image}
                alt={project.title}
              />
              <Carousel.Caption>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="carousel-buttons">
                  <Button variant="secondary" href={project.demoLink} target="_blank">
                    Demo
                  </Button>
                  <Button variant="secondary" href={project.githubLink} target="_blank">
                    GitHub
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
