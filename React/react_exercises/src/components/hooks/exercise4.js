import react, {useState} from 'react';

import { HorizontalBarrier } from './sharedComponents';

export default function Exercise4() {
    const [displayedNumber, setDisplayedNumber] = useState('');
    const [result, setResult] = useState('');

    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "cos","="],
      ];

    return (
        <div>
      <h1>Third exercise</h1>
      <h1 style={{ fontSize: '10px' }}>
       Create a React component called "Calculator". 
       This component should render a basic calculator
        interface with buttons for numbers (0-9) and arithmetic operators 
        (+, -, *, /). Implement the functionality to perform arithmetic 
        operations on the displayed numbers. Display the result of the calculation
         on the screen when the "=" button is clicked.
      </h1>
      <HorizontalBarrier />
       <h1>what is this</h1>
       {btnValues.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, columnIndex) => (
            <button key={columnIndex}>{value}</button>
            
          ))}
        </div>
      ))}




      </div>
    
    )

}