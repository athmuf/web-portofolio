import React from "react";

import WebProject from "../assets/images/project-web.png";
import WebPortofolio from "../assets/images/portofolio.png";

export default function Projects() {

  const project = [
    {
      id: "1",
      title: "Frontend FM Mawaddah Website",
      desc: "On progress building frontend FM Mawaddah online class website microservice using react js and tailwindCSS. Please look forward to it!",
      span: "",
      image: WebProject,
    },
    {
      id: "2",
      title: "Portofolio Website",
      desc: "A portfolio website that I made using reactjs. You can visit it at ",
      span: "athifahmuflihah.netlify.app",
      image: WebPortofolio,
    },
  ];

  const renderProject = project.map((item) => (
    <div className="project-content">
      <div className="project-photo">
        <img src={item.image} alt="FM Mawaddah Web" />
      </div>
      <div className="main-content">
        <h3>{item.title}</h3>
        <p>{item.desc}<span className="text-bold"><a href="https://athifahmuflihah.netlify.app/">{item.span}</a></span></p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="projects max-content" id="project">
        <div className="heading">
          <h2>PROJECTS</h2>
          <div className="line"></div>
          <p>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>
        {renderProject}
      </div>
    </>
  );
}
