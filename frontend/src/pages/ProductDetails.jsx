import React, { useEffect, useState } from 'react';
import { getProducts, addToCart } from './api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAddToCart = async (id) => {
    await addToCart(id);
    alert('Added to cart!');
  };

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {products.map(p => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>{p.description}</p>
                <p>₹{p.price}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(p.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
