import react, {useState} from 'react';
import { HorizontalBarrier } from './sharedComponents';


export default function Exercise36() {
 
    let [userSelected, setUserSelected] = useState({
         1: 0, 5: 0, 10: 0, 20:0, 50: 0, 100: 0,
        0.01: 0, 0.05: 0, 0.10: 0, 0.25: 0,
    });
    let [toGive, setToGive] = useState({
        1: 0, 5: 0, 10: 0, 20:0, 50: 0, 100: 0,
       0.01: 0, 0.05: 0, 0.10: 0, 0.25: 0,
   });

    let [charged, setCharged] = useState("")
    let [customerGives, setCustomerGives] = useState("");

    

    const startService = () => {

        const chargedFloat = parseFloat((Math.random() * 20 + 1).toFixed(2));
    const customerGivesFloat = parseFloat((Math.random() * (100 - chargedFloat) + chargedFloat).toFixed(2));
    
        setCharged(chargedFloat);
        setCustomerGives(customerGivesFloat);
    
        const changeToGive = calculateChange(chargedFloat, customerGivesFloat);
        setToGive(changeToGive);
    
        console.log(chargedFloat, "thissssss", customerGivesFloat, changeToGive);
    
    }

    const calculateChange = (charged, given) => {
        const denominations = [100, 50, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
        let changeDue = given - charged;
        let changeToGive = {
            1: 0, 5: 0, 10: 0, 20:0, 50: 0, 100: 0,
            0.01: 0, 0.05: 0, 0.10: 0, 0.25: 0,
        };
    
        denominations.forEach(denomination => {
            if (changeDue >= denomination) {
                let count = Math.floor(changeDue / denomination);
                changeDue = (changeDue - (count * denomination)).toFixed(2);
                changeToGive[denomination] = count;
            }
        });
    
        return changeToGive;
    };


    const evalAnswer = () => {
        if (isEqual(toGive, userSelected)) {
            console.log("Correct")
        }  else {
            console.log("wrong check back")
            console.log(toGive, userSelected);
        }
    }

    function isEqual(obj1, obj2) {

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
    
        if (keys1.length !== keys2.length) {
            return false;
        }
    
        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    
        return true;
    }

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
                    trimmedValue = "0.01";
                    break;
                case "5":
                    trimmedValue = "0.05";
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
            if (["1", "5", "10", "20", "50", "100", "0.01", "0.5", "0.10", "0.25"].includes(trimmedValue)) {
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

      <button style={{ fontSize:'80px' }} onClick={startService}> Start </button>

      <br/>
      <h1 style={{ fontSize:'30px' }}> Price: ${charged} <br/>
           Customer Gives: ${customerGives}  <br/>
           What amount will you hand them back?
        </h1>

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
     
    <br/>
    

    <h1> Giving back:</h1>
    <div style={{ fontSize:"20px" }}>
            {Object.entries(userSelected).map(([key, value]) => (
                <div key={key}>
                    Changes: {"$"}{key}, Count: {value}
                </div>
            ))}
        </div>

    <button style={{ color:"brown", fontSize:'70px' }} onClick={evalAnswer}> submit </button>

    


      </div>
    
    )

}



