import React from 'react';

function ProductCard({ product }) {
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Added to cart!");
  };

  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
