import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details">
      <div className="title-container">
        <h2>{product.title}</h2>
      </div>
      <div className="product-detail-information">
        <div className="product-details-image">
          <div className="product-image-container">
            <img
              className="product-detail-image"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        <p className="product-detail-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
