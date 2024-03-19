import "./App.css";
import React, { useState } from "react";
import categoriesData from "./fake-data/all-categories";
import Categories from "./components/Categories";
import productsData from "./fake-data/all-products";
import Products from "./components/Products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        categoriesData={categoriesData}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
        <Products
        productsData={productsData}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
