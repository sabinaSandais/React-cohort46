// Products.js
import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ productsData }) => {
  return (
    <div>
      <ul className="product-list">
        {productsData.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <p>{product.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
