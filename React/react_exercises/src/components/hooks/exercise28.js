import react, {useState} from 'react';
import { HorizontalBarrier } from './sharedComponents';

export default function Exercise28(){
    const [appointment, setAppointment] = useState(false)
    

    const showDates = () => {
        console.log("we clicked");
        setAppointment(true)
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

        {appointment == true && <button> this should show the calender when user clicks on "need appointment" </button>}    
       
        
        
        </div>
    
    );

}