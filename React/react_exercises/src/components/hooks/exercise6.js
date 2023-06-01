import react, {useState, useEffect} from 'react';
import { HorizontalBarrier } from './sharedComponents';
import axios from 'axios';


export default function Exercise6(){

    const [workingLink, setWorkingLink] = useState('');
    const [isValid, setIsValid] = useState(null);
    const [location, setLocation] = useState(null);
    const [country, setCountry] = useState(null);
    const [forecast, setForecast] = useState(null);

    const locationCaptured = async (event) => {
        event.preventDefault();
        const enteredLocation = event.target.elements.location.value;
        const data = { key: enteredLocation };
        await axios.post('http://localhost:8000/locationName', data)
        .then(response => {
            // Handle the response from the server
            const weatherLink = response.data.message
            setWorkingLink(weatherLink)
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(workingLink);
    
            if (response.ok) {
              const data = await response.json();
              // Handle the received data

              setIsValid(true);
              setLocation(data.location.name);
              setCountry(data.location.country);
              setForecast(data.current.condition.text);
            } else {
              throw new Error('Request failed');
            }
          } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
            setIsValid(false);
          }
          
        };
    
        fetchData();
      }, [workingLink]);

  
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
        {isValid === true && ( <p>Location: {location}</p> )}
        {isValid === true && ( <p>Country: {country}</p> )}
        {isValid === true && ( <p>Condition: {forecast}</p> )}
        {isValid === false && ( <p>Enter a valid location</p> )}
        
        </div>
    )
}