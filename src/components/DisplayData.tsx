import React, { useEffect, useState } from "react";

const DisplayData = (props: any) => {
  const [windSpeed, setWindSpeed] = useState("");
  const [units, setUnits] = useState("");
  const {
    temp,
    wind,
    humidity,
    sunrise,
    sunset,
    icon,
    description,
    city,
  } = props.weather;

  const unit = props.unit;
  useEffect(() => {
    // will check if user wants data displayed in metric or imperial
    if (unit === "metric") {
      setUnits("°C");
      setWindSpeed("m/s");
    } else if (unit === "imperial") {
      setUnits("°F");
      setWindSpeed("knots");
    }
  }, [unit]);

  function timeConverter(UNIX_timestamp: number) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  const sunrises = timeConverter(sunrise);
  const sunsets = timeConverter(sunset);

  const ICON_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="display-data">
      <div className="prognos">
        <h3 className="p-header">
          {city}
          <span> right now:</span>
        </h3>
        <p className="p-text">{description}</p>
        <img className="weather-icon" src={ICON_URL} alt="weather-icon" />
      </div>
      <div className="weather-box">
        <div className="data-container">
          <p className="head-para">Temperature</p>
          <p className="value-para">
            {temp} {units}
          </p>
        </div>
        <div className="data-container">
          <p className="head-para">Wind</p>
          <p className="value-para">
            {wind} {windSpeed}
          </p>
        </div>
        <div className="data-container">
          <p className="head-para">Humidity</p>
          <p className="value-para">{humidity} %</p>
        </div>
        <div className="data-container">
          <p className="head-para">Sunrise</p>
          <p className="value-para">{sunrises}</p>
        </div>
        <div className="data-container">
          <p className="head-para">Sunset</p>
          <p className="value-para">{sunsets}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
