import React, { useState } from "react";


export function User({ person }) {
  const [isHidden, setHide] = useState(true)
  const [buttonText, setButtonText] = useState("Show Details")

  

  return (
    <li key={person.email}> 
      <img src={person.picture.thumbnail} alt={person.name.first} />
      <h2>{person.name.first}</h2>
     
      <button 
      onClick={() => {isHidden ? setHide(false) : setHide(true);
        buttonText ? setButtonText("Hide Details") : setButtonText("Show Details");
      }}>
        {buttonText ? "Show Details" : "Hide Details"
        }</button>
      {isHidden ?
      <div></div> :
      <div>
        <p>Age: {person.dob.age}</p>
        <p>Gender: {person.gender}</p>
        <p>Phone: {person.phone}</p>
      </div>
      }
    </li>
  );
}

