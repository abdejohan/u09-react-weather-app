import React from "react";
import axios from "axios";

const WeatherSearch = (props: any, e: any) => {
  // const [coordinates, setCoordinates] = useState({});
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  function getLocation() {
    const quickWeatherContainer = document.getElementsByClassName(
      "weather-search__inner-geo-container"
    )[0] as HTMLElement;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    async function getPosition(position: {
      coords: { latitude: any; longitude: any };
    }) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const API_CALL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=se&units=metric`;

      try {
        const request = axios.get(API_CALL);
        const response = await request;
        const data = response.data;

        return (
          quickWeatherContainer.classList.add("hidden"),
          setTimeout(function () {
            quickWeatherContainer.classList.remove("hidden");
            quickWeatherContainer.innerHTML =
              data.name.toString() + ": " + data.main.temp.toString() + " °C";
            quickWeatherContainer.classList.add("visible");
          }, 400)
        );
      } catch (error) {
        alert("Something whent wrong, sorry!");
      }
    }
  }

  return (
    <div className="weather-search">
      <form onSubmit={props.api_call} className="weather-search__form">
        <input
          name="userInput"
          className="weather-search__input"
          type="text"
          autoComplete="off"
          placeholder="Enter City.."
          required
        />

        <div className="weather-search__form-gather">
          <select className="weather-search__forecast" name="forecast">
            <option value="1day">1 Day Forecast</option>
            <option value="5day">5 Day Forecast</option>
          </select>
          <button className="weather-search__button">&rarr;</button>
        </div>
        <div className="weather-search__bottom-info-bar">
          <div className="weather-search__geo-container">
            <div
              className="weather-search__inner-geo-container"
              onClick={getLocation}
            >
              <span className="weather-search__geo-location">
                QUICK WEATHER
              </span>
              <div className="geo-image"></div>
            </div>
          </div>
          <div className="weather-search__checkbox-container">
            <h4 className="weather-search__checkbox-text">
              Display weather in:
            </h4>
            <input
              className="weather-search__checkbox"
              type="radio"
              defaultChecked
              name="units"
              value="metric"
            />
            Celsius
            <input
              className="weather-search__checkbox"
              type="radio"
              name="units"
              value="imperial"
            />
            Farenheit
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
