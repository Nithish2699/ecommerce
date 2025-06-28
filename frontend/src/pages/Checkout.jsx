// src/pages/Checkout.jsx
import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Address:
          <textarea required></textarea>
        </label>
        <label>
          Payment Method:
          <select>
            <option>UPI</option>
            <option>Card</option>
            <option>COD</option>
          </select>
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
