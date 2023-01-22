import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';


const App = () => {
  const [currentInput, setCurrentInput] = useState([]);
    const youveGotInput = (newInput) => {
        setCurrentInput(last => [...last, newInput]);
      }
  

  return (
    <div className="App">
      <BoxForm onNewInput={youveGotInput}></BoxForm>
      <BoxDisplay input={currentInput}></BoxDisplay>
    </div>
  );
}

export default App;
