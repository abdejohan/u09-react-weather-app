import React, { useState } from "react";
import axios from "axios";

import Header from "./Header";
import ErrorHandler from "./ErrorHandler";
import WeatherSearch from "./WeatherSearch";
import DisplayData from "./DisplayData";
import Content from "./Container";


const Main = () => {

  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({});
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
      const data = response.data;
      setWeather({temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        icon: data.weather[0].icon,
        description: data.weather[0].description
      });
      setCity(response.data.name);
    } catch(error) {
      setError(true)
    }    
    
  }

  
  
  return (

    <div className="main">
      <Header/>
      <Content>
        <WeatherSearch api_call={api_call}/>
        { error && <ErrorHandler/> }
        { city && <DisplayData weather={weather} city={city}/> }
      </Content>
    </div>
  )
}

export default Main;