const FilterComponent = () => {
  const filterObj = [
    {
      id: 1,
      label: "Calories: Low to High",
    },
    {
      id: 2,
      label: "Calories: High to Low",
    },
    {
      id: 3,
      label: "Ratings: Low to High",
    },
    {
      id: 4,
      label: "Ratings: High to Low",
    },
  ];

  return (
    <div className="filter-wrapper">
      <select>
        {filterObj.map((filter) => {
          return <option key={filter.id}>{filter.label}</option>;
        })}
      </select>
    </div>
  );
};

export default FilterComponent;
