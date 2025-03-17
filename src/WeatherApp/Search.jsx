import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search({updateInfo}) {
    let [city, setCity] = useState("");

    const API_KEY = "b2c0e2a5df3071ceae1b1a8a42f78973";

    let fetchWeather = async() => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonData = await data.json();
        // console.log(jsonData);
        let result = {
            city: city,
            temp: jsonData.main.temp,
            feelsLike: jsonData.main.feels_like,
            humidity: jsonData.main.humidity,
            pressure: jsonData.main.pressure,
            weather: jsonData.weather[0].description,
            wind: jsonData.wind.speed,
        }
        console.log(result);
        return result;
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        setCity("");
        let newInfo = await fetchWeather();
        updateInfo(newInfo);
    }

    return (
        <div className="container text-center mt-5">
            <div className="row">
                <h1 className='fw-bold'>Check Your Weather</h1>
                <h4>Enter a city name to get current weather conditions</h4>
                <div className='mt-5 d-flex justify-content-center gap-3'>
                    <input className="form-control p-4 w-50 border-black fs-5 h-75" type="text" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)}/>
                    <button className='btn btn-primary fs-5 fw-bold h-75' onClick={handleSubmit}>Search</button>
                </div>
            </div>
        </div>

        
    );
}

export default Search;