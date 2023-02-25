import React,{useState} from "react";
import { Link } from "react-scroll";
import ProfileImage from "../assets/images/photo-profile.jpeg";

export default function Header() {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="nav">
          <div className="nav-profile">
            <div className="photo-profile">
              <img src={ProfileImage} alt="Profile" className="profile-image" />
            </div>
            <div className="name-profile">
              <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>ATHIFAH MUFLIHAH</Link>
            </div>
          </div>
          <div onClick={() => setIsActive(!isActive)} className="menu-icon">
            <div className={isActive ? "bar bar1" : "bar"}></div>
            <div className={isActive ? "bar bar2" : "bar"}></div>
            <div className={isActive ? "bar bar3" : "bar"}></div>
          </div>
          </div>
          <div className={isActive ? "nav-responsive" : "nav-main"}>
            <ul className="nav-item">
              <li className="nav-list">
                <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>HOME</Link>
              </li>
              <li className="nav-list">
                <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>ABOUT</Link>
              </li>
              <li className="nav-list">
                <Link to="project" spy={true} smooth={true} offset={-50} duration={500}>PROJECTS</Link>
              </li>
              <li className="nav-list">
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
