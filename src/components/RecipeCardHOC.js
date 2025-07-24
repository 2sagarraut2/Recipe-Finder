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

// const ButtonHOC = (RemoteButton) => {
//   return function EnhancedComponent(props) {
//     const { text } = props;
//     return (
//       <div>
//         <RemoteButton {...props} />
//         <div>{text}</div>
//       </div>
//     );
//   };
// };

// export default ButtonHOC;
