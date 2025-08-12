const RecipeCardHOC = (WrappedComponent) => {
  //   accepting old component
  return function EnhancedComponent(props) {
    // HOC component returns a function which returns a component and accepting props passed to old component
    return (
      <>
        <span
          className="absolute top-0 right-0 bg-[#e74c3c] text-white text-[11px] font-bold 
px-[10px] py-[4px] rounded-[5px] shadow-[0_2px_6px_rgba(0,0,0,0.15)] 
z-[5] whitespace-nowrap"
        >
          Low Calorie
        </span>
        <WrappedComponent {...props} />
        {/* rendering old component as it is */}
      </>
    );
  };
};

export default RecipeCardHOC;
