import React, { useState, useRef } from "react";
import "./App.css";
import Khalti from "./assets/khalti.png";
import Esewa from "./assets/esewa.png";
import Card from "./assets/card.png";

// Import product images
import HydratingMoisturizer from "./assets/products/dermaco-moisturizer.png";
import VitaminCSerum from "./assets/products/mamaearth-vit-c.png";
import GentleCleanser from "./assets/products/Gentle-Cleanser.png";
import NightRepairGel from "./assets/products/Gentle-Cleanser.png";
import TonerMist from "./assets/products/Gentle-Cleanser.png";
import EyeCream from "./assets/products/Gentle-Cleanser.png";

const products = [
  {
    id: 1,
    title: "Hydrating Moisturizer",
    description: "A lightweight, oil-free moisturizer that provides 24-hour hydration.",
    price: "Rs. 290.99",
    image: HydratingMoisturizer,
  },
  {
    id: 2,
    title: "Vitamin C Serum",
    description: "Brightens skin and reduces the appearance of dark spots.",
    price: "Rs. 490.99",
    image: VitaminCSerum,
  },
  {
    id: 3,
    title: "Gentle Cleanser",
    description: "Removes dirt, oil, and makeup without stripping the skin.",
    price: "Rs. 190.99",
    image: GentleCleanser,
  },
  {
    id: 4,
    title: "Night Repair Gel",
    description: "Repairs and rejuvenates skin overnight.",
    price: "Rs. 340.99",
    image: NightRepairGel,
  },
  {
    id: 5,
    title: "Toner Mist",
    description: "Instantly refreshes your skin.",
    price: "Rs. 120.50",
    image: TonerMist,
  },
  {
    id: 6,
    title: "Eye Cream",
    description: "Reduces puffiness and dark circles.",
    price: "Rs. 220.00",
    image: EyeCream,
  },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sectionRefs = {
    home: useRef(null),
    products: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowPaymentPopup(true);
  };

  const handlePaymentSelect = (method) => {
    alert(`You selected: ${method} for ${selectedProduct.title}`);
    setShowPaymentPopup(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);

    // Smooth scroll to section
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo" onClick={() => handleNavClick("home")}>FAS</a>
          <div className="menu-icon" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a href="#home" className={`nav-links ${activeSection === "home" ? "active" : ""}`} onClick={() => handleNavClick("home")}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#products" className={`nav-links ${activeSection === "products" ? "active" : ""}`} onClick={() => handleNavClick("products")}>Products</a>
            </li>
            <li className="nav-item">
              <a href="#about" className={`nav-links ${activeSection === "about" ? "active" : ""}`} onClick={() => handleNavClick("about")}>About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={`nav-links ${activeSection === "contact" ? "active" : ""}`} onClick={() => handleNavClick("contact")}>Contact</a>
            </li>
          </ul>
          <div className="nav-icons">
            <a href="#cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <a href="#account" className="account-icon">
              <i className="fas fa-user"></i>
            </a>
          </div>
        </div>
      </nav>

      <header className="hero-section" id="home" ref={sectionRefs.home}>
        <div className="hero-bg">
          <div className="hero-content">
            <h1 className="hero-title">TOLUS SPRING COLLECTION</h1>
            <p className="hero-subtext">Find out our best spring collection. Offering our best quality product in a Tolus spring collection</p>
            <button className="hero-buy-btn">Buy Now</button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <section id="products" ref={sectionRefs.products}>
          <h2 className="section-title">Our Featured Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <h3 className="card-title">{product.title}</h3>
                <p className="card-desc">{product.description}</p>
                <div className="card-footer">
                  <span className="price">{product.price}</span>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="buy-button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section" ref={sectionRefs.about}>
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

        <section id="contact" className="contact-section" ref={sectionRefs.contact}>
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
          </div>
        </section>
      </main>

      {showPaymentPopup && (
        <div className="payment-popup-overlay">
          <div className="payment-popup">
            <h3>Select Payment Method for {selectedProduct.title}</h3>
            <div className="payment-options">
              <button onClick={() => handlePaymentSelect("Khalti")} className="payment-button">
                <img src={Khalti} alt="Khalti" className="payment-logo" />
                Khalti
              </button>
              <button onClick={() => handlePaymentSelect("eSewa")} className="payment-button">
                <img src={Esewa} alt="eSewa" className="payment-logo" />
                eSewa
              </button>
              <button onClick={() => handlePaymentSelect("Credit Card")} className="payment-button">
                <img src={Card} alt="Credit Card" className="payment-logo" />
                Credit Card
              </button>
            </div>
            <button onClick={() => setShowPaymentPopup(false)} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} FAS, Pokhara, Nepal. All rights reserved.</p>
      </footer>
    </div>
  );
}
