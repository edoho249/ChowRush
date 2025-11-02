import React, { useState } from "react";
import { useStore } from "../context/store";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import PaystackPop from "@paystack/inline-js";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const { cart, products, clearCart, increaseQty, decreaseQty } = useStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const total = cart.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.id);
    return acc + (product ? product.price * item.qty : 0);
  }, 0);

  const payWithPaystack = () => {
    const publicKey = "pk_test_afcb9680c55f5201b01d54de093930b8f9b5d310";
    const email = "edohopraise7@gmail.com";

    console.log("🔑 Public Key:", publicKey);
    console.log("💰 Total:", total);
    console.log("💰 Amount in Kobo:", Math.floor(total * 100));
    console.log("📧 Email:", email);

    if (total <= 0) {
      alert("Cart is empty. Please add items before paying.");
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey,
      amount: total * 100,
      email: email,
      onSuccess: (transaction) => {
        alert(`✅ Payment successful! Ref: ${transaction.reference}`);
        clearCart();
      },
      onCancel: () => {
        alert("❌ Payment canceled.");
      },
      onError: (error) => {
        console.error("⚠️ Paystack error:", error);
        alert("Payment failed. Please try again.");
      },
    });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="ChowRush Logo" />
      </Link>
      
      {/* This container holds all navigation elements for proper alignment */}
      <div className="nav-items-right">
        {/* The links container that is toggled on mobile */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>

        {/* This container holds the cart button and menu toggle button side-by-side */}
        <div className="nav-actions">
          {/* This container holds the cart button, which will remain visible on mobile */}
          <div className="cart-container">
            <button onClick={() => setDropdownOpen((prev) => !prev)} className="cart-btn">
              🛒 {cart.length}
            </button>
            {dropdownOpen && (
              <div className="cart-dropdown">
                <h4>Your Cart</h4>
                {cart.length === 0 ? (
                  <p>Cart is empty.</p>
                ) : (
                  <>
                    {cart.map((item) => {
                      const product = products.find((p) => p.id === item.id);
                      if (!product) return null;
                      return (
                        <div key={item.id} className="cart-item">
                          <img src={product.img || "https://via.placeholder.com/50"} alt={product.name} />
                          <div className="cart-info">
                            <p>{product.name}</p>
                            <p>₦{product.price.toLocaleString()}</p>
                          </div>
                          <div className="cart-qty">
                            <button onClick={() => decreaseQty(item.id)}>➖</button>
                            <span>{item.qty}</span>
                            <button onClick={() => increaseQty(item.id)}>➕</button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="cart-total">Total: ₦{total.toLocaleString()}</div>
                    <div className="cart-actions">
                      <button className="clear" onClick={clearCart}>Clear Cart</button>
                      <button className="pay" onClick={payWithPaystack}>Pay</button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          
          {/* The menu toggle button is now inside the new container for better alignment */}
          <button className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}