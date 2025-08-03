import React from "react";
import "../App.css";

export default function FooterSection() {
  return (
    <footer className="custom-footer">
      <div className="footer-main">
        <div className="footer-brand-newsletter">
          <div className="footer-logo">FAS</div>
          <p className="footer-newsletter-text">Get newsletter update for upcoming product and best discount for all item</p>
          <form className="footer-newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" className="footer-input" placeholder="Your email" required />
            <button className="footer-submit" type="submit">Submit</button>
          </form>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-title">Product</div>
            <ul>
              <li>T-Shirt</li>
              <li>Shoes</li>
              <li>Sunglasses</li>
              <li>Boots</li>
              <li>Pants</li>
              <li>Jacket</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Categories</div>
            <ul>
              <li>Man</li>
              <li>Woman</li>
              <li>Kids</li>
              <li>Gift</li>
              <li>New Arrival</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Social Media</div>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">2025 AGs Production</div>
        <div className="footer-policies">
          <span>Terms &amp; Conditions</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
