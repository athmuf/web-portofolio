import React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className="hero" id="home">
        <div className="hero-content max-content">
          <h1>HI, I'M ATHIFAH MUFLIHAH</h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <button className="btn">
            <Link to="project" spy={true} smooth={true} offset={-50} duration={500}>PROJECTS</Link>
          </button>
        </div>
      </div>
    </>
  );
}
