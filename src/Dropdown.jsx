import React, { useEffect, useState } from 'react';
import './dropdown.css';

const Dropdown = () => {

  // State variables to control the state of the component
const [isOpen, setIsOpen] = useState(false); // boolean value to check if dropdown is open or closed
const [selectedOption, setSelectedOption] = useState(''); // string value to hold the selected option from dropdown

// Array of choices for the dropdown
const choices = ['Yes', 'No', 'Ask President', 'Ask Dad', 'Ask Girlfriend'];


// Set default selected option to 'Select' when component mounts
useEffect(() => {
  setSelectedOption('Select');
}, []);

 // Function to handle hover event
const handleHover = () => {
  setIsOpen(true); // Set isOpen state to true
};

// Function to handle click event with option parameter
const handleClick = (option) => {
  setSelectedOption(option); // Set selectedOption state with the passed option parameter
  setIsOpen(false); // Set isOpen state to false
};
  
  // This code renders a dropdown component with a button and a list of choices. 
// The selected option is displayed on the button, and when clicked, the list of choices is displayed. 
// The user can then select a choice from the list, which updates the selected option.

return (
  <div className='drop-container'>
    <h1>Should you use a dropdown?</h1>
    <div className="dropdown" onMouseEnter={handleHover} onMouseLeave={() => setIsOpen(false)}>
      <button className="dropbtn">{selectedOption} <span>&ensp;&darr;</span></button>
      {isOpen && (
        <div className="dropdown-content">
          {choices.map((choice) => (
            <a onClick={() => handleClick(choice)}>{choice}</a>
          ))}
        </div>
      )}
    </div>
  </div>
);
};

export default Dropdown;
