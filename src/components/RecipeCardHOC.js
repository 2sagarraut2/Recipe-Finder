const RecipeCardHOC = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return (
      <>
        <span className="calorie-label">Low Calorie</span>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default RecipeCardHOC;
