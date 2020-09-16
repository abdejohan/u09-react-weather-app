import React from 'react';

const DisplayData = ({ weather }: any) => {

  
  const {temp, wind, humidity, sunrise, sunset, icon, description, city} = weather;

  
  function timeConverter(UNIX_timestamp: number){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  
  const sunrises = timeConverter(sunrise);
  const sunsets = timeConverter(sunset);
    

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
          <p className="head-para">Temperatur</p>
          <p className="value-para">{temp}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Vind</p>
          <p className="value-para">{wind}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Fuktighet</p>
          <p className="value-para">{humidity}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Soluppgång</p>
          <p className="value-para">{sunrises}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Solnedgång</p>
          <p className="value-para">{sunsets}</p>
        </div>

      </div>
    </div>

  )
}

export default DisplayData;