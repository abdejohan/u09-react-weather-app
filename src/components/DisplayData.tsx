import React from "react";

const DisplayData = ({ weather }: any) => {

  
  
  const {temp, temp_min, temp_max, feels_like} = weather;

  return (

    <div className="display-data">
      <p>Weather for <span>Stockholm</span></p>
      <div className="weather-box">
        <div className="data-container">
          <p>Tempeture</p>
          <p>{temp}</p>
        </div>
        <div className="data-container">
          <p>Max Tempeture</p>
          <p>{temp_max}</p>
        </div>
        <div className="data-container">
          <p>Min Tempeture</p>
          <p>{temp_min}</p>
        </div>
        <div className="data-container">
          <p>Feels like</p>
          <p> {feels_like} </p>
        </div>
      </div>
    </div>

  )
}

export default DisplayData;