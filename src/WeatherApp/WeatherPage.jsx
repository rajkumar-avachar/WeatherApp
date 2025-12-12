import React from "react";
import Search from "./Search";
import Details from "./Details";
import { useState } from "react";

function WeatherPage() {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "City",
      temp: "",
      feelsLike: "",
      humidity: "",
      pressure: "",
      weather: "",
      wind: "",
    });


  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div className="container">
      <Search updateInfo={updateInfo} />
      <Details info={weatherInfo} />
    </div>
  );
}

export default WeatherPage;
