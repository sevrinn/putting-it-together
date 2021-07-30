import React from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
        firstName ={"Jane"}
        lastName ={"Doe"}
        age={45}
        hairColor={"Black"}
         />
        

      <Person 
        firstName ={"Jon"}
        lastName ={"Smith"}
        age={88}
        hairColor={"Brown"} />

      <Person 
        firstName ={"Millard"}
        lastName ={"Fillmore"}
        age={50}
        hairColor={"Brown"} />

      <Person 
        firstName ={"Maria"}
        lastName ={"Smith"}
        age={62}
        hairColor={"Brown"} />
    </div>

    
  );
}

export default App;

/**
 * 1. imports react
 * 2. imports App.css
 * 3. imports Person component from Person.js
 * 
 * 6. returns 4 references to Person component with different props passed into each
 * 
 * 39. exports App
 */