import React from 'react';
import API from '../api';

function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const checkout = () => {
    cart.forEach(item => {
      API.post('/orders/', {
        product_id: item.id,
        quantity: 1
      }).then(() => alert("Order placed!")).catch(err => alert("Login required"));
    });
    localStorage.removeItem('cart');
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.name} - ₹{item.price}</p>
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
