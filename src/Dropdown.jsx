import React from "react";
import "./dropdown.css";

function Dropdown() {


    const choices = ['Yes', 'No', 'Ask president', 'Ask instructor'];

  return (
   <div className="drop-container">
  <h1>Should you use dropdown?</h1>
  <div class="dropdown">
  <button class="dropbtn">Select</button>
  <div class="dropdown-content">
   {
    choices.map((choice)=>{

        return ( <a href="#">{choice}</a>)
    })
   }
     
  </div>
</div>

   </div>
  );
}

export default Dropdown;