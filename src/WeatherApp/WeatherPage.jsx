import React from 'react'
import Search from './Search';
import Details from './Details';
import { useState } from 'react';


function WeatherPage() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        temp: 25,
        feelsLike: 20,
        humidity: 56,
        pressure: 1023,
        weather: "Sunny",
        wind: 5,
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);

    }
    return (
        <>
            <Search updateInfo={updateInfo}/>
            <Details info={weatherInfo}/>
        </>
    );
}

export default WeatherPage;