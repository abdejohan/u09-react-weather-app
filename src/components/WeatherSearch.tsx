import React from "react";

const WeatherSearch = (props: any) => {

  return (

    <div className="weather-search">
      <form onSubmit={props.api_call} className="weather-search__form">
        <input className="weather-search__input" name="userInput" type="text" autoComplete="off" placeholder="Enter City.." required/>
        <button className="weather-search__button">&rarr;</button>
      </form>
    </div>

  )
} 

export default WeatherSearch;