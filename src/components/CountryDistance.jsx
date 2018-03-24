import React from 'react';
import ReactDOM from 'react-dom';

export class CountryDistance extends React.Component {
   constructor(props){
     super(props);

   }
   render() {

     console.log("TEST3", this.props.distance);

     if (this.props.distance) {

       return (
         <div className="country-distance">
           <h4>The distance between Warsaw and the capital of the entered country is :   <strong>{this.props.distance[0].elements[0].distance.text}</strong> </h4>
         </div>
       )
     } else {
       return null;
     }

   }
 }
