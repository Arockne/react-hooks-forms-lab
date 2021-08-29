import React from "react";

function Filter({ category, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..."
      value={search}
      onChange={event => onSearchChange(event.target.value)} 
      />
      <select name="filter" onChange={onCategoryChange} value={category}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
