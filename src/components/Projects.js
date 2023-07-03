//taken from other studnet source: to edit!
import React from "react";

//adapt all of below to my projects
const Projects = () => {
const projects = [
    {
      title: "Weather-dashboard",
      description: "This application involved creating a weather dashboard showing a 5 day forecast across different cities using HTML, CSS and Javascript.",
      img: "/images/image1.png",
    },
    {
      title: "Text-editor",
      description: "This is a browser-based text editor application that allows users to create and edit text documents.",
      img: "/images/image2.png",
    },
    {
      title: "Coding quiz challenge",
      description: "Challenge 4 Code Quiz is a web application to help me understand coding and improve my coding skills. ",
      img: "/images/image3.png",
    },
    {
      title: "Password generator",
      description: "Makes you a password that is difficult to crack",
      img: "/images/image4.png",
    },
    {
      title: "Note taker",
      description: "This project involved developing a NOTE TAKER application to create and save notes in JSON file using unique IDs, with the frontend and backend connecting using EXPRESS JS. Deployment used Heroku.",
      img: "/images/image5.png",
    },
    {
      title: "Global Warming Presentation",
      description: "This project was aimed at providing scientific data on markers of climate change. The project featured HTML, CSS, JavaScript and APIs.",
      img: "/images/image6.png,"
    },
  ]

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
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

     
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Projects;
  