import React, { useState } from "react";
import Categories from "../components/Categories.js";
import Products from "../components/Products.js";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Categories
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Products selectedCategory={selectedCategory} />
    </>
  );
};

export default Home;
