import React from "react";

const Display5Day = (props: any) => {
  const weatherArray = props.weatherArray;
  const city = props.city;
  const unit = props.unit;

  let daysArray: any[] = [];
  const testArray: any[] = [];

  // will check if user wants data displayed in metric or imperial
  const unitDecider = (unit: string) => {
    if (unit === "metric") {
      return "°C";
    } else if (unit === "imperial") {
      return "°F";
    }
  };

  // will convert date from MM/DD to DD/MM
  const convertDate = (date: string) => {
    return date.split("-").reverse().toString().replace(",", "/");
  };

  if (weatherArray) {
    try {
      weatherArray.forEach((element: { dt_txt: any; main?: any }) => {
        const { dt_txt } = element;
        const date = dt_txt.slice(5, 10);

        if (!daysArray.includes(date)) {
          daysArray.push(date);
        }
      });

      daysArray.forEach((day) => {
        let timeArray: any[] = [];
        weatherArray.forEach(
          (weatherData: { main: any; dt_txt: any; weather: any }) => {
            const { dt_txt } = weatherData;
            const { main } = weatherData;
            const { weather } = weatherData;
            const tempeture = main.temp;
            const date = dt_txt.slice(5, 10);
            const time = dt_txt.slice(10, -3);
            const ICON_URL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

            if (day === date) {
              timeArray.push(
                <li key={main.temp_min} className="display-data__listItem">
                  <div className="weather-information">
                    {time}
                    <span className="display-data__listSpan">
                      {Math.floor(tempeture)} {unitDecider(unit)}
                    </span>
                  </div>
                  <div className="weather-information second">
                    {weather[0].description}
                    <img
                      className="list-weather-icon"
                      src={ICON_URL}
                      alt="weather-icon"
                    />
                  </div>
                </li>
              );
            }
          }
        );
        testArray.push(timeArray);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="display-data">
      {testArray.map((dayData, index) => (
        <div className="display-data__dayContainer" key={index}>
          <h4>
            {city} {convertDate(daysArray[index])}
          </h4>
          <ul className="display-data__list">
            <li className="display-data__listItem-header">
              Time <span className="display-data__listSpan">Temperature</span>
            </li>
            {dayData}
          </ul>
        </div>
      ))}
    </div>
  );
};

//{daysArray.map((days, index)=> <div key={index} className="display-data__dayContainer">{days}</div>)}
export default Display5Day;

// convert api time stamp utc UNIX
