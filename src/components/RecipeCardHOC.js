const RecipeCardHOC = (WrappedComponent) => {
  //   accepting old component
  return function EnhancedComponent(props) {
    // HOC component returns a function which returns a component and accepting props passed to old component
    return (
      <>
        <span className="calorie-label">Low Calorie</span>
        <WrappedComponent {...props} />
        {/* rendering old component as it is */}
      </>
    );
  };
};

export default RecipeCardHOC;
