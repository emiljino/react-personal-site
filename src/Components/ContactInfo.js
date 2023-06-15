/** @format */

import React from "react";
import "../App.css";
import "./ContactInfo.css";
import { Button } from "./Button";

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <h1> Contact Me</h1>
      <section className="contact-info">
        <p className="contact-heading">Get in touch</p>
        <p className="contact-heading-text">Email: emil_jino@hotmail.com</p>
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
            <Button buttonStyle="btn--outline">Submit</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
