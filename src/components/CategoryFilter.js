import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const handleFilter = (e, category) => {
    e.preventDefault();
    onCategorySelect(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={(e) => handleFilter(e, category)}
          className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
