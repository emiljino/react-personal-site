/** @format */

import React from "react";
import "../App.css";
import "../Styles/ContactInfo.css";
import { Button } from "./Button";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactInfo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      emailjs
        .sendForm(
          "service_c5w3v6p",
          "template_l1cxmnp",
          form.current,
          "XuxYxqrTqJhumlTVl"
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      // Show an error message to the user or handle validation feedback
      console.log("Form is not valid");
    }
  };

  return (
    <div className="contact-container">
      <h1> Contact Me</h1>
      <section className="contact-info">
        <div className="text-container">
          <p className="contact-heading">Get in touch</p>
          <p className="contact-heading-text">
            Have any questions? Drop me an email to find out more
          </p>
          <p className="contact-heading-text1">Email: emil_jino@hotmail.com</p>
        </div>
        <div className="input-areas">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="contact-name-input"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="contact-email-input"
            />
            <input
              type="text"
              name="message"
              required
              placeholder="Message"
              className="contact-message-input"
            />
            <Button onClick={sendEmail} buttonStyle="btn--outline">
              SEND
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
