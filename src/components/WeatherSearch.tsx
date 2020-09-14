import React, { useState } from "react";

const WeatherSearch = (props: any) => {
  const [system, setSystem] = useState("C");

  return (

    <div className="weather-search">
      <form onSubmit={props.api_call} className="weather-search__form">
        <input name="userInput" 
        className="weather-search__input" 
        type="text" autoComplete="off" 
        placeholder="Enter City.." required/>

        <div className="weather-search__form-gather">
          <select className="weather-search__forecast" name="forecast">
            <option value="1day">1 Day Forecast</option>
            <option value="5day">5 Day Forecast</option>
          </select>
          <button className="weather-search__button">&rarr;</button>
        </div>
        <div className="weather-search__checkboxes">
          <input className="weather-search__checkbox" type="radio" name="celcius" id="celcius" value="C" checked={system === "C"} onChange={() => {setSystem("C")}}/> Celsius
          <input className="weather-search__checkbox" type="radio" id="celcius" name="farenheit" value="F" checked={system === "F"} onChange={() => {setSystem("F")}}/> Farenheit
        </div>
      </form>
    </div>

  )
} 

export default WeatherSearch;