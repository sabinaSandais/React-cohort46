// In pages/HomePage.js
import React from 'react';
import Categories from '../components/Categories';
import Products from '../components/Products';

const HomePage = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <h1>Products</h1>
      <Categories setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </>
  );
};

export default HomePage;
