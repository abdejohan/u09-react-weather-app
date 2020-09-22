import React, { useState } from 'react';
import axios from 'axios';

import Header from './Header';
import ErrorHandler from './ErrorHandler';
import WeatherSearch from './WeatherSearch';
import DisplayData from './DisplayData';
import Content from './Content';
import Display5Day from './Display5Day';
import Footer from './footer';


const Main = (props: any) => {
  
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState("");

  
  const api_call = async (e: any) => {
    
    e.preventDefault();
    setError(false);
    
    const userInput = e.target.elements.userInput.value;      // CITY INPUT
    const forecastInput = e.target.elements.forecast.value;   // 1/5 DAY FORECAST INPUT
    const unitArray = document.getElementsByName("units");
    let unit = "metric";
    
    for (let i = 0; i < unitArray.length; i++) {
      const unitElement = unitArray[i] as HTMLInputElement;
      if (unitElement.checked) {
        unit = unitElement.value;
      } else {
      }
    }
    
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL_1DAY = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}&lang=se&units=${unit}`;
    const API_URL_5DAY = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${API_KEY}&lang=se&units=${unit}`;
    
    // CHECKS IF THE USER WANTS 1 OR 5 DAY FORECAST
    if (forecastInput === "1day") {
      try {
        const request = axios.get(API_URL_1DAY);     
        const response = await request;
        const data = response.data;
        setWeather({temp: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          icon: data.weather[0].icon,
          description: data.weather[0].description,
          city: data.name
        });
        setForecast(forecastInput); 
        //setCity(data.name);
      } catch(error) {
        setError(true)
      }    
    } else if (forecastInput === "5day") {
      try {
        const request = axios.get(API_URL_5DAY);     
        const response = await request;
        const data = response.data;
        setWeather(data.list);
        setForecast(forecastInput);
        //setCity(data.name);
      } catch(error) {
        setError(true)
      }    
    }
    
  }
  
  
  return (
    
    <div className="main">
      <Header/>
      <Content>
        <WeatherSearch api_call={api_call}/>
        { error && <ErrorHandler/> }
        { forecast === "1day" && <DisplayData weather={weather}/> } 
        { forecast === "5day" && <Display5Day weatherArray={weather}/> }
      </Content>
      <Footer/>
    </div>
  )
}

export default Main;