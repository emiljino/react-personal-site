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
      title: "Scotland Yard CW",
      image: "../images/SYcombined.jpg",
      description:
        "Modelled the Scotland Yard board game, started with a skeleton code and completed this in Java. Wrote an AI using a minimax game tree and Dijkstra’s algorithm to evaluate the optimum moves for Mr.X to escape from the detectives",
      githubLink: "https://github.com/emiljino/Scotland-Yard-CW",
      // Other project-specific data
    },
    2: {
      // Project 2 data
      title: "Computer Graphics CW",
      image: "../images/img-9.jpg",
      description: "Did some cool rendering stuff with OpenGL and C++",
      githubLink: "https://github.com/emiljino/Computer-Graphics-CW",
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
      {/* Render other project-specific components */}
    </div>
  );
}

export default ProjectDisplay;
