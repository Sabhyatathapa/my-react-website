
import React, { useState, useRef } from "react";
import "./App.css";
import Khalti from "./assets/khalti.png";
import Esewa from "./assets/esewa.png";
import Card from "./assets/card.png";
import HydratingMoisturizer from "./assets/products/dermaco-moisturizer.png";
import VitaminCSerum from "./assets/products/mamaearth-vit-c.png";
import GentleCleanser from "./assets/products/Gentle-Cleanser.png";
import NightRepairGel from "./assets/products/Gentle-Cleanser.png";
import TonerMist from "./assets/products/Gentle-Cleanser.png";
import EyeCream from "./assets/products/Gentle-Cleanser.png";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProductsSection from "./sections/ProductsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

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

      <HeroSection />

      <main className="app-main">
        <ProductsSection sectionRef={sectionRefs.products} products={products} handleBuyNow={handleBuyNow} />
        <AboutSection sectionRef={sectionRefs.about} />
        <ContactSection sectionRef={sectionRefs.contact} />
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

      <FooterSection />
    </div>
  );
}
