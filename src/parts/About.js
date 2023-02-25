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
      <div className="about max-content">
        <div className="heading">
          <h2>About Me</h2>
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
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some of my work in the Projects section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
            </div>
          </article>
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
