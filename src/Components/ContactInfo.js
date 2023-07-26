/** @format */

import React from "react";
import "../App.css";
import "../Styles/ContactInfo.css";
import { Button } from "./Button";

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <h1> Contact Me</h1>
      <section className="contact-info">
        <div className="text-container">
        <p className="contact-heading">Get in touch</p>
        <p className="contact-heading-text">Have any questions? Drop me an email to find out more</p>
        <p className="contact-heading-text1">Email: emil_jino@hotmail.com</p>
        </div>
        <div className="input-areas">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-name-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-email-input"
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="contact-message-input"
            />
            <Button buttonStyle="btn--outline">SEND</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
