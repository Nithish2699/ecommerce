import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
    </div>
  );
}
