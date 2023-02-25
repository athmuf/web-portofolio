import React from "react";
import ProfileImage from "../assets/images/photo-profile.jpeg";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "UI",
    "UX",
    "Github",
    "SQL Basics",
    "PHP Basics",
    "TailwindCSS",
  ];

  const skillList = skills.map((skill) => (
    <div className="skill-item">{skill}</div>
  ));

  return (
    <>
      <div className="about max-content" id="about">
        <div className="heading">
          <h2>ABOUT ME</h2>
          <div className="line"></div>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="content">
          <article>
            <div className="main-content">
              <h3>Get to know me!</h3>
              <p>
                I'm a <span className="text-bold">Frontend Web Developer</span>{" "}
                building the Front-end of Websites and Web Applications that
                leads to effectively and aesthetically deliver information to
                site visitors. Check out some of my work in the{" "}
                <span className="text-bold">Projects</span> section.
              </p>
              <p>
                Currently I am an active student majoring in computer science at
                IPB University 3rd year. Feel free to Connect or Follow me on my{" "}
                <span>
                  <a
                    href="https://www.linkedin.com/in/athifamuf"
                    className="text-bold"
                  >
                    Linkedin
                  </a>
                </span>
                .
              </p>
              <p>
                I'm open to <span className="text-bold">Job</span> opportunities
                where I can contribute, learn and grow. If you have a good
                opportunity that matches my skills and experience then don't
                hesitate to <span className="text-bold">contact</span> me.
              </p>
            </div>
          </article>
          <div className="empty"></div>
          <aside>
            <div className="side-content">
              <div className="side-profile">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="biodata">
                  <h4>Athifah Muflihah</h4>
                  <h5>Frontend Developer</h5>
                </div>
              </div>
              <h3>My Skills</h3>
              <div className="skills">{skillList}</div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
