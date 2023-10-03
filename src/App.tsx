import React from 'react';
import './App.css';
import { Person, Gender } from "./components/Person";

function App() {
  return (
    <div className="App">
      
      <Person 
        name="Saeed"
        age={21}
        gender={Gender.Male}
        isMarried={true}
        friends={["Mayank", "Aryan", "Asad"]}  />
      
    </div>
  );
}

export default App;
