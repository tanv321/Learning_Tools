import react, {useState} from 'react';
import { HorizontalBarrier } from './sharedComponents';

export default function Exercise6(){



    return (

        <div>
        <h1>Third exercise</h1>
        <h1 style={{ fontSize: '10px' }}>
        Create a React component called "WeatherWidget". 
        This component should display the weather information for a specific location, such as temperature, humidity, and weather conditions.
        Implement an API integration to fetch the weather data and update the display accordingly.
         Allow the user to input a different location to retrieve weather information dynamically.
        </h1>
        <HorizontalBarrier />
        
        </div>
    )
}