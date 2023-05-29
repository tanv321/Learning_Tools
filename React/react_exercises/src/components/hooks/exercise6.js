import react, {useState, useEffect} from 'react';
import { HorizontalBarrier } from './sharedComponents';




export default function Exercise6(){


    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/api/data') // Make an HTTP GET request to the server's API endpoint
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Log the received data to the console
            setMessage(data.message); // Set the received message in the component state
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);
      
  
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
        <h1>{message}</h1>
        </div>
    )
}