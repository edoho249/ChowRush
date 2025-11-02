
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const CartDropdown = () => {
  
  const [cart, setCart] = useState([
    { name: "Pizza", price: 2000, quantity: 1, image: "/pizza.jpg" },
    { name: "Burger", price: 1500, quantity: 2, image: "/burger.jpg" },
  ]);

 
  const updateQuantity = (index, change) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };


  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const totalInKobo = Math.round(total * 100);

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: "edohopraise7@gmail.com",
    amount: totalInKobo,
    publicKey,
    currency: "NGN",
  };

  const handlePaystackSuccess = (ref) => {
    console.log("✅ Payment success:", ref);
    clearCart();
  };

  const handlePaystackClose = () => {
    console.log("❌ Payment popup closed");
  };

  return (
    <div className="cart-dropdown">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="40" />
              <span>{item.name}</span>
              <span>₦{item.price}</span>
              <div>
                <button onClick={() => updateQuantity(index, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(index, 1)}>+</button>
              </div>
            </div>
          ))}

          <p>Total: ₦{total}</p>
          <button onClick={clearCart}>Clear Cart</button>

          <PaystackButton
            {...paystackConfig}
            text="Pay Now"
            onSuccess={handlePaystackSuccess}
            onClose={handlePaystackClose}
            className="paystack-button"
          />
        </>
      )}
    </div>
  );
};

export default CartDropdown;
