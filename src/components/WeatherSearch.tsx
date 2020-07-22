import React from "react";

const WeatherSearch = (props: any) => {

  return (

    <div className="weather-search">
      <form onSubmit={props.api_call} className="weather-search__form">
        <input name="userInput" 
        className="weather-search__input" 
        type="text" autoComplete="off" 
        placeholder="Enter City.." required/>

        <div className="weather-search__form-gather">
          <div className="weather-search__checkboxes">
            <input type="checkbox" name="celcius" id="celcius" value="celcius"/>
            <label>C</label>
            <input type="checkbox" name="farenheit" value="farneheit"/>F
          </div>
        <select className="weather-search__forecast" name="forecast">
          <option value="1day">1 Day Forecast</option>
          <option value="5day">5 Day Forecast</option>
        </select>
        <button className="weather-search__button">&rarr;</button>
        </div>
      </form>
    </div>

  )
} 

export default WeatherSearch;