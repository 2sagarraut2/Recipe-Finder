const ShimmerBlock = ({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  style = {},
  className = "",
}) => (
  <div
    className={`shimmer-block ${className}`}
    style={{ width, height, borderRadius, ...style }}
  />
);

export default ShimmerBlock;
