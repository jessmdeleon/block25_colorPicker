import { useState } from "react";  // Import useState hook from React to manage state
import "./index.css";  // Import the CSS file for styling

// Color component definition
const Color = ({ color, selectedColor, setSelectedColor }) => {
  // Function to handle click events on the color component
  const handleClick = () => {
    setSelectedColor(color);  // Set the selected color to the color passed as a prop
  };

  // Determine the class name based on whether this color is the selected color
  const className = selectedColor === color ? `${color} selected` : color;

  // Render the div with the determined class name and attach the click handler
  return <div className={className} onClick={handleClick}></div>;
};

// App component definition
const App = () => {
  const [selectedColor, setSelectedColor] = useState("");  // State to keep track of the selected color

  // Render the main container with a navbar and a list of Color components
  return (
    <div id="container">
      {/* Navbar displaying the currently selected color */}
      <div id="navbar">
        <div>Currently Selected: </div>
        {/* Display the selected color with additional styling */}
        <div className={`selected ${selectedColor}`}>{selectedColor}</div>
      </div>
      {/* List of Color components */}
      <div id="colors-list">
        {/* Each Color component receives its color, the selectedColor state, and the setSelectedColor function as props */}
        <Color
          color="blue"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="violet"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="red"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;  // Export the App component as the default export
