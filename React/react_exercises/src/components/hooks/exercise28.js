import react, {useState} from 'react';
import { HorizontalBarrier } from './sharedComponents';

export default function Exercise28(){
    const [appointment, setAppointment] = useState(false)
    const [months, setMonths] = useState([])
    const [showDate, setShowDate] = useState(false)


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

    const monthPicked = (value) => {
        setShowDate(true);
        console.log(value.target.textContent)

    }
    const daysPicked = (value) => {
        console.log(value.target.textContent)

    }

    return (
        <div>

        <h1> Exercise Twenty-eight</h1>
        <h1 style={{ fontSize: '10px' }}>
        Create a React component called "BookingCalendar". 
        This component should render a calendar interface for booking appointments. 
        Implement functionalities to choose available dates and time slots, book an appointment, and display the list of booked appointments.
        </h1>
        <HorizontalBarrier />
        <p style={{ fontSize: '13px' }} > Click <button onClick= { showDates } > "need appointment" </button>, to see availabilities. </p>

        { appointment == true && (
        <div>
            <p> Months </p> { calender.map((row, rowIndex) => (
        
        <div key={rowIndex}>
          {row.map((value, columnIndex) => (
            <button key={columnIndex}
            onClick={ monthPicked }>  {value}
            </button>
            
          ))}
          </div>
        
        ))}
        </div>
      )}


        { showDate == true && (
        <div>
            <p> Days </p> { days.map((row, rowIndex) => (

        <div key={rowIndex}>
          {row.map((value, columnIndex) => (
            <button key={columnIndex}
            onClick={ daysPicked }>  {value}
            </button>
            
          ))}
          </div>
        
        ))}
        </div>
      )}
        
       
        
        
        </div>
    
    );

}