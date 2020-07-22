import React from "react";

const DisplayData = ({ weather }: any) => {

  
  const {temp, wind, humidity, sunrise, sunset, icon, description, city} = weather;
  console.log(weather);
  console.log(city + "city");
  
  

  const ICON_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (

    <div className="display-data">
      <div className="prognos">
        <h2 className="p-header">{city}<span>Just nu:</span></h2>
        <p className="p-text">{description}</p>
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