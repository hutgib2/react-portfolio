//NEED to edit
import React from "react";
//import{container, row, col} from "react-bootstrap";

//adapt all of below to my projects
const Projects = () => {
const projects = [
    {
      title: "Weather-dashboard",
      subtitle: "HTML, CSS, Javascript",
      github:'https://github.com/hutgib2/challenge-6-weatherapp',
      description: "This application involved creating a weather dashboard showing a 5 day forecast across different cities using HTML, CSS and Javascript.",
      img: "/images/image1.png",
      link:"https://hutgib2.github.io/challenge-6-weatherapp/"
    },
    {
      title: "Text-editor",
      subtitle: "PWA, Service Workers, IndexedDB",
      github:'https://github.com/hutgib2/Challenge-Text-Editor',
      description: "This is a browser-based text editor application that allows users to create and edit text documents.",
      img: "/images/image2.png",
      link:"https://pure-harbor-87285-3052a2b8bba0.herokuapp.com/"
    },
    {
      title: "Coding quiz challenge",
      subtitle: "HTML, CSS, Javascript",
      github: 'https://github.com/hutgib2/challenge-4-quiz',
      description: "Challenge 4 Code Quiz is a web application to help me understand coding and improve my coding skills. ",
      img: "/images/image3.png",
      link:"https://hutgib2.github.io/challenge-4-quiz/"
    },
    {
      title: "Password generator",
      subtitle: "HTML, CSS, Javascript",
      github: 'https://github.com/hutgib2/challenge-3-password-generator',
      description: "Makes you a password that is difficult to crack",
      img: "/images/image4.png",
      link:"https://hutgib2.github.io/challenge-3-password-generator/"
    },
    {
      title: "Note taker",
      subtitle: "Node, Express JS",
      github:'https://github.com/hutgib2/Challenge-11-note-taker',
      description: "This project involved developing a NOTE TAKER application to create and save notes in JSON file using unique IDs, with the frontend and backend connecting using EXPRESS JS. Deployment used Heroku.",
      img: "/images/image5.png",
      link:"https://arcane-anchorage-79181.herokuapp.com/notes"
    },
    {
      title: "Portfolio.1",
      subtitle: "HTML, CSS",
      github:'https://github.com/hutgib2/challenge-2-professional-portfolio',
      description: "This project was aimed at developing skills in both html and CSS as an exercise in creating a portfolio.",
      img: "/images/image6.png",
      link:"https://hutgib2.github.io/challenge-2-professional-portfolio/"
    },
  ]

  return (
    //TODO container code
    <section className=" jumbotron bg-dark text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
           Portfolio Projects
          </h2>

          <p className="pb-5">
            Below are some examples of my Projcets that I have worked on. You can see more on my GitHub page.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

     <div class="row">
        {projects.map((project, i) => {
          return (
            
   
            <div class="col-md-6">
              <div class="card">
                <img src={project.img} class="card-img-top" alt={project.title} />
                <div class="card-body">
                  <h5 class="card-title">{project.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{project.subtitle}</h6>
                  <p class="card-text"> {project.description}</p>
                  <a href={project.link} target="_blank" class="btn  mr-2"><i class="fas fa-link"></i> Visit Site</a>
                  <a href={project.github} target="_blank"  class="btn"><i class="fab fa-github"></i> Github</a>
                </div>
              </div>
            </div>
          );
        })}
        </div>
    </section>
  );
};

export default Projects;
  