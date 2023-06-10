import React from 'react'

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black", // Set the background color to black
        color: "white", // Set the text color to white
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        position: "absolute", // Add position absolute to prevent overflowing
        top: "50%", // Position the arrow vertically at the center
        left: "10px", // Adjust the positioning as per your requirement
        transform: "translateY(-50%)", // Center the arrow vertically
        zIndex: 9999, // Adjust the z-index as needed
        
      }}
      onClick={onClick}
    >
      {/* Add your arrow icon or content here */}
      <span>&#8592;</span> {/* Example of a left arrow icon */}
    </div>
  );
};

export default PrevArrow;