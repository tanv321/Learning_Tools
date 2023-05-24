import react, {useState} from 'react';

import { HorizontalBarrier } from './sharedComponents';
import { type } from '@testing-library/user-event/dist/type';

export default function Exercise4() {
    let [displayedNumber, setDisplayedNumber] = useState('');
    let [displayedNumber2, setDisplayedNumber2] = useState('');
    let [result, setResult] = useState(0);
    let [operator, setOperator] = useState(null);

    const btnValues = [
        ["C", "C", "C", "/"],
        [7, 8, 9, "*"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, "C", "C","="],
      ];
    
     /* user select numbers we store that number in displayedNumber
           user select operator we store that in setOperator 
           user select number we look at setOperator and perform with respect to the operator then make setoperator empty
           user select "C" we clear the result*/
    const valueCapture = (value) => {
      const value_clicked = value.target.textContent.trim()
      
      if (value_clicked >= 0 && value_clicked <=9){

          if (operator != null){
            console.log("2displayednumber2+", displayedNumber2,"<---displayed number2")
            setDisplayedNumber2(displayedNumber2+value_clicked)
            

          } else {
            setDisplayedNumber(displayedNumber+value_clicked);
            console.log("displayednumber", displayedNumber);
          }

      } else {
        console.log("operator is selected", value_clicked)
        if (value_clicked == "C"){
          setResult(0);
          setOperator(null);
          setDisplayedNumber('');
          setDisplayedNumber2('')
          return
        }
        if (value_clicked != "="){
          setOperator(value_clicked);
        } else {
          if (operator != null){
          
          let to_process = eval(`${displayedNumber}${operator[0]}${displayedNumber2}`);

          setResult(to_process);
          setOperator(null);
          setDisplayedNumber('');
          setDisplayedNumber2('')
          console.log("final", result, displayedNumber, operator);
          
          }
        }
        

      }
      
      console.log("everything", result, displayedNumber, operator);
      
    }
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
       {btnValues.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, columnIndex) => (
            <button key={columnIndex}
            onClick={valueCapture}> {value}
            </button>
            
          ))}
        </div>
      ))}

      <h1 style={{ fontSize:"20px", color:"brown" }}> selected: {displayedNumber} </h1>
      <h1 style={{ fontSize:"20px", color:"brown" }}> selected: {displayedNumber2} </h1>

      {/* Render the result */}
      <h2>Result: {result}</h2>




      </div>
    
    )

}