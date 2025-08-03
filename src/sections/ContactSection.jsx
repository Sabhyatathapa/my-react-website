
import React from "react";
import "../App.css";

export default function ContactSection({ sectionRef }) {
  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-panel">
        <div className="contact-info-panel">
          <div className="contact-logo">FAS</div>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-desc">We'd love to hear from you! For any questions, suggestions, or support, please use the details below.</p>
          <div className="contact-info-list">
            <div className="contact-info-item"><strong>Email:</strong> <a href="mailto:testfasemaail@gmail.com">testfasemaail@gmail.com</a></div>
            <div className="contact-info-item"><strong>Phone:</strong> <a href="tel:9812345678">9812345678</a></div>
            <div className="contact-info-item"><strong>Location:</strong> Pokhara, Nepal</div>
          </div>
        </div>
        <div className="contact-form-panel">
          <h3 className="contact-form-title">Send Us a Message</h3>
          <form className="contact-form">
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
      </div>
    </section>
  );
}
