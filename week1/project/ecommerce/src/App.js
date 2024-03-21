import "./App.css";
import React, { useState } from "react";
import categoriesData from "./fake-data/all-categories";
import Categories from "./components/Categories";
import productsData from "./fake-data/all-products";
import Products from "./components/Products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredProducts = selectedCategory
    ? productsData.filter(
        (product) => product.category === selectedCategory.substring(6)
      )
    : productsData;
  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        categoriesData={categoriesData}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Products productsData={filteredProducts} />
    </div>
  );
}

export default App;
