import React from "react";
import "../App.css";

export default function ContactSection({ sectionRef }) {
  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-content">
        <p>We'd love to hear from you! For any questions, suggestions, or support, please use the details below.</p>
        <div className="contact-details">
          <div className="contact-info">
            <h3>FAS Support</h3>
            <p><strong>Email:</strong> <a href="mailto:testfasemaail@gmail.com">testfasemaail@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:9812345678">9812345678</a></p>
            <p><strong>Location:</strong> Pokhara, Nepal</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
