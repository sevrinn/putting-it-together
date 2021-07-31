import React, { useState } from 'react';

const Person = (props) => {
  const {firstName, lastName, age, hairColor} = props;
  const[stateAge, setStateAge] = useState(age);

  return(
    <div>
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {stateAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={()=> setStateAge(stateAge + 1)}>Birthday Button for {firstName} {lastName}!</button>
    </div>
  );
}

export default Person;

/**
 * 1. imports react and useState
 * 
 * 3. Creates Person compnent with props
 * 4. Destructures the props
 * 5. Initializes useState state of ageState variable to equal the age passed in by props
 * 
 * 7. Person returns html structure with props plugged in
 * 12. Button has onClick synthetic event attached to it. an anonymous function
 *       runs everytime the button is clicked. the function setsStateAge to stateAge plus 1 
 *       (incrementing the age)
 * 17. export Person component
 */