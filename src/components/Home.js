import React from "react";
import profileImage from "../images/Avatar.png";
function Home() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="row">
            <div className="col-5">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I'm Hugo.
                    <br className="hidden lg:inline-block" />I have a passion for web developement, game developement and problem solving.
                </h1>
            </div>
            <div className="col-7">
                <img className="w-20 h-20 rounded-full inline-flex p-2" src={profileImage} alt="Avatar" />
            </div>
          </div>
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Get in touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check out at my Portfolio
            </a>
          </div>
          <p className="mb-8 leading-relaxed">
            to do: add more about me
          </p>
        </div>
    </section>
  );
}

export default Home;