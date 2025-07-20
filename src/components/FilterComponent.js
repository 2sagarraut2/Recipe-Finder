import { useState } from "react";

const FilterComponent = ({ onSortChange, sortOrder, setSortOrder }) => {
  const handleChange = (e) => {
    setSortOrder(e.target.value);
    onSortChange(e.target.value); // Pass to parent for actual sorting
  };

  return (
    <div className="sort-dropdown-wrapper">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortOrder} onChange={handleChange}>
        <option value="default">Default</option>
        <option value="lowToHigh">Calories: Low to High</option>
        <option value="highToLow">Calories: High to Low</option>
      </select>
    </div>
  );
};

export default FilterComponent;
