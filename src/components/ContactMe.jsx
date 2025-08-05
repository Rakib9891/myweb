import React, { useState } from "react";

import "./Contact.css"; // Don't forget to import the CSS

const ContactMe = () => {
  const [data, SetData] = useState({});
  const [sent, SetSent] = useState(false);
  const [close, Setclose] = useState(false);
  const handleSub = (e) => {
    e.preventDefault();
    SetSent(true);
    setTimeout(() => SetSent(true),0);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetData((d) => ({ ...d, [name]: value }));
  };
  const handleClose = (e) => {
    SetSent(false);
    SetData({});
  };

  return (
    <>
      <div className="con ">
        <p>
          {" "}
          <a
            href="mailto:rakibulhasantanvir0@gmail.com?subject=Let's%20Connect&body=Hi%20Rakibul%2C%20I%20just%20visited%20your%20portfolio..."
            className="btn2"
          >
            Email
          </a>
        </p>
        <p>
          <a
            href="https://wa.me/8801726600273"
            target="_blank"
            rel="noopener noreferrer"
            className="btn2"
          >
            WhatsApp
          </a>
        </p>
      </div>

      <section id="contact" className="contact-section">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Have a project, question, or just want to say hi? I'm always open to
          new opportunities.
        </p>

        {sent && (
          <div className="popup1 absolute left-1/2  -translate-x-1/2">
            <h1>You message has been sent!</h1>
            <button onClick={handleClose}>Close</button>
          </div>
        )}

        <form
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
          method="POST"
          className="contact-form"
          onSubmit={handleSub}
        >
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={data.name || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={data.email || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={data.message || ""}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactMe;
