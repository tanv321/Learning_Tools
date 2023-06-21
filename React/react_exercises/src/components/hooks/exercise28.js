import react, {useState, useEffect} from 'react';
import { HorizontalBarrier } from './sharedComponents';
import Modal from 'react-modal';

export default function Exercise28(){
    const [appointment, setAppointment] = useState(false)
    const [months, setMonths] = useState([])
    const [showDate, setShowDate] = useState(false)
    const [tempDate, setTempDate] = useState("")
    const [datePicked, setDatePicked] = useState([])
    const [messageOn, setMessageOn] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    



    const showDates = () => {
        setAppointment(true)
    }



    const calender = [
        ["Jan", "Feb", "Mar", "Apr"],
        ["May", "Jun", "Jul", "Aug"],
        ["Sep", "Oct", "Nov", "Dec"],
      ];
    
    const days = [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
        ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
      ];

    const monthPicked = (event) => {
        setShowDate(true);
        setTempDate(event.target.value)

    }
    const daysPicked = (event) => {
        let picked_date = event.target.value
        setTempDate(prevDate => prevDate + picked_date);
       
    }
    useEffect(() => {
        console.log(tempDate.length, "length")
        if (tempDate.length >= 4) {
        let count = 0;
        console.log(tempDate, "<-tempDate; datePicked->", datePicked);
        for (let i = 0; i < datePicked.length; i++) {
          console.log(datePicked[i]);
          if (datePicked[i] === tempDate) {            
            count += 1;
            break;
          }
        }
        if (count === 0) {
          setDatePicked(prevDate => [...prevDate, tempDate]);
          setMessage("Date confirmed! " + tempDate);
          setMessageType('confirm');
          setMessageOn(true);
        }
        else {
          setMessage("Two identical dates, please choose another date " + tempDate);
          setMessageType('error');
          setMessageOn(true);
      }
        setTempDate('')
    };

      }, [datePicked, tempDate]);

      
    return (
        <div>

        <h1> Exercise Twenty-eight</h1>
        <h1 style={{ fontSize: '10px' }}>
        Create a React component called "BookingCalendar". 
        This component should render a calendar interface for booking appointments. 
        Implement functionalities to choose available dates and time slots, book an appointment, and display the list of booked appointments.
        </h1>
        <HorizontalBarrier />
        <p style={{ fontSize: '20px' }} > Click <button onClick= { showDates } > "need appointment" </button>, to see availabilities. </p>

        { messageOn === true && (
          <div>
          <h1 style={{ color: messageType === 'confirm' ? "green" : "red", fontSize:'30px' }}> { message } </h1>

          </div>

        )}

        { appointment === true && (
        <div>
        <p> Months </p> 
        <select onChange={monthPicked}>
          { calender.flat().map((value, rowIndex) => (
          <option key={rowIndex} value={value}>
            {value}
          </option>
              
            ))}
            </select>
            </div>
        )}


      { showDate === true && (
        <div>
          <p>Days</p>
          <select onChange={daysPicked}>
            {days.flat().map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      )}
       
        
        
        </div>
    
    );

}