import React from 'react';
const WeatherPage=(props)=>{
    return(
        <div className="Container">
             <h1 className="py-3"><b>{props.cityname}</b></h1>
            <div className="cards">
                <div className="transbox">
           
                <h5 className="py-2">
                  <i className={`wi ${props.weatherIcon} display-1`}></i>  
                  
                  {props.temp_celsius ? (
                   <h1 className="py-2">{props.temp_celsius}&deg;</h1>
                   ) : null}
                  </h5>
                  {minmaxTemp(props.temp_min,props.temp_max)}
                  <h5 className="py">{props.description}</h5>
                  </div>
            </div>
            
        </div>
    );
    
};
function minmaxTemp(minimum,maximum)
{  if(minimum&&maximum)
   { return(
        <h3>
            <span className="px-2">{minimum}&deg;</span>
            <span className="px-2">{maximum}&deg;</span>
        </h3>
    );
}}
export default WeatherPage;