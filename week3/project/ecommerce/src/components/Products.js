import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const Products = ({ selectedCategory, favoritesOnly }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (favoritesOnly) {
          const favoriteUrls = favorites.map(
            (id) => `https://fakestoreapi.com/products/${id}`
          );
          const responses = await Promise.all(
            favoriteUrls.map((url) => fetch(url))
          );
          const data = await Promise.all(
            responses.map((res) => {
              if (!res.ok) {
                throw new Error("Network response was not ok");
              }
              return res.json();
            })
          );
          setProducts(data);
        } else {
          const apiUrl = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : "https://fakestoreapi.com/products";
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setProducts(data);
        }
        setLoading(false);
      } catch (error) {
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedCategory, favoritesOnly, favorites]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product" key={product.id}>
            <div className="product-box">
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

              <button
                onClick={() => toggleFavorite(product.id)}
                className="favorite-button"
              >
                <img
                  className="favorite-button-image"
                  src={
                    favorites.includes(product.id) ? heartSolid : heartRegular
                  }
                  alt={favorites.includes(product.id) ? "Solid" : "Regular"}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
