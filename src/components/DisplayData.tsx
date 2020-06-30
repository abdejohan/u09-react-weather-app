import React from "react";

const DisplayData = ({ weather }: any, {summary}: any) => {

  
  
  const {temp, wind, humidity, sunrise, sunset, icon, description} = weather;
  console.log(weather);

  const ICON_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (

    <div className="display-data">
      <p>Weather for <span>Stockholm</span></p>
      <div className="summary">
        <h2 className="prognos-header">Prognos:</h2>
        <p className="prognos-text">{description}</p>
        <img className="weather-icon" src={ICON_URL} alt="weather-icon"/>
      </div>
      <div className="weather-box">
        <div className="data-container">
          <p className="head-para">Tempeture</p>
          <p className="value-para">{temp}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Wind Force</p>
          <p className="value-para">{wind}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Humidity</p>
          <p className="value-para">{humidity}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Sunrise</p>
          <p className="value-para">{sunrise}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Sunset</p>
          <p className="value-para">{sunset}</p>
        </div>

      </div>
    </div>

  )
}

export default DisplayData;