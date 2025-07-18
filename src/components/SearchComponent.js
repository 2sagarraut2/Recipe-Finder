const SearchComponent = ({ searchRecipes }) => {
  const handleRecipeSearch = () => {
    searchRecipes();
  };

  return (
    <div className="search-wrapper">
      <input id="search" type="text" className="search-box" />
      <button className="search-button" onClick={handleRecipeSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
