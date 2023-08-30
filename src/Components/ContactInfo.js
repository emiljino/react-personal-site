/** @format */

import React from "react";
import "../App.css";
import "../Styles/ContactInfo.css";
import { Button } from "./Button";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify"; // Import the toast module
import "react-toastify/dist/ReactToastify.css"; // Import the default styles

const ContactInfo = () => {
  const [isSending, setIsSending] = useState(false); // Initialize isSending state
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      setIsSending(true); // Start sending, update the state
      try {
        await emailjs.sendForm(
          "service_c5w3v6p",
          "template_l1cxmnp",
          form.current,
          "XuxYxqrTqJhumlTVl"
        );
        form.current.reset();
        showSuccessToast();
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setIsSending(false); // Sending completed, update the state
      }
    } else {
      console.log("Form is not valid");
    }
  };

  const showSuccessToast = () => {
    toast.success("Message sent successfully!", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "success-toast",
    });
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
            <Button
              onClick={sendEmail}
              buttonStyle="btn--outline"
              disabled={isSending} // Add a state variable to track whether sending is in progress
            >
              {isSending ? "Sending..." : "SEND"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
