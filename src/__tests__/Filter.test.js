import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        {/* add more categories if needed */}
      </select>
    </div>
  );
}

export default Filter;
