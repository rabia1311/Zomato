import React from 'react'
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black", // Set the background color to black
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        position: "absolute", // Add position absolute to prevent overflow
        right: "10px", // Adjust the position of the arrow as needed
      }}
      onClick={onClick}
    ></div>
  );
}

export default NextArrow;