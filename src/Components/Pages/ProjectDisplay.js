/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import "../../Styles/ProjectDisplay.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProjectDisplay() {
  const { id } = useParams(); // Access the project ID from the route parameters

  // const navigate = useNavigate();

  // const handleBack = () => {
  //   navigate(-1); // Navigate back to the previous page
  // };

  // Define an object or an array containing project data
  const projects = {
    1: {
      // Project 1 data
      title: "Personal Portfolio",
      image: "../images/Website.jpg",
      description:
        "Personal website built using React.js and CSS, to showcase my projects and frontend development skills",
      githubLink: "https://github.com/emiljino/react-personal-site",
      languages: "Languages: React.js, CSS",
      // Other project-specific data
    },
    2: {
      // Project 1 data
      title: "VR Games Project",
      image: "../images/MarcoPred.jpg",
      description:
        "Marco Predatoro is a room-scale mixed reality Alien versus Spaceman unity game. Real-life humans are mapped into the alien virtual world using Kinect cameras and AR phones while the Alien plays in full Metaquest VR. This group project was developed over 12 weeks for the University of Bristol's third-year Games Project. Please visit GitHub for more information and video demo.",
      githubLink: "https://github.com/MarcoPredatoro",
      languages: "Languages: C#",

      // Other project-specific data
    },
    3: {
      // Project 3 data
      title: "NFL Data Science Project",
      image: "../images/NFLss.jpg",
      description:
        "This group project explores the offensive performance of NFL teams during the 2018-2023 seasons. Machine learning and statistical models are applied to the four main play types (running, passing, punting and field goals), aiming to identify the factors that contribute to the success of a play",
      githubLink: "https://github.com/emiljino/NFL-Data-Science-Project",
      languages: "Languages: Python",

      // Other project-specific data
    },
    4: {
      // Project 2 data
      title: "C++ Graphics Renderer",
      image: "../images/CG.jpg",
      description:
        "C++ renderer written using GLM and SDL2. Program renders Cornell Box using techniques such as wireframe rendering, rasterising and ray tracing. Implemented further effects such as specular lighting and soft shadows.",
      githubLink: "https://github.com/emiljino/Computer-Graphics-CW",
      languages: "Languages: C++",

      // Other project-specific data
    },
    5: {
      // Project 1 data
      title: "Game of Life Simulation",
      image: "../images/GoL.jpg",
      description:
        "Simulation of John Conway's Game of Life written in GOLang, with a parallelised implementation as well as a distributed implementation using AWS nodes.",
      githubLink: "https://github.com/emiljino/Game-Of-Life-CW",
      languages: "Languages: GOLang",
      // Other project-specific data
    },
    6: {
      // Project 1 data
      title: "Gromit2",
      image: "../images/Gromitposter.jpg",
      description:
        "Further developed a system that would allow video connection between two screens placed inside Gromit Sculptures across the city of Bristol.",
      githubLink: "https://github.com/emiljino/Gromit2",
      languages: "Languages: Javascript, Springboot",
      // Other project-specific data
    },
    7: {
      // Project 1 data
      title: "Scotland Yard",
      image: "../images/SYcombined.jpg",
      description:
        "Modelled the Scotland Yard board game, started with a skeleton code and completed this in Java. Wrote an AI using a minimax game tree and Dijkstra’s algorithm to evaluate the optimum moves for Mr.X to escape from the detectives",
      githubLink: "https://github.com/emiljino/Scotland-Yard-CW",
      languages: "Languages: Java",
      // Other project-specific data
    },
    // Add more projects
  };

  // Render the project content based on the project ID
  const project = projects[id];

  return (
    <div className="project-display">
      <Link to="/Projects" className="back-link">
        <img
          src="../Images/BackIcon.svg"
          alt="Code Icon"
          className="back-icon"
        />
        Back
      </Link>

      <h1>{project.title}</h1>
      <img src={project.image} alt="Project" />
      <p>{project.description}</p>
      <a
        className="link"
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
        GitHub
      </a>
      <p className="proj-lang">{project.languages}</p>
      {/* Render other project-specific components */}
    </div>
  );
}

export default ProjectDisplay;
