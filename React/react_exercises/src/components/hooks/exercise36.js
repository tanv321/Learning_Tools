import react, {useState} from 'react';
import { HorizontalBarrier } from './sharedComponents';


export default function Exercise36() {
    let [displayedNumber, setDisplayedNumber] = useState('');
    let [userSelected, setUserSelected] = useState({
         1: 0, 5: 0, 10: 0, 20:0, 50: 0, 100: 0,
        0.1: 0, 0.5: 0, 0.10: 0, 0.25: 0,
    });

    const bills = [
        ["1", "5", "10", "20", "50", "100"],
      ];
    
    const coins = [
        ["1", "5", "10", "25"],
    ]
      
    const valueCapture = (value) => {
        let value_clicked = value.target.textContent.trim();
        let trimmedValue;
        
        if (value_clicked.startsWith("$")) {
            trimmedValue = value_clicked.substr(1, value_clicked.length-1);
            console.log(trimmedValue, "<----thiss is trimmedvalue");
        } else {
            trimmedValue = value_clicked.substr(0, value_clicked.length-6);
            
            switch (trimmedValue) {
                case "1":
                    trimmedValue = "0.1";
                    break;
                case "5":
                    trimmedValue = "0.5";
                    break;
                case "10":
                    trimmedValue = "0.10";
                    break;
                case "25":
                    trimmedValue = "0.25";
                    break;
                default:
                    trimmedValue = 99999;
            }
            console.log(trimmedValue, "hmm", trimmedValue.length, trimmedValue===1);

        }
    
        console.log("About to call setUserSelected with trimmedValue: ", trimmedValue);
    
        setUserSelected(prevDictionary => {
            console.log("trimmedValue--->", trimmedValue, trimmedValue==="1", value_clicked);
            if (["1", "5", "10", "20", "50", "100", "0.1", "0.5", "0.10", "0.25"].includes(trimmedValue)) {
                return {...prevDictionary, [trimmedValue]: (prevDictionary[trimmedValue] || 0) + 1};
            } else {
                return prevDictionary;
            }
        });
        
        console.log(value_clicked, userSelected);

        }
        
      
      
      
    
    return (
        <div>
      <h1>Exercise Thirty-six</h1>
      <h1 style={{ fontSize: '10px' }}>
      Create a React component called "CashRegister". 
      This component should simulate a cash register interface where a random value representing the charged amount will be generated. 
      The customer will then hand over a random combination of bills and coins they have in their pocket. 
      The end user, who is operating the cash register, will be tasked with determining how much change to give back.
      </h1>
      <HorizontalBarrier />

       {bills.map((row, rowIndex) => (
        <div style={{ fontSize:"200px" }} key={rowIndex}>
          {row.map((value, columnIndex) => (
            <button style={{ fontSize:"80px", color:"green" }} key={columnIndex}
            onClick= {valueCapture} > {"$"}{value} 
            </button>
          ))}
        </div>
      ))}


    {coins.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, columnIndex) => (
            <button style={{ fontSize:"40px", color:"orange"}} key={columnIndex}
            onClick= {valueCapture} > {value} {"cents"} 
            </button>
          ))}
        </div>
      ))}

      
      {/* Render the result */}




      </div>
    
    )

}