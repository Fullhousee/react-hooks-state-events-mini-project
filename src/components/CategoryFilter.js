import React from "react";

function CategoryFilter({categories, handleClick, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
          <button 
            key={category}
            className=  {category === selectedCategory ? "selected" : ""}
            value={category} 
            onClick={(e)=> handleClick(e)}
          >
            {category}
          </button>
        ))}
    </div>
  );
}

export default CategoryFilter;
