import react, {useState, useEffect} from 'react';
import { HorizontalBarrier } from './sharedComponents';




export default function Exercise6(){


    const [location, setLocation] = useState('');

    const locationCaptured = (event) => {
        event.preventDefault();
        const enteredLocation = event.target.elements.location.value;
        console.log(enteredLocation);
     }

  
    return (

        <div>
        <h1> Sixth exercise</h1>
        <h1 style={{ fontSize: '10px' }}>
        Create a React component called "WeatherWidget". 
        This component should display the weather information for a specific location, such as temperature, humidity, and weather conditions.
        Implement an API integration to fetch the weather data and update the display accordingly.
         Allow the user to input a different location to retrieve weather information dynamically.
        </h1>
        <HorizontalBarrier />
        <form onSubmit={locationCaptured}>
        <textarea style={{width: '400px' }} placeholder="Insert location to view the weather: Philadelphia" name="location"></textarea>
        <button type="submit">Submit</button>
        </form>

        </div>
    )
}