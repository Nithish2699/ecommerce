// src/pages/Cart.jsx
import React from 'react';

const Cart = () => {
  // Placeholder cart items (in real app, use Redux or Context)
  const cartItems = [
    { id: 1, name: 'Product A', quantity: 2, price: 200 },
    { id: 2, name: 'Product B', quantity: 1, price: 300 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} × {item.quantity} = ₹{item.quantity * item.price}
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
