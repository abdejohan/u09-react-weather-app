import React, { useState } from "react";
import axios from "axios";

import WeatherSearch from "./WeatherSearch";
import DisplayData from "./DisplayData";
import ErrorHandler from "./ErrorHandler";


const Main = () => {

  const [error, setError] = useState(false);
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const api_call = async (e: any) => {
    e.preventDefault();
    const userInput = e.target.elements.userInput.value;
    const API_KEY = "process.env.REACT_APP_WEATHER_API_KEY";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}&lang=se&units=metric`;
    //const API_NEW = `https:api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${API_KEY}&lang=se&units=metric`;
    setError(false);

    try {
      const request = axios.get(API_URL);
      const response = await request;
      setWeather(response.data.main);
      setCity(response.data.name);
      console.log("success");
    } catch(error) {
      setError(true)
    }    
  }
  
  return (

    <div className="main">
      <WeatherSearch api_call={api_call}/>
      { error && <ErrorHandler/> }
      { weather && <DisplayData weather={weather} city={city}/> }
    </div>

  )
}

export default Main;