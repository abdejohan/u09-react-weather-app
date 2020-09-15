import React from 'react';


const Display5Day = (props: any) => {
    const weatherArray = props.weatherArray;
    let daysArray: any[] = [];
    const testArray: any[] = [];
  
  if (weatherArray) {
    try {
      weatherArray.forEach((element: { dt_txt: any; main?: any; }) => {
        const {dt_txt} = element;
        const date = dt_txt.slice(5, 10);
        
        if (!daysArray.includes(date)) {
          daysArray.push(date); 
        }
      });
      
    
    
      daysArray.forEach(day => {
        let timeArray: any[] = [];
        weatherArray.forEach((weather: { main: any, dt_txt: any; }) => {
          const {dt_txt} = weather;
          const {main} = weather;
          const tempeture = main.temp;
          const date = dt_txt.slice(5, 10);
          const time = dt_txt.slice(10, -3);
          
          if (day === date) {
            timeArray.push(
            <li key={main.temp_min} className="display-data__listItem">{time} 
              <span className="display-data__listSpan">{Math.floor(tempeture)} C
              </span>
            </li>);
          }      
        });
        testArray.push(timeArray);
      });

    } catch(error) {
      console.log(error);
      
    }
  }
  




  return (
    
    <div className="display-data">
      {testArray.map((dayData, index) => 
        <div className="display-data__dayContainer" key={index}>
          <h2>{daysArray[index]}</h2>
          <ul className="display-data__list">
            <li className="display-data__listItem_header">Time <span className="display-data__listSpan">Tempeture</span></li>
            {dayData}
          </ul>
        </div>)
      }
    </div>

)


}

//{daysArray.map((days, index)=> <div key={index} className="display-data__dayContainer">{days}</div>)}
export default Display5Day;


// convert api time stamp utc UNIX