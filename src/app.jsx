import React from 'react';
import ReactDOM from 'react-dom';

require('./css/main.css');

import {CountryInfo} from './components/CountryInfo.jsx';
import {CountryDistance} from './components/CountryDistance.jsx';
import {CountryWeather} from './components/CountryWeather.jsx';
import {CountryArticles} from './components/CountryArticles.jsx';
import {CountryPhoto} from './components/CountryPhoto.jsx';

class App extends React.Component {
   constructor(props){
     super(props);

     this.state = {
       inputCountry: '',
       countries: [],
       title: '',
       message: '',
       weather: '',
       weatherInfo: '',
       windSpeed: '',
       distance: '',
       articles: [],
       photo: ''
     };
   }

   handleChangeCountry = (e) => {
     this.setState({
       inputCountry: e.currentTarget.value
     });
   }

   handleSubmit = (e) => {
    e.preventDefault();


    if ( this.state.inputCountry === '' || this.state.inputCountry.length === 0 ){
      this.setState({
        message: 'Enter the name of the country in English, please'
      });

    } else {
      this.setState({
        title: 'More about ' + this.state.inputCountry,
        message: ''
      });
    }

    fetch('https://restcountries.eu/rest/v2/name/' + this.state.inputCountry)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(res => {
      console.log("Country", res);
      this.setState({
        countries: res
      });

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${res[0].capital}&units=metric&APPID=e58d834578983f2b9d677c479a276512`)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          weather: res.main,
          weatherInfo: res.weather,
          windSpeed: res.wind
        });

    })

    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=Warsaw&destinations=${res[0].capital}&key=AIzaSyDamq3G1OsFUP5bhRWdFZPev7H1E4k4CqU`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(res => {
      console.log(res);
      this.setState({
        distance: res.rows
      });
    })

  })

    //https://developer.nytimes.com/article_search_v2.json#/Console/GET/articlesearch.json

    fetch('http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ this.state.inputCountry +'&sort=newest&api-key=c9d17204319a4b3aa6bfec7eb2d91e82')
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(res => {
      this.setState({
        articles: res.response.docs
      });
    })



    fetch(`https://maps.googleapis.com/maps/api/streetview?key=AIzaSyDI5YfvQhkH4WCau712B_wEgEAAeoa-3wg&size=600x300&location=${this.state.inputCountry}`)
    .then(res => {
      console.log(res);
      return res;
    })
    .then(res => {
      console.log(res);
      this.setState({
        photo: res
      });
    })


  }
   render() {
     return (
       <div>
         <header>
           <h2>Enter the country you are interested in</h2>
           <form onSubmit={this.handleSubmit}>
             <input type="text"
               placeholder="country"
               value={this.state.country}
               onChange={this.handleChangeCountry}></input>
             <input type="submit" value="Confirm"></input>
           </form>
           <p className="message" style={{color: 'red'}}>{this.state.message}</p>
           <h1>{this.state.title}</h1>
           <CountryDistance distance={this.state.distance} />
         </header>
         <section className="main-info">
           <CountryInfo infos={this.state.countries} />
           <CountryWeather weather={this.state.weather} weatherInfo={this.state.weatherInfo} windSpeed={this.state.windSpeed} />
         </section>
         <CountryArticles articles={this.state.articles} />
         <CountryPhoto photo={this.state.photo} />
       </div>
     )
   }
 }

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})
