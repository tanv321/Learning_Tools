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
            setDisplayedNumber2(displayedNumber2+value_clicked)
            

          } else {
            setDisplayedNumber(displayedNumber+value_clicked);
          }

      } else {
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
          
          const isDisplayedNumberEmpty = displayedNumber.length === 0;
          let to_process;
          if (isDisplayedNumberEmpty) {
            let to_process = eval(`${result}${operator[0]}${displayedNumber2}`);
            if (operator[0] != "/"){
              setResult(result+to_process);
            }
            setOperator(null);
            setResult(to_process);
            setDisplayedNumber('');
            setDisplayedNumber2('')

          }
          else{
            let to_process = eval(`${displayedNumber}${operator[0]}${displayedNumber2}`);
            setOperator(null);
            setResult(result+to_process);
            setDisplayedNumber('');
            setDisplayedNumber2('')

          }
          
          
          }

        }
        
      }
      
      
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

      <h1 style={{ fontSize:"20px", color:"green" }}> selected: {displayedNumber} </h1>
      <h1 style={{ fontSize:"20px", color:"green" }}> selected: {displayedNumber2} </h1>

      {/* Render the result */}
      <h2>Result: {result}</h2>




      </div>
    
    )

}