import React from "react";

const DisplayData = ({ weather }: any) => {

  
  
  const {temp, temp_min, temp_max, feels_like} = weather;

  return (
    <div className="DisplayData">
     <p>Weather for <span>Stockholm</span></p>
     <div className="weather-box">
       <span>
         <p>Tempeture</p>
         <p> {temp} </p>
       </span>
       <span>
         <p>Max Tempeture</p>
         <p>{temp_max}</p>
       </span>
       <span>
         <p>Min Tempeture</p>
         <p>{temp_min}</p>
       </span>
       <span>
         <p>Feels like</p>
         <p> {feels_like} </p>
       </span>
     </div>
    </div>
  
  )
}

export default DisplayData;