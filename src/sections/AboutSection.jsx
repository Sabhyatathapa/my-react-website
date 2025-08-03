import React from "react";
import "../App.css";

export default function AboutSection({ sectionRef }) {
  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <h2 className="section-title">About FAS</h2>
      <div className="about-content">
        <p>Welcome to FAS, your trusted ecommerce partner from Pokhara, Nepal. We are dedicated to providing high-quality skincare and beauty products for everyone in Nepal.</p>
        <h3>Our Mission</h3>
        <p>To empower individuals in Nepal to feel confident and beautiful by offering effective, safe, and innovative products at your doorstep.</p>
        <h3>Our Values</h3>
        <ul className="values-list">
          <li><strong>Quality:</strong> Only the best, authentic products for our customers.</li>
          <li><strong>Innovation:</strong> Always bringing new and trending products to Nepal.</li>
          <li><strong>Local Focus:</strong> Proudly based in Pokhara, serving all of Nepal.</li>
          <li><strong>Customer Care:</strong> Your satisfaction is our top priority. Contact us anytime!</li>
        </ul>
        <h3>Our Team</h3>
        <p>We are a passionate team from Pokhara, Nepal, committed to making online shopping easy, safe, and enjoyable for you.</p>
      </div>
    </section>
  );
}
