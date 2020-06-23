import React, { useState } from "react";
import axios from "axios";

import WeatherSearch from "./WeatherSearch";
import DisplayData from "./DisplayData";


const Main = () => {

  const [weather, setWeather] = useState();

  const api_call = async (e: any) => {
    e.preventDefault();
    const API_KEY = "3292783108baa7f4424f49c8f7d390bc";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${API_KEY}&lang=se&units=metric`;
    const request = axios.get(API_URL);
    const response = await request;
    setWeather(response.data.main);
  }
  
  return (

    <div className="main">
      <WeatherSearch api_call={api_call}/>
      { weather && <DisplayData weather={weather}/>}
    </div>

  )
}

export default Main;