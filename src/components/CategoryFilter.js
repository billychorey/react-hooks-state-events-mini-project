import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category) => {
    setSelectedCategory(category); 
    onCategoryFilter(category); 
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilter(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
