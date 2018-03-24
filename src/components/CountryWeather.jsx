import React from 'react';
import ReactDOM from 'react-dom';

export class CountryWeather extends React.Component {
   constructor(props){
     super(props);

   }
   render() {

     console.log("TEST", this.props.weather);

     if (this.props.weather) {

       return (
         <div className="country-weather">
           <h2>Today's weather</h2>

           <ul>
             <li><span>Description:</span> {this.props.weatherInfo.length
                                           ? this.props.weatherInfo[0].description
                                           : null}</li>
             <li><span>Humidity:</span> {this.props.weather.humidity} %</li>
             <li><span>Pressure:</span> {Math.round(this.props.weather.pressure)} hpa</li>
             <li><span>Temperature:</span> {Math.round(this.props.weather.temp_min)} &#176; | {Math.round(this.props.weather.temp_max)} &#176;</li>
             <li><span>Wind speed:</span> {this.props.windSpeed.speed} m/s</li>
           </ul>
         </div>
       )
     } else {
       return null;
     }

   }
 }


/*
let infoWeather = this.props.weatherInfo.map((el, i) => {
    return(
      <ul key={i}>
        <li>Data: {el.applicable_date}</li>
        <span>{el.weather_state_name}</span>
        <span>Temperatura min- {parseInt(el.min_temp)} max- {parseInt(el.max_temp)}</span>

      </ul>
    );
})
*/
