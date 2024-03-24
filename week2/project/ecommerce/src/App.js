// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCategoriesData(data);
      } catch (error) {
        setError("Failed to fetch categories");
      }
      setLoading(false);
    };

    const fetchProducts = async () => {
      try {
        const url = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : "https://fakestoreapi.com/products";
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        setError("Failed to fetch products");
      }
      setLoading(false);
    };

    fetchCategories();
    fetchProducts();
  }, [selectedCategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <div className="App">
        <h1>Products</h1>
        <Categories
          categoriesData={categoriesData}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <Routes>
          <Route path="/" element={<Products productsData={productsData} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

