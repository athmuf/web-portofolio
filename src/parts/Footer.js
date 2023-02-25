import React from "react";
import { ReactComponent as Github } from "../assets/icon/github.svg";
import { ReactComponent as Linkedin } from "../assets/icon/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/icon/instagram.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container max-content">
          <div className="footer-upper">
            <div className="footer-profile">
              <h2>ATHIFAH MUFLIHAH</h2>
              <p>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
            <div className="footer-social">
              <h2>MY SOCIAL MEDIA</h2>
              <div className="social-logo">
                <a href="/#">
                  <Linkedin fill="var(--cream-color)" className="logo"></Linkedin>
                </a>
                <a href="/#">
                  <Github fill="var(--cream-color)" className="logo"></Github>
                </a>
                <a href="/#">
                  <Instagram fill="var(--cream-color)" className="logo"></Instagram>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-lower">
            <p>
              © Copyright {new Date().getFullYear()}. Made by{" "}
              <span>
                <a href="/#">Athifah Muflihah</a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
