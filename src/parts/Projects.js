import React from "react";

import WebProject from "../assets/images/project-web.png";

export default function Projects() {
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
          <div className="project-content">
            <div className="project-photo">
              <img src={WebProject} alt="FM Mawaddah Web" />
            </div>
            <div className="main-content">
              <h3>Frontend FM Mawaddah Website</h3>
              <p>
                I'm on progress building frontend FM Mawaddah online class
                website microservice using react js and tailwindCSS.
              </p>
            </div>
          </div>

      </div>
    </>
  );
}
