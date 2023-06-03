import react, {useState, useEffect} from 'react';
import { HorizontalBarrier } from './sharedComponents';
import axios from 'axios';
import clearWeatherImage from './weather_images/clear_weather.jpg';
import blizzardWeatherImage from './weather_images/blizzard_weather.jpg';
import randomWeatherImage from './weather_images/random_weather.jpg';
import cloudyWeatherImage from './weather_images/cloudy_weather.jpg';


export default function Exercise6(){

    const [workingLink, setWorkingLink] = useState('');
    const [isValid, setIsValid] = useState(null);
    const [location, setLocation] = useState(null);
    const [country, setCountry] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [temF, setTemF] = useState(null);
    const [temC, setTemC] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

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
            setTemF(data.current.temp_f)
            setTemC(data.current.temp_c)
          } else {
            setIsValid(null);
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
    
    useEffect(() => {
      if (forecast === 'Clear' || forecast === 'Night' || forecast === 'Sunny') {
        setImageUrl(clearWeatherImage);
      } else if (
        forecast === 'Partly cloudy' || forecast === 'Patchy rain possible' || forecast === 'Blowing snow' || forecast === 'Patchy light drizzle' ||
        forecast === 'Light drizzle' || forecast === 'Patchy light rain' || forecast === 'Light rain' || forecast === 'Moderate rain at times' ||
        forecast === 'Moderate rain' || forecast === 'Heavy rain at times' || forecast === 'Heavy rain' || forecast === 'Light freezing rain' ||
        forecast === 'Moderate or heavy freezing rain' || forecast === 'Patchy light snow' || forecast === 'Light snow' || forecast === 'Patchy moderate snow' ||
        forecast === 'Moderate snow' || forecast === 'Patchy heavy snow' || forecast === 'Heavy snow' || forecast === 'Ice pellets' ||
        forecast === 'Overcast' || forecast === 'Mist' || forecast === 'Fog' || forecast === 'Freezing fog'
      ) {
        setImageUrl(cloudyWeatherImage);
      } else if (forecast === 'Blizzard') {
        setImageUrl(blizzardWeatherImage);
      } else {
        setImageUrl(randomWeatherImage);
      }
    }, [forecast]);
    

    
  
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
        {isValid === true && ( <p>Temperature in Fahrenheit.: {temF}°</p> )}
        {isValid === true && ( <p>Temperature in Celsius.: {temC}°</p> )}
        {isValid === true && ( <p>Condition: {forecast}</p> )}
        {isValid === true && ( <img src={imageUrl} alt="Weather" />) }
        {isValid === false && ( <p>Enter a valid location</p> )}
        </div>
    )
}