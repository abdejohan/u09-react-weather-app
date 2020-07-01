import React from "react";


const Display5Day = (props: any) => {

  const weatherArray = props.weatherArray;
  
  weatherArray.forEach((element: any) => {
    const {main: {temp}, dt_txt} = element;    
    console.log(temp, dt_txt);
    
        
  });
  
  return (
    
    <div className="Display5Day">


        
    </div>

  )


}

export default Display5Day;


// convert api time stamp utc UNIX