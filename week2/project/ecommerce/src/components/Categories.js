// Categories.js
import React from 'react';

const Categories = ({ categoriesData, selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div>
      <ul className="category-list">
        {categoriesData.map((category) => (
          <li key={category}>
            <button
              className={selectedCategory === category ? "active-category" : null}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
