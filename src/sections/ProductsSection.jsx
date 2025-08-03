import React from "react";
import "../App.css";

export default function ProductsSection({ sectionRef, products, handleBuyNow }) {
  return (
    <section id="products" ref={sectionRef}>
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
  );
}
