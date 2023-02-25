import React from "react";
import ProfileImage from "../assets/images/photo-profile.jpeg"

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-profile">
            <div className="photo-profile">
                <img src={ProfileImage} alt="Profile" className="profile-image"/>
            </div>
            <div className="name-profile">
                <a href="/#">ATHIFAH MUFLIHAH</a>
            </div>
          </div>
          <div className="nav-main">
            <ul className="nav-item">
              <li className="nav-list"><a href="/#">HOME</a></li>
              <li className="nav-list"><a href="/#">ABOUT</a></li>
              <li className="nav-list"><a href="/#">PROJECTS</a></li>
              <li className="nav-list"><a href="/#">CONTACT</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
