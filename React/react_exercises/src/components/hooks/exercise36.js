import react, {useState, useEffect} from 'react';
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
    let [compute, setCompute] = useState(0.00);
    let [charged, setCharged] = useState("")
    let [customerGives, setCustomerGives] = useState("");
    let [result, setResult] = useState("");
    let [showResults, setShowResults] = useState(false);
    let [correctChange, setCorrectChange] = useState(0);
    const [showCorrectChange, setShowCorrectChange] = useState(false);



    const startService = () => {
        setCompute(0.00);
        setShowResults(false)
        setUserSelected({
            1: 0, 5: 0, 10: 0, 20:0, 50: 0, 100: 0,
            0.01: 0, 0.05: 0, 0.10: 0, 0.25: 0,
          });

        const chargedFloat = parseFloat((Math.random() * 20 + 1).toFixed(2));
        const customerGivesFloat = parseFloat((Math.random() * (100 - chargedFloat) + chargedFloat).toFixed(2));
    
        setCharged(chargedFloat);
        setCustomerGives(customerGivesFloat);
    
        const changeToGive = calculateChange(chargedFloat, customerGivesFloat);
        setToGive(changeToGive);
    
    
    }


    useEffect(() => {
        let toGiveBack = customerGives - charged;
        setCorrectChange(toGiveBack.toFixed(2));
      }, [customerGives, charged]);


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


    const clearAnswer = () => {
        setUserSelected({
            1: 0, 5: 0, 10: 0, 20:0, 50: 0, 100: 0,
            0.01: 0, 0.05: 0, 0.10: 0, 0.25: 0,
          });

        setCompute(0.00);
        setShowResults(false)

    }


    const evalAnswer = () => {
        if (isEqual(toGive, userSelected)) {
            setResult("You got the Correct Answer!")
        }  else {
            setResult("Wrong answer...")
            setShowResults(true)
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
            setCompute(prevState => prevState + parseFloat(trimmedValue));
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
                    trimmedValue = "0.1";
                    break;
                case "25":
                    trimmedValue = "0.25";
                    break;
                default:
                    break;
            }
            setCompute(prevState => parseFloat((prevState + parseFloat(trimmedValue)).toFixed(2)));

        }
        
        setUserSelected(prevDictionary => {
            if (["1", "5", "10", "20", "50", "100", "0.01", "0.5", "0.1", "0.25"].includes(trimmedValue)) {
                return {...prevDictionary, [trimmedValue]: (prevDictionary[trimmedValue] || 0) + 1};
            } else {
                return prevDictionary;
            }
        });
        

        }

        const toggleCorrectChange = () => {
            setShowCorrectChange(prevState => !prevState);
          };
    
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

      <button style={{ fontSize:'1rem' }} onClick={startService}> Start </button>

      <br/>
      <h1 style={{ fontSize:'1rem' }}> Price: ${charged} <br/>
           Customer Gives: ${customerGives}  <br/>
           {showCorrectChange && `Hand them back ${correctChange}`}
      </h1>
      <button onClick={toggleCorrectChange}>
        {showCorrectChange ? 'Hide' : 'Show'} Correct Change
      </button>

       {bills.map((row, rowIndex) => (
        <div style={{ fontSize:"1rem" }} key={rowIndex}>
          {row.map((value, columnIndex) => (
            <button style={{ fontSize:"2rem", color:"green" }} key={columnIndex}
            onClick= {valueCapture} > {"$"}{value} 
            </button>
          ))}
        </div>
      ))}


    {coins.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, columnIndex) => (
            <button style={{ fontSize:"1.5rem", color:"orange"}} key={columnIndex}
            onClick= {valueCapture} > {value} {"cents"} 
            </button>
          ))}
        </div>
      ))}
     

    <h1 style={{fontSize:"1rem"}}> Giving back:</h1>
    <div style={{ fontSize:"1rem" }}>
            {Object.entries(userSelected).map(([key, value]) => (
                <div key={key}>
                    {"$"}{key} = Count: {value}{" "}
                </div>
            ))}
        </div>

    <button style={{ color:"brown", fontSize:'70px' }} onClick={evalAnswer}> submit </button>
    <p style={{ color:"pink", fontSize:"30px"}}> {result}  </p>
    {showResults && <div style={{ fontSize:"1rem", color:"green" }}>
    The correct answer is : 
    {Object.entries(toGive).map(([key, value]) => (
        <div key={key}>
            {"$"}{key} = Count: {value}{" "}
        </div>
    ))}
</div>}

    
    <p style={{fontSize:"20px", color:"green"}} > Your Current balance adds upto ${compute} </p>
    <button style={{ color:"red", fontSize:'20px' }} onClick={clearAnswer}> reset your answer </button>
        
    </div>
    
    )

}



