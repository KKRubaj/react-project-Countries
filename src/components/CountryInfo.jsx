import React from 'react';
import ReactDOM from 'react-dom';

export class CountryInfo extends React.Component {
   constructor(props){
     super(props);

   }
   render() {

     let country = this.props.infos.map((el, i) => {
         return(
           <div key={i}>
             <figure className="flag-img">
               <img src={el.flag}></img>
             </figure>
             <ul>
               <li><span>Country:</span> {el.name}</li>
               <li><span>Capital:</span> {el.capital}</li>
               <li><span>Subregion:</span> {el.subregion}</li>
               <li><span>Population:</span> {el.population.toLocaleString()}</li>
               <li><span>Area:</span> {el.area.toLocaleString()} m<sup>2</sup></li>
               <li><span>Currencies:</span> {el.currencies.map(cur => `${cur.code} - ${cur.name}`)}</li>
             </ul>
           </div>
         );
       });

     return (
       <div className={country.length ? "country-info active" : "country-info"} >
           {country}
       </div>
     )
   }
 }
