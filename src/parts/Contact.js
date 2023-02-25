import React from "react";

import { ReactComponent as IconLinkedin } from "../assets/icon/linkedin.svg";
import { ReactComponent as IconInstagram } from "../assets/icon/instagram.svg";
import { ReactComponent as IconEmail } from "../assets/icon/email.svg";

export default function Contact() {
  const contact = [
    {
      id: 1,
      name: "Email",
      data: "athifah.muflihah@gmail.com",
      url: "",
      image: (
        <IconEmail
          fill="var(--gray-color)"
          className="image-contact"
        ></IconEmail>
      ),
    },
    {
      id: 2,
      name: "Linkedin",
      data: "Athifah Muflihah",
      url: "",
      image: (
        <IconLinkedin
          fill="var(--gray-color)"
          className="image-contact"
        ></IconLinkedin>
      ),
    },
    {
      id: 3,
      name: "Instagram",
      data: "@athifamuf",
      url: "",
      image: (
        <IconInstagram
          fill="var(--gray-color)"
          className="image-contact"
        ></IconInstagram>
      ),
    },
  ];

  const renderContact = contact.map((item) => (
    <div key={item.id} className="contact-details">
      <div className="circle">{item.image}</div>
      <div className="data-details">
        <h4>{item.name}</h4>
        <h5>{item.data}</h5>
      </div>
    </div>
  ));

  return (
    <>
      <div className="contact">
        <div className="max-content">
          <div className="heading">
            <h2>CONTACT</h2>
            <div className="line"></div>
            <p>
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className="contact-media">{renderContact}</div>
        </div>
      </div>
    </>
  );
}
